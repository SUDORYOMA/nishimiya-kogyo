import { useState } from 'react';

const benefits = [
  { icon: 'ri-user-add-line', text: '未経験歓迎' },
  { icon: 'ri-graduation-cap-line', text: '資格取得支援あり' },
  { icon: 'ri-calendar-check-line', text: '安定した仕事量' },
  { icon: 'ri-money-cny-circle-line', text: '高単価案件多数' },
];

const jobConditions = [
  {
    category: '給与',
    icon: 'ri-money-dollar-circle-line',
    rows: [
      { label: '日給', value: '15,000円〜25,000円（経験・資格による）' },
      { label: '月収目安', value: '30万円〜50万円以上' },
      { label: '昇給', value: '年1回（実績・資格取得に応じて随時）' },
      { label: '各種手当', value: '資格手当・現場手当・交通費全額支給' },
    ],
  },
  {
    category: '休日・休暇',
    icon: 'ri-calendar-2-line',
    rows: [
      { label: '休日', value: '週休2日制（現場カレンダーによる）' },
      { label: '年間休日', value: '105日以上' },
      { label: '有給休暇', value: '入社6ヶ月後より付与（法定通り）' },
      { label: 'その他休暇', value: '慶弔休暇・夏季休暇・年末年始休暇' },
    ],
  },
  {
    category: '福利厚生',
    icon: 'ri-shield-check-line',
    rows: [
      { label: '社会保険', value: '健康保険・厚生年金・雇用保険・労災保険' },
      { label: '資格取得支援', value: '受験費用全額会社負担・合格祝い金あり' },
      { label: '制服・道具', value: '作業服・安全靴・工具類 会社支給' },
      { label: 'その他', value: '社員旅行・懇親会・技術研修制度あり' },
    ],
  },
];

const RecruitSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const params = new URLSearchParams();
    Object.entries(formData).forEach(([k, v]) => params.append(k, v));
    try {
      await fetch('https://readdy.ai/api/form/d7mg5l82li4t868hjheg', {
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
    <section id="recruit" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=skilled%20industrial%20scaffolding%20worker%20craftsman%20professional%20hard%20hat%20safety%20vest%20plant%20construction%20site%20dramatic%20lighting%20dark%20moody%20atmosphere%20wide%20angle%20shot%20high%20quality%20photography&width=1920&height=900&seq=recruit001&orientation=landscape"
          alt="採用情報背景"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/85 to-[#1a2332]/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#00BFFF] text-xs font-bold tracking-[4px] uppercase">Recruit</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-4 leading-tight">
            稼げるだけじゃない。<br />
            <span className="text-[#00BFFF]">誇れる仕事</span>を。
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            現場で通用する職人を本気で育てます。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Benefits + Form */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#00BFFF] rounded-lg flex-shrink-0">
                    <i className={`${b.icon} text-white text-base`}></i>
                  </div>
                  <span className="text-white font-medium text-sm">{b.text}</span>
                </div>
              ))}
            </div>

            {!showForm && !submitted && (
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-3 bg-[#00BFFF] hover:bg-[#00a8e0] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <span>応募はこちら</span>
                <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
                  <i className="ri-arrow-right-line text-white"></i>
                </div>
              </button>
            )}

            {showForm && !submitted && (
              <form
                data-readdy-form
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-4"
              >
                <h3 className="text-white font-bold text-lg mb-5">採用応募フォーム</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-white/70 text-xs mb-1 block">お名前 *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#00BFFF]"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-xs mb-1 block">メールアドレス *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#00BFFF]"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-xs mb-1 block">電話番号</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#00BFFF]"
                      placeholder="090-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-xs mb-1 block">メッセージ</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => {
                        if (e.target.value.length <= 500) setFormData({ ...formData, message: e.target.value });
                      }}
                      rows={3}
                      maxLength={500}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#00BFFF] resize-none"
                      placeholder="志望動機や経験などをご記入ください（500文字以内）"
                    />
                    <div className="text-white/40 text-xs text-right mt-1">{formData.message.length}/500</div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 bg-[#00BFFF] hover:bg-[#00a8e0] text-white font-bold py-3 rounded-lg transition-colors duration-200 whitespace-nowrap disabled:opacity-60"
                    >
                      {submitting ? '送信中...' : '応募する'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-5 border border-white/30 text-white/70 hover:text-white rounded-lg transition-colors duration-200 whitespace-nowrap"
                    >
                      キャンセル
                    </button>
                  </div>
                </div>
              </form>
            )}

            {submitted && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-4 max-w-lg text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#00BFFF] rounded-full mx-auto mb-4">
                  <i className="ri-check-line text-white text-2xl"></i>
                </div>
                <p className="text-white font-bold text-lg">応募を受け付けました</p>
                <p className="text-white/60 text-sm mt-2">担当者よりご連絡いたします。</p>
              </div>
            )}
          </div>

          {/* Right: Job Conditions Table */}
          <div className="bg-white/8 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
            {/* Tab Header */}
            <div className="flex border-b border-white/10">
              {jobConditions.map((cond, idx) => (
                <button
                  key={cond.category}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 flex flex-col items-center gap-1 py-4 px-2 text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    activeTab === idx
                      ? 'bg-[#00BFFF]/20 text-[#00BFFF] border-b-2 border-[#00BFFF]'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  <div className="w-7 h-7 flex items-center justify-center">
                    <i className={`${cond.icon} text-lg`}></i>
                  </div>
                  <span>{cond.category}</span>
                </button>
              ))}
            </div>

            {/* Table Content */}
            <div className="p-6">
              <table className="w-full">
                <tbody>
                  {jobConditions[activeTab].rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`${i !== jobConditions[activeTab].rows.length - 1 ? 'border-b border-white/10' : ''}`}
                    >
                      <td className="py-4 pr-4 align-top w-28">
                        <span className="text-[#00BFFF] text-xs font-bold bg-[#00BFFF]/10 px-2 py-1 rounded whitespace-nowrap">
                          {row.label}
                        </span>
                      </td>
                      <td className="py-4 text-white/85 text-sm leading-relaxed">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Note */}
            <div className="px-6 pb-5">
              <p className="text-white/40 text-xs leading-relaxed border-t border-white/10 pt-4">
                ※ 給与・条件は経験・資格・能力を考慮の上、個別に決定いたします。詳細はお気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitSection;
