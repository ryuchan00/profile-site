output "certificate_validation_records" {
  description = "ムームーDNS に登録する証明書の検証用 CNAME"
  value = [for o in aws_acm_certificate.site.domain_validation_options : {
    name  = o.resource_record_name
    type  = o.resource_record_type
    value = o.resource_record_value
  }]
}

output "cloudfront_domain" {
  description = "ムームーDNS で、サイトのドメインの CNAME の向き先にする"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "site_bucket" {
  value = aws_s3_bucket.site.bucket
}

output "distribution_id" {
  value = aws_cloudfront_distribution.site.id
}

output "deploy_role_arn" {
  value = aws_iam_role.deploy.arn
}
