variable "domain_name" {
  description = "サイトのドメイン（例: profile.example.com）。DNS はムームーDNS で管理し、CNAME で CloudFront に向ける"
  type        = string
}

variable "enable_custom_domain" {
  description = "証明書の検証用レコードを DNS に登録し終えたら true にする。false の間は CloudFront の既定のドメインで配信する"
  type        = bool
  default     = false
}

# GitHub の不変の subject（use_immutable_subject）では、owner と repo の後ろに ID が付く。
# 値は gh api repos/<owner>/<repo>/actions/oidc/customization/sub の sub_claim_prefix で確認できる
variable "github_oidc_sub_prefix" {
  description = "デプロイを許可する GitHub リポジトリの OIDC subject の接頭辞"
  type        = string
  default     = "repo:ryuchan00@19238591/profile-site@1443712159"
}

variable "budget_email" {
  description = "予算アラートの通知先メールアドレス"
  type        = string
}

variable "monthly_budget_usd" {
  description = "月の予算（USD）。超えそうになるとメールで通知する"
  type        = string
  default     = "3"
}
