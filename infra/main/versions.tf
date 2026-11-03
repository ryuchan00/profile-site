terraform {
  required_version = ">= 1.9"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  # bucket は bootstrap の出力を backend.hcl に書いて渡す（terraform init -backend-config=backend.hcl）
  backend "s3" {
    key    = "profile-site/main.tfstate"
    region = "ap-northeast-1"
  }
}

provider "aws" {
  region = "ap-northeast-1"
}

# CloudFront で使う証明書は us-east-1 に作る必要がある
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}
