import { motion } from "motion/react";
import { SectionLabel } from "./ui";

const works = [
  {
    cat: "ブランディング",
    title: "建材メーカー — 全国47都道府県を舞台にしたドキュメンタリーシリーズ企画・設計",
    sub: "製品ではなく「使う人の物語」を描く共感型コンテンツ戦略",
    type: "コンテンツ設計・戦略",
  },
  {
    cat: "メディア戦略",
    title: "専門職能団体 — 会員限定誌から実務メディアへの転換設計",
    sub: "読者の「ジョブ」に基づく統合ペルソナ設計・三層記事構造の確立",
    type: "コンテンツ設計",
  },
  {
    cat: "コンバージョン",
    title: "私立大学 — オープンキャンパス申込率40%改善を目標としたデジタルマーケティング再設計",
    sub: "GA4による行動可視化・A/Bテスト・導線最適化",
    type: "戦略設計",
  },
  {
    cat: "AIO / SEO",
    title: "食品メーカー — 次世代検索環境（生成AI・音声）対応コンテンツ構造設計",
    sub: "Schema.org実装・音声アシスタント最適化・AI時代のコンテンツ戦略",
    type: "コンテンツ設計",
  },
  {
    cat: "内製化支援",
    title: "技術系中堅企業 — 2ヶ月でのマーケティング内製化・CPA半減プログラム",
    sub: "運用マニュアル整備・Google広告内製化・外部依存からの脱却",
    type: "戦略設計",
  },
  {
    cat: "コミュニティ",
    title: "非営利財団 — 寄付者エンゲージメント設計・マンスリー転換KPIサイクル構築",
    sub: "社会課題インタビューを軸にした長期関係構築のコンテンツ設計",
    type: "コンテンツ設計・戦略",
  },
];

export function Works() {
  return (
    <section className="py-16 border-t border-navy-pale" id="works">
      <SectionLabel>Selected Works</SectionLabel>
      <div className="border-t border-navy-pale">
        {works.map((work, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-[110px_1fr_120px] items-baseline gap-4 py-4.5 border-b border-navy-pale"
          >
            <span className="text-[10px] text-navy-light tracking-wider uppercase">{work.cat}</span>
            <div className="text-[13px] text-navy leading-snug">
              {work.title}
              <small className="block text-[11px] text-navy-light mt-1 leading-snug">{work.sub}</small>
            </div>
            <span className="text-[11px] text-navy-light md:text-right">{work.type}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
