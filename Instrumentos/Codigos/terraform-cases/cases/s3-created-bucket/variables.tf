variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "Region of the AWS"
}

variable "bucket_name" {
  type        = string
  default     = "terraform-case-s3"
  description = "Name for bucket"
}