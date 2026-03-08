export type HomeServiceCard = {
  id: string;
  icon: string;
  titleEn: string;
  titleJa: string;
  description: string;
  href: string;
};

export type ServiceDetailPageData = {
  slug: "ai" | "dx" | "sns" | "backoffice";
  heroTitle: string;
  heroLead: string;
  sections: Array<{
    title: string;
    description: string;
  }>;
  caseStudies?: Array<{
    title: string;
    challenge: string;
    action: string;
    outcome: string;
  }>;
};

export const HOME_SERVICE_CARDS: HomeServiceCard[] = [
  {
    id: "ai",
    icon: "/images/icons/ai.svg",
    titleEn: "AI Strategy & Implementation",
    titleJa: "AI導入戦略策定・実装支援",
    description:
      "医療現場の業務を分析し、最適なAIソリューションの選定から導入、定着までを伴走します。ChatGPT活用、画像診断支援、自動文書作成など。",
    href: "/services/ai"
  },
  {
    id: "dx",
    icon: "/images/icons/dx.svg",
    titleEn: "DX Consulting",
    titleJa: "DX戦略コンサルティング",
    description:
      "電子カルテ連携、予約システム最適化、データ活用基盤の構築。医療機関のデジタルトランスフォーメーションを戦略レベルから設計します。",
    href: "/services/dx"
  },
  {
    id: "sns",
    icon: "/images/icons/sns.svg",
    titleEn: "Medical SNS & Branding",
    titleJa: "医療系SNS運用・ブランディング",
    description:
      "Instagram、X（Twitter）、LINE公式アカウントの戦略設計から運用代行まで。医療機関の集患・採用・ブランディングを支援します。",
    href: "/services/sns"
  },
  {
    id: "backoffice",
    icon: "/images/icons/backoffice.svg",
    titleEn: "Back Office Optimization",
    titleJa: "バックオフィス最適化",
    description:
      "経理、労務、書類作成、各種事務手続き。医療従事者が本業に集中できるよう、バックオフィス業務をまるごとサポートします。",
    href: "/services/backoffice"
  }
];

export const SERVICE_DETAIL_DATA: Record<"ai" | "dx" | "sns" | "backoffice", ServiceDetailPageData> = {
  ai: {
    slug: "ai",
    heroTitle: "AI Strategy & Implementation",
    heroLead:
      "ChatGPTの活用から画像診断AIの導入まで。医療現場に本当に役立つAIだけを、確かな手順でお届けします。",
    sections: [
      {
        title: "AI活用戦略の策定",
        description:
          "貴院の業務を棚卸しし、AIで改善できる業務を特定。ROI試算を含む具体的な導入ロードマップを策定します。"
      },
      {
        title: "ChatGPT / 生成AI活用支援",
        description:
          "問い合わせ対応の自動化、文書作成の効率化、患者向けFAQチャットボットの構築など。セキュリティとプライバシーに配慮した設計を行います。"
      },
      {
        title: "業務自動化（RPA / ノーコード）",
        description:
          "予約確認の自動送信、検査結果の自動転記、レセプトチェックの自動化など。定型業務を自動化し、スタッフの時間を創出します。"
      },
      {
        title: "データ分析基盤の構築",
        description:
          "患者データ、経営データの可視化ダッシュボードを構築。データに基づいた経営判断を支援します。"
      },
      {
        title: "AI導入研修・教育",
        description:
          "スタッフ向けのAIリテラシー研修、ハンズオンワークショップを実施。「AIに使われる」のではなく「AIを使いこなす」組織づくりを支援します。"
      }
    ],
    caseStudies: [
      {
        title: "事例 01（プレースホルダー）",
        challenge: "課題: 問診票作成と患者対応の事務負担が大きく、待ち時間が慢性的に発生。",
        action: "施策: 生成AIを活用した問診要約フローとFAQチャット導線を構築。",
        outcome: "成果: 受付・事務工数を削減し、患者対応の品質向上を実現。"
      },
      {
        title: "事例 02（プレースホルダー）",
        challenge: "課題: 院内の文書作成業務が属人化し、対応速度にばらつきがある。",
        action: "施策: テンプレート化とAI補助による文書作成ワークフローを標準化。",
        outcome: "成果: 作業時間短縮と品質平準化を同時に達成。"
      },
      {
        title: "事例 03（プレースホルダー）",
        challenge: "課題: データが散在し、経営判断に必要な情報取得に時間がかかる。",
        action: "施策: KPIダッシュボードを構築し、月次レビュー運用を設計。",
        outcome: "成果: 意思決定スピードが向上し、改善施策の実行率が上昇。"
      }
    ]
  },
  dx: {
    slug: "dx",
    heroTitle: "DX Consulting",
    heroLead:
      "『デジタル化』の先にある、本当の『変革』を。業務フローの根本から見直し、持続可能なDXを実現します。",
    sections: [
      {
        title: "業務フロー分析・再設計",
        description:
          "現場ヒアリングとプロセスマッピングにより、非効率な業務を可視化。あるべき姿の業務フローを設計します。"
      },
      {
        title: "システム選定・導入支援",
        description:
          "電子カルテ、予約管理、会計システム等。ベンダーに依存しない中立的な立場で、貴院に最適なシステムを選定します。"
      },
      {
        title: "LINE / Web予約システム構築",
        description:
          "患者さんの利便性を最大化する予約・問診フローを設計。LINE公式アカウントとの連携で、リマインド・フォローアップまで自動化します。"
      },
      {
        title: "ペーパーレス化推進",
        description:
          "紙の問診票、同意書、各種書類のデジタル化。電子署名の導入支援まで、ペーパーレス化を包括的にサポートします。"
      },
      {
        title: "デジタルマーケティング戦略",
        description:
          "Web集患、MEO対策、Google広告運用、SEO対策。データに基づいた集患戦略を設計・実行します。"
      }
    ]
  },
  sns: {
    slug: "sns",
    heroTitle: "Medical SNS & Branding",
    heroLead:
      "『発信したいけど時間がない』を解決。医療に精通したチームが、貴院の魅力を最大限に引き出します。",
    sections: [
      {
        title: "SNS戦略設計",
        description:
          "ターゲット分析、競合調査、KPI設定、コンテンツカレンダーの作成。闇雲な投稿ではなく、戦略に基づいた運用を設計します。"
      },
      {
        title: "コンテンツ制作・投稿代行",
        description:
          "写真撮影ディレクション、キャプション作成、ハッシュタグ戦略、ストーリーズ・リール制作。医療広告ガイドラインを遵守した安全なコンテンツを制作します。"
      },
      {
        title: "LINE公式アカウント運用",
        description:
          "友だち追加施策、セグメント配信、自動応答設定、リッチメニューの設計。患者さんとの継続的な関係構築を支援します。"
      },
      {
        title: "ブランディング支援",
        description:
          "ロゴ、名刺、パンフレット、院内サイン、Webサイトまで。統一感のあるブランドアイデンティティを構築します。"
      },
      {
        title: "月次レポート・改善提案",
        description:
          "フォロワー推移、エンゲージメント分析、競合比較。毎月のレポートに基づいた改善提案を行い、PDCAを回し続けます。"
      }
    ]
  },
  backoffice: {
    slug: "backoffice",
    heroTitle: "Back Office Optimization",
    heroLead: "医療従事者が、医療に集中できる環境を。煩雑な事務作業から解放します。",
    sections: [
      {
        title: "経理・会計事務サポート",
        description:
          "日常経理、請求書管理、入出金管理、会計ソフトへの入力代行。月次決算の迅速化を支援します。"
      },
      {
        title: "労務・人事サポート",
        description:
          "シフト管理の最適化、給与計算サポート、社会保険手続きの代行支援。医療機関特有の勤務形態にも対応します。"
      },
      {
        title: "各種書類作成・管理",
        description:
          "契約書、届出書類、報告書の作成支援。テンプレート化・デジタル管理の仕組みも構築します。"
      },
      {
        title: "受付・問い合わせ対応代行",
        description:
          "電話対応、メール対応、予約管理のバックアップ体制を構築。患者対応品質を維持しながら、スタッフの負担を軽減します。"
      },
      {
        title: "総務・庶務サポート",
        description:
          "備品管理、業者手配、施設管理、各種手続きの代行。「誰かがやらなきゃいけない」業務を、確実に引き受けます。"
      }
    ]
  }
};
