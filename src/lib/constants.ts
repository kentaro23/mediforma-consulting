export const SITE = {
  name: "Mediforma Consulting",
  shortName: "Mediforma",
  description:
    "医療機関・学会・医療関連企業向けに、AI導入支援・DX戦略コンサルティング・SNS運用代行・バックオフィス最適化を提供するMediforma Consultingの公式サイト。",
  baseUrl: "https://mediforma-consulting.vercel.app",
  ogImage: "/images/og-image.png",
  contactEmail: "mediforma1@gmail.com",
  contactPhone: "080-9322-6024",
  businessHours: "平日 9:00-18:00",
  mediformaUrl: "https://mediforma.com"
} as const;

export const NAVIGATION = {
  home: "ホーム",
  services: "サービス",
  pricing: "料金",
  about: "会社概要",
  contact: "お問い合わせ",
  freeConsultation: "無料相談"
} as const;

export const SECTION_LABELS = {
  services: "Services",
  whyChooseUs: "Why Choose Us",
  process: "Process",
  faq: "FAQ",
  pricing: "Pricing",
  contact: "Contact",
  about: "About"
} as const;

export const HERO_CONTENT = {
  headingLine1: "Transforming Healthcare",
  headingLine2: "with Intelligence",
  tagline: "医療の現場に、知性あるDXを。",
  description:
    "AI導入戦略から運用設計、SNS発信、バックオフィス構築まで。医療に特化した知見で、貴院・貴学会の変革を伴走支援します。",
  primaryCta: {
    label: "無料相談を予約する",
    href: "/contact"
  },
  secondaryCta: {
    label: "サービス詳細を見る",
    href: "/services"
  },
  scrollLabel: "Scroll"
} as const;

export const PHILOSOPHY_SECTION = {
  heading: "Why Mediforma Consulting",
  paragraphs: [
    "医療業界は今、急速なデジタル化の波の中にあります。しかし、多くの医療機関は「何から始めればいいかわからない」「導入したが活用できていない」という課題を抱えています。",
    "Mediforma Consultingは、医療の現場を深く理解したうえで、AI・DXの導入から定着までを一気通貫で支援します。ツールの導入だけでなく、業務フローの再設計、スタッフの教育、効果測定まで。本当の意味での「変革」をお届けします。",
    "私たちが大切にしているのは、テクノロジーの力と、現場への思いやりの両立。押し付けるDXではなく、寄り添うDXを。それがMediforma Consultingのスタンスです。"
  ]
} as const;

export const WHY_CHOOSE_US_SECTION = {
  heading: "Why Choose Us",
  subheading: "Mediforma Consultingが選ばれる5つの理由",
  points: [
    {
      id: "01",
      title: "医療業界に特化した専門知識",
      description:
        "一般的なITコンサルタントとは異なり、医療現場の業務フロー、法規制、患者対応の特殊性を熟知しています。「現場がわかるコンサルタント」だからこそ、実効性のある提案ができます。"
    },
    {
      id: "02",
      title: "戦略から実行・定着まで一気通貫",
      description:
        "「レポートを渡して終わり」ではありません。戦略策定、ツール選定、導入支援、スタッフ研修、効果測定、改善提案まで。プロジェクトの始まりから成果が出るまで、伴走し続けます。"
    },
    {
      id: "03",
      title: "AI・最新テクノロジーへの深い知見",
      description:
        "ChatGPT、Claude、画像認識AI、RPA、ノーコードツールなど、最新のテクノロジートレンドを常にキャッチアップ。医療現場に本当に使える技術だけを、適切な形で提案します。"
    },
    {
      id: "04",
      title: "スモールスタートで確実に成果を出す",
      description:
        "大規模な初期投資は不要です。小さく始めて、効果を確認しながら段階的に拡大する。リスクを最小化しながら最大のリターンを得るアプローチを徹底しています。"
    },
    {
      id: "05",
      title: "ワンストップで医療経営をサポート",
      description:
        "AI導入だけでなく、SNS運用、広報、事務代行まで。医療経営に関わる幅広い業務を一つの窓口でカバーできるため、コミュニケーションコストが大幅に削減されます。"
    }
  ]
} as const;

export const STATS_SECTION = {
  heading: "Track Record",
  subheading: "支援実績・数字",
  // NOTE: 以下の数値はプレースホルダーです。実数値に置き換えて運用してください。
  stats: [
    { value: 50, suffix: "+", label: "Projects Delivered", description: "AI導入支援プロジェクト数" },
    { value: 98, suffix: "%", label: "Client Satisfaction", description: "クライアント満足度" },
    { value: 3, suffix: "x", label: "Efficiency Improvement", description: "平均業務効率改善率" },
    { value: 24, suffix: "/7", label: "Support Availability", description: "サポート対応体制" }
  ]
} as const;

export const PROCESS_SECTION = {
  heading: "Process",
  subheading: "ご支援の流れ",
  steps: [
    {
      id: "STEP 01",
      title: "無料ヒアリング（60分）",
      description:
        "現在の課題、目指す姿、ご予算感をお伺いします。オンライン・対面いずれも対応可能です。秘密厳守で、ご相談だけでも歓迎です。"
    },
    {
      id: "STEP 02",
      title: "現状分析・課題整理",
      description:
        "業務フローの可視化、ボトルネックの特定、デジタル化余地の洗い出し。現場ヒアリングとデータ分析を組み合わせた多角的なアセスメントを実施します。"
    },
    {
      id: "STEP 03",
      title: "戦略提案・ロードマップ策定",
      description:
        "短期（3ヶ月）・中期（6ヶ月）・長期（1年）の段階的なDXロードマップを策定。優先順位を明確にし、投資対効果の高い施策から着手します。"
    },
    {
      id: "STEP 04",
      title: "導入・実装支援",
      description:
        "ツールの選定・セットアップ、業務フローの再設計、マニュアル整備、スタッフ研修を実施。「導入したけど使えない」を徹底的に防ぎます。"
    },
    {
      id: "STEP 05",
      title: "運用・定着・改善",
      description:
        "月次レポートによる効果測定、定期ミーティングでの改善提案、新機能の追加提案。成果が出続ける仕組みを構築します。"
    },
    {
      id: "STEP 06",
      title: "スケール・拡張",
      description:
        "成功した施策を他部門・他拠点に展開。次のフェーズの戦略を策定し、継続的な成長を支援します。"
    }
  ]
} as const;

export const CEO_MESSAGE_SECTION = {
  heading: "代表メッセージ",
  quote: "テクノロジーは手段であり、目的ではない",
  nameJa: "大原 健太郎",
  nameEn: "Kentaro Ohara",
  title: "Mediforma Consulting 代表",
  paragraphs: [
    "私がコンサルティングにおいて最も大切にしている原則です。",
    "医療の現場には、日々患者さんと向き合い、命を守るために全力を尽くしている方々がいます。その方々が、事務作業や非効率なオペレーションに貴重な時間を奪われている現状を、テクノロジーの力で変えたい。",
    "しかし、ただ最新のツールを導入すれば解決するわけではありません。現場の声を聴き、業務の流れを理解し、本当に必要な変革だけを、適切なタイミングで、適切な形で実現する。そのプロセスに妥協は一切ありません。",
    "Mediforma Consultingは、医療に携わるすべての方にとっての「信頼できるパートナー」でありたいと考えています。"
  ],
  signature: "大原 健太郎"
} as const;

export const FAQ_SECTION = {
  heading: "FAQ",
  subheading: "よくいただくご質問"
} as const;

export const CTA_SECTION = {
  heading: "まずは、お話しすることから。",
  description: "医療DX・AI導入に関するご相談は、初回60分無料です。",
  primaryCta: {
    label: "無料相談を予約する",
    href: "/contact"
  },
  phoneLabel: "お電話でのご相談"
} as const;

export const PRICING_PAGE = {
  heading: "Pricing",
  subheading: "明瞭な料金体系",
  note:
    "※ 料金はプロジェクトの規模・内容により変動します。詳細は無料ヒアリングにてお見積りいたします。",
  ctaLabel: "まずは無料相談から",
  plans: [
    {
      id: "spot",
      title: "SPOT",
      subtitle: "スポット相談",
      price: "¥100,000〜 / 回",
      isFeatured: false,
      recommendation: "まずは試してみたい方におすすめ",
      features: [
        "60〜90分のコンサルティングセッション",
        "課題整理と初期アドバイス",
        "簡易レポートの提出",
        "メール or オンラインで実施"
      ]
    },
    {
      id: "monthly",
      title: "MONTHLY",
      subtitle: "月額顧問契約",
      price: "¥50,000〜 / 月",
      isFeatured: true,
      recommendation: "継続的にDXを推進したい方におすすめ",
      features: [
        "月2回の定期ミーティング（各60分）",
        "チャットでの随時相談（24時間以内に返信）",
        "月次レポート作成",
        "施策の進捗管理",
        "最低契約期間なし"
      ]
    },
    {
      id: "project",
      title: "PROJECT",
      subtitle: "プロジェクト型",
      price: "¥300,000〜 / 件",
      isFeatured: false,
      recommendation: "本格的にDXプロジェクトを進めたい方におすすめ",
      features: [
        "課題分析〜戦略策定〜導入〜定着まで",
        "専任担当者のアサイン",
        "週次ミーティング",
        "詳細なプロジェクト計画書",
        "成果物の納品"
      ]
    }
  ]
} as const;

export const ABOUT_PAGE = {
  heading: "About",
  subheading: "会社概要",
  lead: "Mediforma Consultingの事業概要をご紹介します。",
  fields: [
    { label: "屋号", value: "Mediforma Consulting（Mediforma内事業）" },
    { label: "代表", value: "大原 健太郎（Kentaro Ohara）" },
    { label: "所在地", value: "（プレースホルダー）" },
    { label: "設立", value: "（プレースホルダー）" },
    { label: "メール", value: SITE.contactEmail },
    { label: "電話", value: SITE.contactPhone },
    {
      label: "事業内容",
      value:
        "AI導入支援、DX戦略コンサルティング、医療系SNS運用代行・ブランディング、バックオフィス最適化支援"
    }
  ],
  related: {
    parentLabel: "親事業",
    parentName: "Mediforma",
    parentUrl: SITE.mediformaUrl,
    relatedLabel: "関連事業",
    relatedNames: ["Mediforma Society", "Mediforma DX", "Mediforma Education"]
  }
} as const;

export const CONTACT_PAGE = {
  heading: "Contact",
  subheading: "お問い合わせ",
  lead: "初回60分の無料ヒアリングを実施しています。お気軽にご相談ください。",
  formTitle: "無料相談フォーム",
  infoTitle: "連絡先情報",
  mapPlaceholder: "MAP",
  formFields: {
    organization: "法人名 / 医療機関名（任意）",
    name: "ご担当者名（必須）",
    email: "メールアドレス（必須）",
    phone: "電話番号（任意）",
    inquiryType: "ご相談内容",
    detail: "詳細（必須）",
    consent: "プライバシーポリシーに同意する"
  },
  inquiryOptions: [
    "AI導入について",
    "DX戦略について",
    "SNS運用について",
    "バックオフィス支援について",
    "料金について",
    "その他"
  ],
  selectPlaceholder: "選択してください",
  submitLabel: "送信する",
  sendingLabel: "送信中...",
  successTitle: "送信が完了しました",
  successDescription: "お問い合わせありがとうございます。1〜2営業日以内にご連絡いたします。",
  closeLabel: "閉じる",
  submitError: "送信に失敗しました。時間をおいて再度お試しください。",
  validation: {
    nameRequired: "ご担当者名を入力してください。",
    emailRequired: "メールアドレスを入力してください。",
    emailInvalid: "有効なメールアドレスを入力してください。",
    detailRequired: "ご相談内容の詳細を入力してください。",
    inquiryRequired: "ご相談内容を選択してください。",
    consentRequired: "プライバシーポリシーへの同意が必要です。"
  }
} as const;

export const PRIVACY_PAGE = {
  heading: "Privacy Policy",
  subheading: "プライバシーポリシー",
  intro:
    "Mediforma Consulting（以下「当方」）は、お客様の個人情報を適切に取り扱い、保護することを重要な責務と考えています。本ポリシーでは、当方における個人情報の取り扱いについて定めます。",
  sections: [
    {
      title: "1. 個人情報の取得",
      body:
        "当方は、お問い合わせフォーム、メール、電話等を通じて、お名前、メールアドレス、電話番号、所属情報等の個人情報を適正に取得します。"
    },
    {
      title: "2. 利用目的",
      body:
        "取得した個人情報は、お問い合わせへの対応、サービス提供、業務上の連絡、契約履行、サービス改善のために利用します。法令で認められる場合を除き、利用目的を超えて使用しません。"
    },
    {
      title: "3. 第三者提供",
      body:
        "当方は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供しません。"
    },
    {
      title: "4. 安全管理",
      body:
        "当方は、個人情報への不正アクセス、漏えい、改ざん、紛失等を防止するため、合理的な安全管理措置を講じます。"
    },
    {
      title: "5. 開示・訂正・削除等",
      body:
        "ご本人から、自己の個人情報の開示、訂正、利用停止、削除等の請求があった場合、法令に基づき適切に対応します。"
    },
    {
      title: "6. 改定",
      body:
        "本ポリシーは、法令改正や運用見直しに応じて予告なく変更することがあります。"
    },
    {
      title: "7. お問い合わせ窓口",
      body: `Mediforma Consulting\nメール: ${SITE.contactEmail}\n電話: ${SITE.contactPhone}`
    }
  ]
} as const;

export const FOOTER_CONTENT = {
  description: "医療の現場に、知性あるDXを。AIと現場理解で、持続可能な変革を支援します。",
  headings: {
    services: "Services",
    company: "Company",
    contact: "Contact"
  },
  serviceLinks: [
    { label: "AI導入支援", href: "/services/ai" },
    { label: "DXコンサルティング", href: "/services/dx" },
    { label: "SNS運用・ブランディング", href: "/services/sns" },
    { label: "バックオフィス最適化", href: "/services/backoffice" }
  ],
  companyLinks: [
    { label: "会社概要", href: "/about" },
    { label: "料金", href: "/pricing" },
    { label: "お問い合わせ", href: "/contact" },
    { label: "プライバシーポリシー", href: "/privacy" }
  ],
  copy: "© 2026 Mediforma Consulting. All rights reserved.",
  privacyLabel: "プライバシーポリシー",
  mediformaLabel: "Mediforma本体サイト"
} as const;

export const SERVICES_DROPDOWN = [
  { label: "AI導入支援", href: "/services/ai" },
  { label: "DXコンサルティング", href: "/services/dx" },
  { label: "SNS運用・ブランディング", href: "/services/sns" },
  { label: "バックオフィス支援", href: "/services/backoffice" }
] as const;

export const SERVICES_OVERVIEW_PAGE = {
  heading: "Services",
  subheading: "医療に特化した4つの支援領域",
  description:
    "戦略立案から実装・運用まで、現場に定着する形で支援します。課題に応じて単体導入・包括支援のどちらにも対応可能です。",
  detailLinkLabel: "詳しく見る →",
  reservationCtaLabel: "無料相談を予約する"
} as const;

export const SERVICE_DETAIL_CONTENT = {
  sectionTitle: "提供サービス詳細",
  caseStudyTitle: "導入事例（プレースホルダー）",
  note: "医療広告ガイドラインや法規制に配慮した設計を前提に、現場の運用負荷まで考慮してご提案します。",
  ctaLabel: "無料相談を予約する →"
} as const;

export const HEADER_UI = {
  globalNavLabel: "グローバルナビゲーション",
  openMenuLabel: "メニューを開く",
  mobileMenuLabel: "モバイルメニュー",
  closeMenuLabel: "メニューを閉じる"
} as const;
