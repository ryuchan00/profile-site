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
5. 先に証明書だけを作る：`terraform apply -target=aws_acm_certificate.site`。続けて `terraform output certificate_validation_records` で出る CNAME をムームーDNS に登録する。
6. 残りを作る：`terraform apply`。証明書の検証が通るまで待ってから CloudFront が作られる。
7. サイトのドメインの CNAME を、出力の `cloudfront_domain` に向ける。
8. GitHub リポジトリの Variables に `DEPLOY_ROLE_ARN`、`SITE_BUCKET`、`DISTRIBUTION_ID` を登録する。

## 手元での確認

```sh
cd site
npm ci
npm run dev
```
