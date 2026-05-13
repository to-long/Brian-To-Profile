export type Locale = "en" | "ja";

export const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: "en", label: "EN", native: "English" },
  { code: "ja", label: "JA", native: "日本語" },
];

export const translations = {
  en: {
    nav: {
      resume: "Resume",
      menuTitle: "Menu",
      links: {
        home: "Home",
        experience: "Experience",
        projects: "Projects",
        tech: "Tech",
        contact: "Contact",
      },
    },
    hero: {
      caption: "PRINCIPAL FULLSTACK ENGINEER · TECHNICAL LEADER",
      tagline:
        "16+ years building high-scale products, leading cross-border teams, and turning complex systems into clean, performant experiences.",
      cta: "Get in touch",
    },
    trust: { label: "BUILDING PRODUCTS AT" },
    features: {
      heading: "What I bring",
      cta: "Get in touch",
      items: [
        {
          title: "Full-Stack Engineering",
          description:
            "From React to Go, Node.js to Python — end-to-end product delivery at scale.",
        },
        {
          title: "System Architecture",
          description:
            "Microservices, Micro-FE, and cloud-native systems built for millions of users.",
        },
        {
          title: "AI Integration",
          description:
            "RAG, LLMs, and AI-powered tools that boosted team productivity by 30%.",
        },
        {
          title: "Technical Leadership",
          description:
            "Leading 15+ engineers across Vietnam, Japan, and India with clarity and craft.",
        },
      ],
    },
    metrics: {
      heading: "Impact in numbers",
      items: [
        "Concurrent users scaled from 3,500 to 30,000",
        "Team productivity boost through AI integration",
        "Reduction in post-shipment defects via Shift Left Testing",
      ],
    },
    career: {
      heading: "Career journey",
      durations: ["4+ years", "2 years", "5 years", "3 years"],
      entries: [
        {
          role: "Principal Engineer · Lead Cross-Border Team",
          description:
            "Led 15+ engineers across Vietnam, Japan, and India. Standardized Micro-FE, Feature Flags, and UI components across the corporation. Integrated AI/ML tools boosting productivity by 30%.",
        },
        {
          role: "Technical Leader · Founder Engineer",
          description:
            "Scaled e-commerce platform 8x (3,500 to 30,000 concurrent users). Architected cross-border dropshipping system with Kafka for robust order processing. Built mobile app with React Native serving millions of customers.",
        },
        {
          role: "Fullstack Developer",
          description:
            "Spearheaded migration from jQuery to modern frameworks (React/Angular/Vue). Built Authentication Microservices with RabbitMQ. Won Best Mentor of Niteco Young Talent Program.",
        },
        {
          role: "Backend Developer · Team Leader",
          description:
            "Led development team, managed project lifecycle. Optimized algorithms for device and system performance. Established unit testing and code review practices.",
        },
      ],
    },
    projects: {
      heading: "Selected projects",
      subheading: "A glimpse of products and platforms I've shaped over the years",
      items: [
        {
          title: "Accounting GPT",
          description:
            "AI assistant published on the GPT Store. Analyzes accounting statements and auto-generates reports for finance teams.",
        },
        {
          title: "AI Help Assistant",
          description:
            "In-product RAG chatbot answering user questions in real time. Drove documentation efficiency and UX improvements.",
        },
        {
          title: "Micro-FE Standardization",
          description:
            "Designed the Micro-FE framework adopted across the entire corporation. Earned the MFV Professional Award.",
        },
        {
          title: "Real-Time Shipping Integration",
          description:
            "Deep API integration with major shipping providers. Reduced lost/wrong packages and minimized PayPal disputes.",
        },
        {
          title: "Cross-Border Dropshipping Platform",
          description:
            "Architected the core platform serving millions. Scaled from 3,500 to 30,000 concurrent users; 50,000 daily orders. Includes React Native mobile app.",
        },
        {
          title: "Auth Microservice (Pub/Sub)",
          description:
            "High-performance authentication service shared across multiple European products. Built around RabbitMQ Pub/Sub.",
        },
      ],
    },
    sideProjects: {
      heading: "Side projects",
      subheading:
        "Things I build on weekends — just for fun and to learn new tools",
      items: [
        {
          title: "SwiftPay DeFi",
          description:
            "Decentralized payment gateway — on-chain multi-currency swaps, smart contract escrow, yield-bearing merchant vaults, and fiat off-ramp integration.",
        },
        {
          title: "TMG Payments",
          description:
            "Payment processing platform for healthcare & automotive businesses — practice management integration, multi-channel payments, surcharge program, and POS terminal management.",
        },
        {
          title: "ImpactCocoa",
          description:
            "Farm-to-bar traceability for sustainable cocoa. Tracks each batch from co-op to chocolate maker; permissions + audit trail for buyers.",
        },
        {
          title: "dutchandco.nl",
          description:
            "Renewable energy company website — solar panel configurator, energy savings calculator, and consultation booking.",
        },
        {
          title: "Sunnypoint",
          description:
            "Cloud-based CRM and loyalty platform for beauty salons, restaurants, and retail shops in Japan — point card management, marketing automation, reservation system, mobile app, and multi-store analytics serving 2,500+ stores.",
        },
        {
          title: "Ybox.vn",
          description:
            "Social network for Vietnamese students — career board, skill-sharing groups, and community forums for early-career talent.",
        },
      ],
    },
    tech: {
      heading: "Tech stack",
      subheading: "Technologies I work with daily across the full stack",
      titles: ["Backend", "Frontend", "Mobile", "DevOps", "AI / ML", "Database"],
    },
    contact: {
      heading: "Let's connect",
      subheading:
        "Open to new opportunities, collaborations, and conversations about engineering at scale.",
      labels: { email: "Email", phone: "Phone", linkedin: "LinkedIn", location: "Based in" },
      education: "HUST — B.Sc. Software Engineering (HEDSPI)",
      award1: "MFV Professional Award 2022",
      award2: "Best Mentor — Niteco 2017",
    },
  },
  ja: {
    nav: {
      resume: "履歴書",
      menuTitle: "メニュー",
      links: {
        home: "ホーム",
        experience: "経歴",
        projects: "プロジェクト",
        tech: "技術",
        contact: "お問い合わせ",
      },
    },
    hero: {
      caption: "プリンシパル・フルスタックエンジニア · テクニカルリーダー",
      tagline:
        "16年以上にわたり大規模プロダクトを構築し、国境を越えたチームを率い、複雑なシステムをクリーンで高性能な体験へと変えてきました。",
      cta: "お問い合わせ",
    },
    trust: { label: "これまでの所属" },
    features: {
      heading: "私の強み",
      cta: "お問い合わせ",
      items: [
        {
          title: "フルスタック開発",
          description:
            "React から Go、Node.js から Python まで — スケールするプロダクトをエンドツーエンドで提供。",
        },
        {
          title: "システム設計",
          description:
            "マイクロサービス、Micro-FE、クラウドネイティブ構成で数百万ユーザーを支える。",
        },
        {
          title: "AI 統合",
          description:
            "RAG・LLM・AI ツールでチーム生産性を 30% 向上。",
        },
        {
          title: "テクニカルリード",
          description:
            "ベトナム・日本・インドの 15 名以上のエンジニアを丁寧に率いる。",
        },
      ],
    },
    metrics: {
      heading: "数字で見るインパクト",
      items: [
        "同時接続ユーザーを 3,500 → 30,000 に拡張",
        "AI 統合によりチーム生産性を 30% 向上",
        "Shift Left Testing でリリース後の不具合を削減",
      ],
    },
    career: {
      heading: "キャリア",
      durations: ["4年以上", "2年", "5年", "3年"],
      entries: [
        {
          role: "プリンシパル・エンジニア · クロスボーダー リード",
          description:
            "ベトナム・日本・インドの 15 名以上のエンジニアを率い、Micro-FE・Feature Flags・UI コンポーネントを全社標準化。AI/ML を導入し生産性を 30% 向上。",
        },
        {
          role: "テクニカルリーダー · ファウンダーエンジニア",
          description:
            "EC プラットフォームを 8 倍にスケール（同時接続 3,500 → 30,000）。Kafka を用いたクロスボーダー・ドロップシッピング基盤を設計。React Native モバイルアプリを構築し、数百万の顧客を支える。",
        },
        {
          role: "フルスタック開発者",
          description:
            "jQuery から React/Angular/Vue への移行を主導。RabbitMQ ベースの認証マイクロサービスを構築。Niteco Young Talent Program の Best Mentor を受賞。",
        },
        {
          role: "バックエンド開発者 · チームリーダー",
          description:
            "開発チームを率い、プロジェクトライフサイクルを管理。アルゴリズム最適化でパフォーマンス向上。ユニットテストとコードレビューの仕組みを確立。",
        },
      ],
    },
    projects: {
      heading: "主なプロジェクト",
      subheading: "長年にわたり手がけてきた製品とプラットフォーム",
      items: [
        {
          title: "Accounting GPT",
          description:
            "GPT Store で公開した AI アシスタント。会計帳票を解析し、財務チーム向けのレポートを自動生成。",
        },
        {
          title: "AI ヘルプアシスタント",
          description:
            "プロダクト内蔵の RAG チャットボットでユーザーの質問にリアルタイム回答。ドキュメント効率と UX を改善。",
        },
        {
          title: "Micro-FE 標準化",
          description:
            "全社採用された Micro-FE フレームワークを設計。MFV Professional Award を受賞。",
        },
        {
          title: "リアルタイム配送連携",
          description:
            "主要配送業者の API と深く連携。紛失・誤配を削減し、PayPal の紛争を最小化。",
        },
        {
          title: "クロスボーダー ドロップシッピング基盤",
          description:
            "数百万ユーザーを支える基盤を設計。同時接続 3,500 → 30,000、日次 50,000 注文を処理。React Native モバイルアプリを含む。",
        },
        {
          title: "認証マイクロサービス (Pub/Sub)",
          description:
            "複数の欧州プロダクトで共有する高性能な認証基盤。RabbitMQ Pub/Sub をベースに構築。",
        },
      ],
    },
    sideProjects: {
      heading: "サイドプロジェクト",
      subheading: "週末に趣味と学習のために作っているもの",
      items: [
        {
          title: "SwiftPay DeFi",
          description:
            "分散型決済ゲートウェイ — オンチェーン・マルチ通貨スワップ、スマートコントラクト・エスクロー、利回り付きマーチャントボールト、法定通貨オフランプ連携。",
        },
        {
          title: "TMG Payments",
          description:
            "医療・自動車業界向け決済プラットフォーム — 管理ソフト連携、マルチチャネル決済、サーチャージプログラム、POS端末管理。",
        },
        {
          title: "ImpactCocoa",
          description:
            "サステナブルカカオの農場からチョコレートまでのトレーサビリティ。各バッチを協同組合から製造者まで追跡。",
        },
        {
          title: "dutchandco.nl",
          description:
            "再生可能エネルギー企業サイト — ソーラーパネル構成、省エネ計算、コンサルティング予約。",
        },
        {
          title: "Sunnypoint",
          description:
            "美容院・飲食店・小売店向けクラウド型 CRM・ロイヤルティプラットフォーム — ポイントカード管理、マーケティング自動化、予約システム、モバイルアプリ、2,500店舗以上のマルチ店舗分析。",
        },
        {
          title: "Ybox.vn",
          description:
            "ベトナムの学生向け SNS — キャリアボード、スキルシェアグループ、新卒向けコミュニティフォーラム。",
        },
      ],
    },
    tech: {
      heading: "技術スタック",
      subheading: "フルスタックで日々使っている技術",
      titles: ["バックエンド", "フロントエンド", "モバイル", "DevOps", "AI / ML", "データベース"],
    },
    contact: {
      heading: "お気軽にどうぞ",
      subheading: "新しい機会・コラボレーション・大規模エンジニアリングの会話を歓迎します。",
      labels: { email: "メール", phone: "電話", linkedin: "LinkedIn", location: "拠点" },
      education: "HUST — ソフトウェア工学学士 (HEDSPI)",
      award1: "MFV Professional Award 2022",
      award2: "Best Mentor — Niteco 2017",
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];
