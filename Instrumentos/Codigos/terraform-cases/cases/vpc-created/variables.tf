variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "Region of the AWS"
}

variable "vpc_name" {
  type        = string
  default     = "terraform-case-vpc"
  description = "Name for VPC"
}
