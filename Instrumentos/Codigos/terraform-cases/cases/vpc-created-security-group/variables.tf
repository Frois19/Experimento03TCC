variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "Region of the AWS"
}

variable "security_group_name" {
  type        = string
  default     = "terraform-case-security_group"
  description = "Name for security group"
}
