export type Lang = "ja" | "en";

type Link = { label: string; href: string };
type Item = { title: string; body: string; links?: Link[] };
type Job = { period: string; org: string; body: string };

export type Content = {
  meta: { title: string; description: string };
  nav: { otherLang: Link };
  hero: { name: string; role: string; lead: string };
  strengths: { heading: string; items: Item[] };
  career: { heading: string; jobs: Job[] };
  education: { heading: string; items: Job[] };
  projects: { heading: string; items: Item[] };
  skills: { heading: string; groups: { name: string; items: string }[] };
  certs: { heading: string; items: string[] };
  links: { heading: string; items: Link[] };
};

const GITHUB = "https://github.com/ryuchan00";
const BLOG = "https://leokun0210.hatenablog.com/";
const repo = (name: string) => `${GITHUB}/${name}`;

export const content: Record<Lang, Content> = {
  ja: {
    meta: {
      title: "山川 竜太郎",
      description: "ゲーム会社でインフラとアプリケーションを担うエンジニア、山川 竜太郎の経歴と作ったもの。",
    },
    nav: { otherLang: { label: "English", href: "/en/" } },
    hero: {
      name: "山川 竜太郎",
      role: "サーバーサイド / AWS エンジニア",
      lead: "ゲーム会社で、AWS のインフラとアプリケーションの両方を少人数で担っています。先に自分で問題を解き、仕組みにして、チームが使える形で渡すのが得意です。",
    },
    strengths: {
      heading: "強み",
      items: [
        {
          title: "先に解いて、仕組みにして渡す",
          body: "テストも Lint も CI もない状態から開発基盤を導入し、研修を企画して講師も務めました。Amazon Bedrock で社内向けの AI チャットを作り、職種を超えて使われています。",
        },
        {
          title: "理由を持って技術を選ぶ",
          body: "チーム全員が保守できるよう管理画面を Blazor に移し、DB マイグレーションは Atlas で差分の適用まで自動にしました。画像のサムネイルは CloudFront と Lambda で必要なときだけ作ります。",
        },
        {
          title: "計測して性能を上げる",
          body: "APM を導入し、負荷テストを計画して実施しました。ISUCON2026 では計測をもとに改善を重ねました。",
        },
      ],
    },
    career: {
      heading: "職歴",
      jobs: [
        { period: "2025 –", org: "ゲーム会社", body: "ゲームのサーバーサイド開発と AWS インフラの設計、構築、運用。Terraform と GitHub Actions、テスト基盤の導入。" },
        { period: "2017 – 2023", org: "GMOペパボ株式会社", body: "EC サイト構築サービス「カラーミーショップ」の開発。Ruby on Rails、API、機能追加と改修。" },
        { period: "2016 – 2017", org: "株式会社シーベース", body: "クラウド型の社内評価システムの要件定義と機能改修。お客様の要望を聞いて提案。" },
        { period: "2013 – 2016", org: "SBSソリューション株式会社", body: "ホストコンピュータのプログラム開発と運用保守。" },
      ],
    },
    education: {
      heading: "学歴",
      items: [
        { period: "2023 – 2025", org: "電気通信大学大学院 情報理工学研究科 博士前期課程 修了", body: "データストリームのスケッチ（Sliding Sketch）の研究。" },
        { period: "2019 – 2023", org: "電気通信大学 情報理工学域 卒業", body: "卒業研究：動的に変化する多重集合に対する Min-Hash の空間計算量の削減。" },
      ],
    },
    projects: {
      heading: "作ったもの",
      items: [
        { title: "学園迷宮 | School Corridor", body: "無限に続く廃校の廊下で異変を見つけ、玄関を目指す短編ウォーキングシミュレーター。チームで制作し、Steam で無料公開（2025 年 8 月）。", links: [{ label: "Steam", href: "https://store.steampowered.com/app/3935460/" }] },
        { title: "Xunit.SharedExamples", body: "RSpec の shared examples を xUnit.net v3 で書けるようにするライブラリ。NuGet で公開。", links: [{ label: "GitHub", href: repo("XunitSharedExamples") }] },
        { title: "ForbiddenChars", body: "紛らわしい文字（0/O、1/l）を拒否するプロパティを生成する C# のソースジェネレーター。NuGet で公開。", links: [{ label: "GitHub", href: repo("ForbiddenChars") }] },
        { title: "tmux-pane-beacon", body: "tmux のペインに色とコーディングエージェントの状態を表示するプラグイン（Rust、Shell）。", links: [{ label: "GitHub", href: repo("tmux-pane-beacon") }, { label: "紹介記事", href: `${BLOG}entry/tmux-pane-beacon` }] },
        { title: "Secure Coding Lab", body: "SQL インジェクションや XSS を体験して直す研修用アプリ。受講者ごとに実行環境を分け、20 人の同時利用を検証。", links: [{ label: "GitHub", href: repo("secure-coding-lab") }] },
        { title: "このサイト", body: "Astro で作り、S3 と CloudFront で配信。インフラは Terraform、公開は GitHub Actions（OIDC）で自動化。" },
      ],
    },
    skills: {
      heading: "スキル",
      groups: [
        { name: "AWS", items: "ECS Fargate, ALB, Aurora, ElastiCache, CloudFront, S3, Lambda, Route 53, Bedrock" },
        { name: "IaC / CI", items: "Terraform, GitHub Actions, Docker" },
        { name: "言語", items: "C#, Ruby, PHP, C++, Go, Rust, Python" },
        { name: "テスト", items: "xUnit, RSpec, E2E（スモークテスト）" },
      ],
    },
    certs: {
      heading: "資格",
      items: [
        "AWS Certified Solutions Architect - Professional（2026）",
        "応用情報技術者（2024）",
        "LPIC Level 1（2018）",
        "基本情報技術者（2016）",
      ],
    },
    links: {
      heading: "リンク",
      items: [
        { label: "GitHub", href: GITHUB },
        { label: "技術ブログ", href: BLOG },
      ],
    },
  },
  en: {
    meta: {
      title: "Ryutaro Yamakawa",
      description: "Career and projects of Ryutaro Yamakawa, an engineer handling both AWS infrastructure and applications at a game company.",
    },
    nav: { otherLang: { label: "日本語", href: "/" } },
    hero: {
      name: "Ryutaro Yamakawa",
      role: "Server-side / AWS Engineer",
      lead: "At a game company, I handle both the AWS infrastructure and the applications with a small team. I like to solve a problem first, turn the solution into a system, and hand it over in a form the team can use.",
    },
    strengths: {
      heading: "Strengths",
      items: [
        {
          title: "Solve first, then hand it over",
          body: "I introduced tests, linting, and CI where none existed, and planned and taught the training. I built an internal AI chat on Amazon Bedrock that people across job roles now use.",
        },
        {
          title: "Choose technology for a reason",
          body: "I moved the admin console to Blazor so the whole team can maintain it, and adopted Atlas to automate applying database migrations. Thumbnails are generated on demand with CloudFront and Lambda.",
        },
        {
          title: "Measure, then improve",
          body: "I introduced APM and planned and ran load tests. At ISUCON2026 I improved the application step by step based on measurements.",
        },
      ],
    },
    career: {
      heading: "Experience",
      jobs: [
        { period: "2025 –", org: "Game company", body: "Server-side development and design, build, and operation of the AWS infrastructure. Introduced Terraform, GitHub Actions, and testing." },
        { period: "2017 – 2023", org: "GMO Pepabo, Inc.", body: "Developed the e-commerce platform \"Color Me Shop\" with Ruby on Rails." },
        { period: "2016 – 2017", org: "C-Base Inc.", body: "Requirements and feature work on a cloud-based employee review system. Proposed solutions based on customer requests." },
        { period: "2013 – 2016", org: "SBS Solutions Co., Ltd.", body: "Development and maintenance of mainframe programs." },
      ],
    },
    education: {
      heading: "Education",
      items: [
        { period: "2023 – 2025", org: "M.Eng., The University of Electro-Communications", body: "Research on data stream sketches (Sliding Sketch)." },
        { period: "2019 – 2023", org: "B.Eng., The University of Electro-Communications", body: "Thesis: reducing the space complexity of Min-Hash for dynamic multisets." },
      ],
    },
    projects: {
      heading: "Projects",
      items: [
        { title: "School Corridor (学園迷宮)", body: "A short walking simulator: find anomalies in an endless school corridor and reach the exit. Made with a team and released free on Steam (August 2025, Japanese only).", links: [{ label: "Steam", href: "https://store.steampowered.com/app/3935460/" }] },
        { title: "Xunit.SharedExamples", body: "RSpec-style shared examples for xUnit.net v3. Published on NuGet.", links: [{ label: "GitHub", href: repo("XunitSharedExamples") }] },
        { title: "ForbiddenChars", body: "A C# source generator for properties that reject confusable characters such as 0/O and 1/l. Published on NuGet.", links: [{ label: "GitHub", href: repo("ForbiddenChars") }] },
        { title: "tmux-pane-beacon", body: "A tmux plugin that colors each pane and shows coding-agent status (Rust, Shell).", links: [{ label: "GitHub", href: repo("tmux-pane-beacon") }] },
        { title: "Secure Coding Lab", body: "A hands-on training app for SQL injection and XSS. Each trainee gets an isolated environment; tested with 20 concurrent users.", links: [{ label: "GitHub", href: repo("secure-coding-lab") }] },
        { title: "This site", body: "Built with Astro and served from S3 and CloudFront. Infrastructure in Terraform, deployed by GitHub Actions with OIDC." },
      ],
    },
    skills: {
      heading: "Skills",
      groups: [
        { name: "AWS", items: "ECS Fargate, ALB, Aurora, ElastiCache, CloudFront, S3, Lambda, Route 53, Bedrock" },
        { name: "IaC / CI", items: "Terraform, GitHub Actions, Docker" },
        { name: "Languages", items: "C#, Ruby, PHP, C++, Go, Rust, Python" },
        { name: "Testing", items: "xUnit, RSpec, E2E (smoke tests)" },
      ],
    },
    certs: {
      heading: "Certifications",
      items: [
        "AWS Certified Solutions Architect - Professional (2026)",
        "Applied Information Technology Engineer (2024)",
        "LPIC Level 1 (2018)",
        "Fundamental Information Technology Engineer (2016)",
      ],
    },
    links: {
      heading: "Links",
      items: [
        { label: "GitHub", href: GITHUB },
        { label: "Blog (Japanese)", href: BLOG },
      ],
    },
  },
};
