#!/bin/bash
# Cleanup script to remove existing resources before Terraform apply

set +e  # Continue on errors

echo "=== Starting AWS Resource Cleanup ==="

# Wait for CloudFront propagation
sleep 5

# 1. Delete S3 Bucket (try both regions)
echo "Cleaning up S3 bucket..."
aws s3 rm s3://rafik-portfolio --recursive --region eu-west-3 2>/dev/null || true
aws s3 rm s3://rafik-portfolio --recursive --region us-east-1 2>/dev/null || true
sleep 2
aws s3api delete-bucket --bucket rafik-portfolio --region eu-west-3 2>/dev/null || true
sleep 2
aws s3api delete-bucket --bucket rafik-portfolio --region us-east-1 2>/dev/null || true

# 2. Delete CloudFront Cache Policy
echo "Cleaning up CloudFront cache policy..."
CACHE_ID=$(aws cloudfront list-cache-policies --query "CachePolicies[?Name=='rafik-portfolio-cache-policy'].Id" --output text 2>/dev/null)
if [ ! -z "$CACHE_ID" ] && [ "$CACHE_ID" != "None" ]; then
  aws cloudfront delete-cache-policy --id $CACHE_ID 2>/dev/null || true
  sleep 2
fi

# 3. Delete CloudFront Origin Access Control (try multiple times)
echo "Cleaning up CloudFront Origin Access Control..."
for i in {1..3}; do
  OAC_ID=$(aws cloudfront list-origin-access-controls --query "OriginAccessControlList.Items[?Name=='rafik-portfolio-oac'].Id" --output text 2>/dev/null)
  if [ ! -z "$OAC_ID" ] && [ "$OAC_ID" != "None" ]; then
    aws cloudfront delete-origin-access-control --id $OAC_ID 2>/dev/null && break || sleep 2
  fi
done

# 4. Delete IAM Roles
echo "Cleaning up IAM roles..."
for ROLE in lambda-execution-role-rafik-portfolio authorizer-role-rafik-portfolio; do
  if aws iam get-role --role-name $ROLE &>/dev/null; then
    echo "  Deleting role: $ROLE"
    # Detach managed policies
    aws iam list-attached-role-policies --role-name $ROLE --query 'AttachedPolicies[*].PolicyArn' --output text 2>/dev/null | xargs -I {} aws iam detach-role-policy --role-name $ROLE --policy-arn {} 2>/dev/null || true
    # Delete inline policies
    aws iam list-role-policies --role-name $ROLE --query 'PolicyNames[*]' --output text 2>/dev/null | xargs -I {} aws iam delete-role-policy --role-name $ROLE --policy-name {} 2>/dev/null || true
    sleep 1
    # Delete the role
    aws iam delete-role --role-name $ROLE 2>/dev/null || true
  fi
done

# 5. Delete Lambda function if exists
echo "Cleaning up Lambda function..."
aws lambda delete-function --function-name contact-me-rafik-portfolio 2>/dev/null || true

echo "=== Cleanup Complete ==="
