import { SectionLabel } from "./ui";

function ContactForm() {
  return (
    <form action="contact.php" method="POST" className="flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] text-navy-light tracking-wider">お名前・会社名</label>
        <input
          type="text"
          name="username"
          placeholder="山田 太郎 / 株式会社〇〇"
          className="w-full text-[13px] px-3 py-2.5 border border-navy-pale rounded-md bg-white text-navy outline-none focus:border-navy-light transition-colors"
          required
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] text-navy-light tracking-wider">メールアドレス</label>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          className="w-full text-[13px] px-3 py-2.5 border border-navy-pale rounded-md bg-white text-navy outline-none focus:border-navy-light transition-colors"
          required
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] text-navy-light tracking-wider">ご相談内容</label>
        <textarea
          name="message"
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

export function Contact() {
  return (
    <section className="py-16 border-t border-navy-pale" id="contact">
      <SectionLabel>Contact</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-medium text-navy mb-3">お問い合わせ</h2>
          <p className="text-[13px] text-navy-mid leading-[1.8] mb-6">
            コンテンツ制作・マーケティング戦略のご相談は、フォームからお気軽にどうぞ。<br /><br />
            初回相談は無料で承ります。
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
