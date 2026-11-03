variable "domain_name" {
  description = "サイトのドメイン（例: profile.example.com）。DNS はムームーDNS で管理し、CNAME で CloudFront に向ける"
  type        = string
}

variable "github_repository" {
  description = "デプロイを許可する GitHub リポジトリ（owner/name）"
  type        = string
  default     = "ryuchan00/profile-site"
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
