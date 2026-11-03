# profile-site

山川 竜太郎の経歴ページ。Astro で作り、S3 と CloudFront で配信する。

## 構成

- `site/`：Astro のサイト（日本語は `/`、英語は `/en/`）。文言は `site/src/i18n/content.ts` にまとめている。
- `infra/bootstrap/`：Terraform の state を置く S3 バケット。最初に一度だけ apply する。
- `infra/main/`：サイトのバケット、CloudFront、証明書、GitHub Actions 用の IAM ロール、予算アラート。
- `.github/workflows/deploy.yml`：`main` に push すると、ビルドして S3 に同期し、キャッシュを消す。

DNS はムームーDNS で管理する。Route 53 は使わない。

## 初回の手順

1. `infra/bootstrap` で `terraform init && terraform apply` を実行し、出力の `state_bucket` を控える。
2. `infra/main/backend.hcl` に `bucket = "<state_bucket>"` と書く（Git に入れない）。
3. `infra/main/example.tfvars` を `terraform.tfvars` にコピーし、ドメインとメールアドレスを入れる。
4. `infra/main` で `terraform init -backend-config=backend.hcl` を実行する。
5. `terraform apply` で全体を作る。`enable_custom_domain` が `false` の間は、CloudFront の既定のドメイン（出力の `cloudfront_domain`）で配信する。
6. `terraform output certificate_validation_records` で出る CNAME をムームーDNS に登録する。
7. 証明書が「発行済み」になったら、`terraform.tfvars` に `enable_custom_domain = true` を足して `terraform apply` する。
8. サイトのドメインの CNAME を、出力の `cloudfront_domain` に向ける。

`aws login` の認証情報は Terraform 1.9 の S3 backend が読めないので、実行前に `export AWS_REGION=ap-northeast-1; eval "$(aws configure export-credentials --format env)"` で環境変数に出す。
9. GitHub リポジトリの Variables に `DEPLOY_ROLE_ARN`、`SITE_BUCKET`、`DISTRIBUTION_ID` を登録する。

## 手元での確認

```sh
cd site
npm ci
npm run dev
```
