variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "Region of the AWS"
}

variable "sns_topic_name" {
  type        = string
  default     = "terraform-case-sns"
  description = "Name for SNS topic"
}
