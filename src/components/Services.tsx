import { motion } from "motion/react";
import { SectionLabel, Tag } from "./ui";

const services = [
  {
    num: "01",
    name: "コンテンツ設計 & 制作（執筆）",
    desc: "読者の「ジョブ」を起点に、共感を生む記事・コンテンツを設計・制作します。戦略から原稿まで、編集長経験に裏打ちされた一気通貫の制作フローを提供。",
    tags: ["記事企画・執筆", "編集・校正", "コンテンツ構造設計", "SEO / AIO対応", "ペルソナ設計"],
  },
  {
    num: "02",
    name: "マーケティング 戦略設計支援",
    desc: "ブランド再定義・KPI設計・予算配分の論理的設計から、PDCAサイクルの構築・内製化支援まで。クライアントが自走できる体制をつくります。",
    tags: ["ブランド戦略", "KPI設計", "GA4解析", "内製化支援", "メディア立ち上げ"],
  },
];

export function Services() {
  return (
    <section className="py-16" id="services">
      <SectionLabel>Services</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service, idx) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-navy-bg rounded-xl p-8 border border-navy-pale"
          >
            <p className="text-[10px] text-navy-light tracking-[0.12em] mb-3.5">{service.num}</p>
            <h2
              className="text-lg font-medium text-navy mb-3 leading-tight"
              dangerouslySetInnerHTML={{ __html: service.name }}
            />
            <p className="text-[13px] text-navy-mid leading-[1.8] mb-5">{service.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
