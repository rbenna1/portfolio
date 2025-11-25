#!/bin/bash
# Bootstrap script to create Terraform state bucket and DynamoDB lock table

set -e

BUCKET_NAME="tf-st-raf-portfolio"
REGION="us-east-1"
TABLE_NAME="tf-st-raf-portfolio-lock"

echo "Creating S3 bucket: $BUCKET_NAME in $REGION..."
aws s3api create-bucket \
  --bucket $BUCKET_NAME \
  --region $REGION \
  2>/dev/null || echo "Bucket already exists or creation in progress"

echo "Enabling versioning on bucket..."
aws s3api put-bucket-versioning \
  --bucket $BUCKET_NAME \
  --versioning-configuration Status=Enabled \
  --region $REGION

echo "Creating DynamoDB lock table: $TABLE_NAME..."
aws dynamodb create-table \
  --table-name $TABLE_NAME \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
  --region $REGION \
  2>/dev/null || echo "Table already exists or creation in progress"

echo "Terraform state infrastructure ready!"
