import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.message.length > 500) return;
    setSubmitting(true);
    const params = new URLSearchParams();
    Object.entries(formData).forEach(([k, v]) => params.append(k, v));
    try {
      await fetch('https://readdy.ai/api/form/d7mg5l82li4t868hjhe0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#1a2332] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#00BFFF] text-xs font-bold tracking-[4px] uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">お問い合わせ</h2>
          <p className="text-white/50 text-sm">
            お急ぎの方はお電話ください。フォームからもお気軽にご相談いただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* 左カラム */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* 電話 */}
            <div className="bg-[#263447] rounded-2xl p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-[#00BFFF] rounded-xl">
                  <i className="ri-phone-fill text-white text-xl"></i>
                </div>
                <div>
                  <div className="text-white/50 text-xs">お電話でのお問い合わせ</div>
                  <div className="text-white font-bold text-sm">TEL</div>
                </div>
              </div>
              <a
                href="tel:0438-42-1710"
                className="text-[#00BFFF] font-black text-4xl hover:text-[#66d9ff] transition-colors duration-200 block"
              >
                0438-42-1710
              </a>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-printer-line text-[#00BFFF]"></i>
                </div>
                FAX：0438-42-1713
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="bg-[#1a2332] rounded-lg px-4 py-4">
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-time-line text-[#00BFFF]"></i>
                    </div>
                    受付時間：8:00〜18:00
                  </div>
                  <div className="text-white/40 text-xs pl-6">
                    ※緊急対応は時間外もご相談ください
                  </div>
                </div>
              </div>
            </div>

            {/* 所在地 */}
            <div className="bg-[#263447] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#00BFFF]/15 rounded-xl">
                  <i className="ri-map-pin-line text-[#00BFFF] text-xl"></i>
                </div>
                <div>
                  <div className="text-white/50 text-xs">所在地</div>
                  <div className="text-white font-bold text-sm">Access</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                〒299-0016<br />
                千葉県木更津市高砂1-4-40
              </p>
              <div className="w-full h-48 rounded-xl overflow-hidden">
                <iframe
                  title="株式会社西宮工業 所在地"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.0!2d139.9267!3d35.3747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022a3b0e1b1b1b1%3A0x0!2z5Y2D6JGJ55yM5pyo5pu46KKL5biC6auY56eR77yR4oiS77yU4oiS77yU77yA!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp&q=千葉県木更津市高砂1-4-40"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* 右カラム：フォーム */}
          <div className="lg:col-span-3">
            {!submitted ? (
              <form
                data-readdy-form
                onSubmit={handleSubmit}
                className="bg-[#263447] rounded-2xl p-8"
              >
                <h3 className="text-white font-bold text-lg mb-6">お問い合わせフォーム</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">お名前 *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1a2332] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00BFFF] transition-colors"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">会社名</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#1a2332] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00BFFF] transition-colors"
                      placeholder="株式会社〇〇"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">メールアドレス *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1a2332] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00BFFF] transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">電話番号</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1a2332] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00BFFF] transition-colors"
                      placeholder="090-0000-0000"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-white/60 text-xs mb-1.5 block">お問い合わせ種別</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-[#1a2332] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00BFFF] transition-colors"
                    >
                      <option value="">選択してください</option>
                      <option value="見積もり依頼">見積もり依頼</option>
                      <option value="定修工事">定修工事</option>
                      <option value="緊急対応">緊急対応</option>
                      <option value="保全・メンテナンス">保全・メンテナンス</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-white/60 text-xs mb-1.5 block">
                      お問い合わせ内容 *
                      <span className="ml-2 text-white/30">（500文字以内）</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) => {
                        if (e.target.value.length <= 500)
                          setFormData({ ...formData, message: e.target.value });
                      }}
                      rows={5}
                      maxLength={500}
                      className="w-full bg-[#1a2332] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#00BFFF] transition-colors resize-none"
                      placeholder="現場の状況や工事内容についてご記入ください"
                    />
                    <div className="text-white/30 text-xs text-right mt-1">
                      {formData.message.length}/500
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting || formData.message.length > 500}
                  className="w-full mt-6 bg-[#00BFFF] hover:bg-[#00a8e0] text-white font-bold py-4 rounded-lg transition-colors duration-200 whitespace-nowrap disabled:opacity-60"
                >
                  {submitting ? '送信中...' : '送信する'}
                </button>
              </form>
            ) : (
              <div className="bg-[#263447] rounded-2xl p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 flex items-center justify-center bg-[#00BFFF] rounded-full mb-6">
                  <i className="ri-check-line text-white text-3xl"></i>
                </div>
                <h3 className="text-white font-black text-2xl mb-3">送信完了</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  お問い合わせを受け付けました。<br />
                  担当者より折り返しご連絡いたします。
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} 株式会社西宮工業 All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
