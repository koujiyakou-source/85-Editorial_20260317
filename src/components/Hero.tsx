import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
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
  );
}
