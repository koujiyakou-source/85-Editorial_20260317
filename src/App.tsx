/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, ArrowRight, Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Works", href: "#works" },
    { name: "Profile", href: "#profile" },
    { name: "Contact", href: "#contact" },
  ];

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

  return (
    <div className="min-h-screen bg-white selection:bg-navy-pale selection:text-navy">
      <div className="max-w-[960px] mx-auto px-8 md:px-8 sm:px-5">
        
        {/* NAV */}
        <nav className="flex justify-between items-center py-7 border-bottom border-navy-pale border-b">
          <div className="flex items-center">
            <div className="flex flex-col gap-0.5">
              <span className="text-[15px] font-medium text-navy tracking-wider">85 Editorial</span>
              <span className="text-[10px] text-navy-light tracking-widest uppercase">Content & Marketing Strategy</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-7">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[13px] text-navy-light hover:text-navy transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-navy-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-b border-navy-pale flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[14px] text-navy-light hover:text-navy transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}

        {/* HERO */}
        <section className="my-8 bg-[#344f66] rounded-xl overflow-hidden relative min-h-[280px] flex items-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="absolute -right-5 -top-5 w-[640px] h-[420px]" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(-60, 60) scale(1.15)" opacity="0.12">
                <circle cx="90" cy="60" r="58" fill="none" stroke="white" strokeWidth="34"/>
                <circle cx="90" cy="190" r="72" fill="none" stroke="white" strokeWidth="34"/>
                <path d="M 220,20 L 320,20 M 220,20 L 220,110 Q 220,110 228,110 L 300,110 Q 338,110 338,148 L 338,168 Q 338,212 290,212 L 232,212 Q 202,212 198,180" fill="none" stroke="white" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <g transform="translate(200, 10) scale(1.55)" opacity="0.28">
                <circle cx="90" cy="60" r="58" fill="none" stroke="white" strokeWidth="28"/>
                <circle cx="90" cy="190" r="72" fill="none" stroke="white" strokeWidth="28"/>
              </g>
              <g transform="translate(380, 0) scale(1.4)" opacity="0.28">
                <path d="M 55,22 L 145,22 M 55,22 L 55,110 Q 55,110 63,110 L 128,110 Q 163,110 163,145 L 163,165 Q 163,208 122,208 L 65,208 Q 38,208 34,178" fill="none" stroke="white" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <g transform="translate(320, -10) scale(1.85)" opacity="0.55">
                <circle cx="90" cy="60" r="58" fill="none" stroke="white" strokeWidth="22"/>
                <circle cx="90" cy="190" r="72" fill="none" stroke="white" strokeWidth="22"/>
              </g>
              <g transform="translate(530, -15) scale(1.85)" opacity="0.55">
                <path d="M 55,22 L 145,22 M 55,22 L 55,110 Q 55,110 63,110 L 128,110 Q 163,110 163,145 L 163,165 Q 163,208 122,208 L 65,208 Q 38,208 34,178" fill="none" stroke="white" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <g transform="translate(-80, 230) scale(1.3)" opacity="0.32">
                <circle cx="90" cy="60" r="58" fill="none" stroke="white" strokeWidth="26"/>
                <circle cx="90" cy="190" r="72" fill="none" stroke="white" strokeWidth="26"/>
              </g>
            </svg>
          </div>
          <div className="relative z-10 px-14 py-15 sm:px-7 sm:py-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] tracking-[0.18em] text-navy-pale uppercase mb-4.5"
            >
              Editorial Thinking × Marketing Logic
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-3xl font-medium leading-[1.3] text-white mb-5 max-w-[520px]"
            >
              物語の力で、<br /><span className="text-navy-pale">事業の成果を動かす。</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[15px] text-navy-pale leading-[1.8] max-w-[480px] mb-9"
            >
              20年以上のデジタルメディア・マーケティング経験をベースに、コンテンツの設計・制作から戦略立案まで一気通貫でご支援します。
            </motion.p>
            <motion.a 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="#services" 
              className="inline-flex items-center gap-2 text-[13px] text-white border border-white/40 px-6 py-2.5 rounded-md hover:bg-white/10 transition-colors"
            >
              サービスを見る <ArrowRight size={14} />
            </motion.a>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16" id="services">
          <span className="text-[10px] tracking-[0.18em] text-navy-light uppercase border-l-2 border-navy pl-2.5 mb-9 block">Services</span>
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
                <h2 className="text-lg font-medium text-navy mb-3 leading-tight" dangerouslySetInnerHTML={{ __html: service.name }} />
                <p className="text-[13px] text-navy-mid leading-[1.8] mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[11px] text-navy-mid border border-navy-pale px-2.5 py-1 rounded-full bg-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROFILE */}
        <section className="py-16 border-t border-navy-pale" id="profile">
          <span className="text-[10px] tracking-[0.18em] text-navy-light uppercase border-l-2 border-navy pl-2.5 mb-9 block">Profile</span>
          <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-12 items-start">
            <div>
              <h3 className="text-xl font-medium text-navy mb-1">谷古宇 浩司</h3>
              <p className="text-xs text-navy-light mb-6">Producer / Editor</p>
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-col gap-0.5">
                  <strong className="text-[10px] text-navy-light tracking-widest uppercase">現在</strong>
                  <span className="text-xs text-navy-mid leading-relaxed">株式会社アンドストーリー<br />プロデューサー</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <strong className="text-[10px] text-navy-light tracking-widest uppercase">前職</strong>
                  <span className="text-xs text-navy-mid leading-relaxed">株式会社リスペクト<br />執行役員</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <strong className="text-[10px] text-navy-light tracking-widest uppercase">編集長歴</strong>
                  <span className="text-xs text-navy-mid leading-relaxed">Business Insider Japan<br />DIGIDAY 日本版<br />ITmedia エンタープライズ</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-navy-mid leading-[1.85]">
              <p className="mb-4">Webメディアの黎明期から、コンテンツ編集とメディア事業開発に従事。DIGIDAYやBusiness Insider Japanなど世界的メディアの日本版立ち上げを統括し、現在はB2Bマーケティングのコンサルティング・プロデュースを手がけています。</p>
              <div className="border-l-2 border-navy pl-4 my-6 text-sm text-navy leading-[1.7]">
                「読者の心を動かすストーリー制作力」と「論理的な成果へのコミットメント」——この二軸を高度に融合させたプロデューススタイルが最大の特徴です。
              </div>
              <p>法政大学文学部哲学科卒。HubSpot / GA4 / Salesforce / WordPress 活用可能。英語・フランス語対応。</p>
            </div>
          </div>
        </section>

        {/* WORKS */}
        <section className="py-16 border-t border-navy-pale" id="works">
          <span className="text-[10px] tracking-[0.18em] text-navy-light uppercase border-l-2 border-navy pl-2.5 mb-9 block">Selected Works</span>
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

        {/* CONTACT */}
        <section className="py-16 border-t border-navy-pale" id="contact">
          <span className="text-[10px] tracking-[0.18em] text-navy-light uppercase border-l-2 border-navy pl-2.5 mb-9 block">Contact</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-medium text-navy mb-3">お問い合わせ</h2>
              <p className="text-[13px] text-navy-mid leading-[1.8] mb-6">
                コンテンツ制作・マーケティング戦略のご相談は、メールまたはフォームからお気軽にどうぞ。<br /><br />
                初回相談は無料で承ります。
              </p>
              <a href="mailto:info@85editorial.com" className="flex items-center justify-center gap-2 text-[13px] text-navy border border-navy-pale px-5 py-3 rounded-md bg-navy-bg hover:bg-navy-pale transition-colors">
                <Mail size={16} /> info@85editorial.com
              </a>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-7 border-t border-navy-pale flex flex-col md:flex-row justify-between items-center gap-2 text-center">
          <span className="text-[11px] text-navy-light">© 2026 85 Editorial. All rights reserved.</span>
          <span className="text-xs font-medium tracking-widest text-navy-light uppercase">85 EDITORIAL</span>
        </footer>

      </div>
    </div>
  );
}

function ContactForm() {
  // PHPへ直接送信するため、複雑なuseStateやhandleSubmitのfetch処理は不要になります
  return (
    <form 
      action="contact.php" 
      method="POST" 
      className="flex flex-col gap-3"
    >
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] text-navy-light tracking-wider">お名前・会社名</label>
        <input 
          type="text" 
          name="username" // PHP側 $_POST['username'] で受け取ります
          placeholder="山田 太郎 / 株式会社〇〇" 
          className="w-full text-[13px] px-3 py-2.5 border border-navy-pale rounded-md bg-white text-navy outline-none focus:border-navy-light transition-colors"
          required
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] text-navy-light tracking-wider">メールアドレス</label>
        <input 
          type="email" 
          name="email" // PHP側 $_POST['email'] で受け取ります
          placeholder="your@email.com" 
          className="w-full text-[13px] px-3 py-2.5 border border-navy-pale rounded-md bg-white text-navy outline-none focus:border-navy-light transition-colors"
          required
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] text-navy-light tracking-wider">ご相談内容</label>
        <textarea 
          name="message" // PHP側 $_POST['message'] で受け取ります
          placeholder="コンテンツ制作のご依頼、戦略設計のご相談など…" 
          className="w-full h-24 text-[13px] px-3 py-2.5 border border-navy-pale rounded-md bg-white text-navy outline-none focus:border-navy-light transition-colors resize-none"
          required
        />
      </div>
      <button 
        type="submit" 
        className="w-full mt-1 px-6 py-3 text-[13px] bg-navy text-white rounded-md hover:bg-navy-mid transition-colors cursor-pointer"
      >
        送信する
      </button>
    </form>
  );
}

