terraform {
	backend "s3" {
		bucket         = "tf-st-raf-portfolio"
		key            = "terraform.tfstate"
		dynamodb_table = "tf-st-raf-portfolio-lock"
		region         = "us-east-1"
	}

	required_providers {
		aws = {
			source  = "hashicorp/aws"
			version = "~> 5.84.0"
		}
		null = {
			source = "hashicorp/null"
			version = "~> 3.2.3"
		}
	}
	required_version = ">= 1.2.0"
}

# Configure the default AWS provider
provider "aws" {
	region = var.aws_region

	skip_metadata_api_check     = true
	skip_region_validation     = true
	skip_credentials_validation = true
}

# Additional provider for ACM certificate (CloudFront requires certificates in us-east-1)
provider "aws" {
	alias  = "us-east-1"
	region = "us-east-1"

	skip_metadata_api_check     = true
	skip_region_validation     = true
	skip_credentials_validation = true
}