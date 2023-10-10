<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | 5.12.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 5.12.0 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [aws_db_instance.db_instance](https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/db_instance) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_aws_region"></a> [aws\_region](#input\_aws\_region) | Region of the AWS | `string` | `"us-east-1"` | no |
| <a name="input_db_name"></a> [db\_name](#input\_db\_name) | Name for db | `string` | `"terraform-case-rds"` | no |
| <a name="input_db_password"></a> [db\_password](#input\_db\_password) | Db password | `string` | `"100nha@db"` | no |
| <a name="input_db_type"></a> [db\_type](#input\_db\_type) | Type for db instance | `string` | `"db.t2.micro"` | no |
| <a name="input_db_username"></a> [db\_username](#input\_db\_username) | Db username | `string` | `"dbuser123"` | no |

## Outputs

No outputs.
<!-- END_TF_DOCS -->