export type Locale = "en" | "vi" | "ja";

export const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: "en", label: "EN", native: "English" },
  { code: "vi", label: "VI", native: "Tiếng Việt" },
  { code: "ja", label: "JA", native: "日本語" },
];

export const translations = {
  en: {
    nav: {
      resume: "Resume",
      menuTitle: "Menu",
    },
    hero: {
      caption: "PRINCIPAL FULLSTACK ENGINEER · TECHNICAL LEADER",
      tagline:
        "15 years building high-scale products, leading cross-border teams,\nand turning complex systems into clean, performant experiences.",
      cta: "Get in touch",
    },
    trust: {
      label: "BUILDING PRODUCTS AT",
    },
    features: {
      heading: "What I bring",
      cta: "Get in touch",
    },
    metrics: {
      heading: "Impact in numbers",
    },
    career: {
      heading: "Career journey",
    },
    projects: {
      heading: "Selected projects",
      subheading: "A glimpse of products and platforms I've shaped over the years",
    },
    tech: {
      heading: "Tech stack",
      subheading: "Technologies I work with daily across the full stack",
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
  vi: {
    nav: {
      resume: "Hồ sơ",
      menuTitle: "Menu",
    },
    hero: {
      caption: "PRINCIPAL FULLSTACK ENGINEER · TECHNICAL LEADER",
      tagline:
        "15 năm xây dựng sản phẩm quy mô lớn, dẫn dắt đội ngũ xuyên biên giới,\nbiến hệ thống phức tạp thành trải nghiệm tinh gọn, hiệu năng cao.",
      cta: "Liên hệ",
    },
    trust: {
      label: "ĐÃ TỪNG LÀM TẠI",
    },
    features: {
      heading: "Tôi mang đến",
      cta: "Liên hệ",
    },
    metrics: {
      heading: "Số liệu ấn tượng",
    },
    career: {
      heading: "Hành trình sự nghiệp",
    },
    projects: {
      heading: "Dự án nổi bật",
      subheading: "Một số sản phẩm và nền tảng tôi đã định hình qua nhiều năm",
    },
    tech: {
      heading: "Công nghệ",
      subheading: "Những công nghệ tôi sử dụng hàng ngày trên toàn stack",
    },
    contact: {
      heading: "Kết nối",
      subheading:
        "Sẵn sàng cho cơ hội mới, hợp tác và những cuộc trò chuyện về kỹ thuật ở quy mô lớn.",
      labels: { email: "Email", phone: "Điện thoại", linkedin: "LinkedIn", location: "Địa điểm" },
      education: "HUST — Cử nhân Kỹ thuật Phần mềm (HEDSPI)",
      award1: "Giải thưởng MFV Professional 2022",
      award2: "Best Mentor — Niteco 2017",
    },
  },
  ja: {
    nav: {
      resume: "履歴書",
      menuTitle: "メニュー",
    },
    hero: {
      caption: "プリンシパル・フルスタックエンジニア · テクニカルリーダー",
      tagline:
        "15年にわたり大規模プロダクトを構築し、国境を越えたチームを率い、\n複雑なシステムをクリーンで高性能な体験へと変えてきました。",
      cta: "お問い合わせ",
    },
    trust: {
      label: "これまでの所属",
    },
    features: {
      heading: "私の強み",
      cta: "お問い合わせ",
    },
    metrics: {
      heading: "数字で見るインパクト",
    },
    career: {
      heading: "キャリア",
    },
    projects: {
      heading: "主なプロジェクト",
      subheading: "長年にわたり手がけてきた製品とプラットフォーム",
    },
    tech: {
      heading: "技術スタック",
      subheading: "フルスタックで日々使っている技術",
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
