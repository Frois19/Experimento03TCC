variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "Region of the AWS"
}

variable "instance_type" {
  type        = string
  default     = "t2.micro"
  description = "Type for the instance"
}

variable "instance_name" {
  type        = string
  default     = "terraform-case-ec2"
  description = "Name for instance"
}