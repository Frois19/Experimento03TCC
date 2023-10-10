resource "aws_sns_topic" "topic_sns" {
  name = var.sns_topic_name
}