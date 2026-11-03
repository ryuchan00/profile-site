# 証明書の検証用レコードはムームーDNS に手で登録する（出力の certificate_validation_records を参照）。
# 登録して検証が通るまで、aws_acm_certificate_validation は待ち続ける。
resource "aws_acm_certificate" "site" {
  provider          = aws.us_east_1
  domain_name       = var.domain_name
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "site" {
  provider        = aws.us_east_1
  certificate_arn = aws_acm_certificate.site.arn

  timeouts {
    create = "2h"
  }
}
