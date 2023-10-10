variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "Region of the AWS"
}

variable "repository_name" {
  type        = string
  default     = "terraform-case-ecr"
  description = "Name for repository"
}