variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "Region of the AWS"
}

variable "db_name" {
  type        = string
  default     = "TerraformCaseRDS"
  description = "Name for db"
}

variable "db_type" {
  type        = string
  default     = "db.t2.micro"
  description = "Type for db instance"
}

variable "db_username" {
  type        = string
  default     = "dbuser123"
  description = "Db username"
}

variable "db_password" {
  type        = string
  default     = "100nhadb"
  description = "Db password"
}
