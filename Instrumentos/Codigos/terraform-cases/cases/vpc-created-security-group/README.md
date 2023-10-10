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
| [aws_security_group.allow_tls](https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/security_group) | resource |
| [aws_vpc.main](https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/vpc) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_aws_region"></a> [aws\_region](#input\_aws\_region) | Region of the AWS | `string` | `"us-east-1"` | no |
| <a name="input_security_group_name"></a> [security\_group\_name](#input\_security\_group\_name) | Name for security group | `string` | `"terraform-case-security_group"` | no |

## Outputs

No outputs.
<!-- END_TF_DOCS -->