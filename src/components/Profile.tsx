import { SectionLabel } from "./ui";

export function Profile() {
  return (
    <section className="py-16 border-t border-navy-pale" id="profile">
      <SectionLabel>Profile</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-12 items-start">
        <div>
          <h3 className="text-xl font-medium text-navy mb-1">谷古宇 浩司</h3>
          <p className="text-xs text-navy-light mb-6">Producer / Editor</p>
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-0.5">
              <strong className="text-[10px] text-navy-light tracking-widest uppercase">現在</strong>
              <span className="text-xs text-navy-mid leading-relaxed">
                株式会社アンドストーリー<br />プロデューサー
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <strong className="text-[10px] text-navy-light tracking-widest uppercase">前職</strong>
              <span className="text-xs text-navy-mid leading-relaxed">
                株式会社リスペクト<br />執行役員
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              <strong className="text-[10px] text-navy-light tracking-widest uppercase">編集長歴</strong>
              <span className="text-xs text-navy-mid leading-relaxed">
                Business Insider Japan<br />DIGIDAY 日本版<br />ITmedia エンタープライズ
              </span>
            </div>
          </div>
        </div>
        <div className="text-sm text-navy-mid leading-[1.85]">
          <p className="mb-4">
            Webメディアの黎明期から、コンテンツ編集とメディア事業開発に従事。DIGIDAYやBusiness Insider
            Japanなど世界的メディアの日本版立ち上げを統括し、現在はB2Bマーケティングのコンサルティング・プロデュースを手がけています。
          </p>
          <div className="border-l-2 border-navy pl-4 my-6 text-sm text-navy leading-[1.7]">
            「読者の心を動かすストーリー制作力」と「論理的な成果へのコミットメント」——この二軸を高度に融合させたプロデューススタイルが最大の特徴です。
          </div>
          <p>法政大学文学部哲学科卒。HubSpot / GA4 / Salesforce / WordPress 活用可能。英語・フランス語対応。</p>
        </div>
      </div>
    </section>
  );
}
