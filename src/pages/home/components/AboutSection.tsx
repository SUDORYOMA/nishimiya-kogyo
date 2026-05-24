const companyInfo = [
  { label: '会社名', value: '株式会社西宮工業' },
  { label: '代表者', value: '西宮 寛治' },
  { label: '所在地', value: '〒299-0016 千葉県木更津市高砂1-4-40' },
  { label: '設立', value: '2025年7月7日' },
  { label: '事業内容', value: 'プラント足場工事一式' },
  { label: '対応エリア', value: '千葉県/首都圏近郊' },
];

const stats = [
  { value: '30', unit: '名', label: '従業員数' },
  { value: '20', unit: '名', label: '協力会社作業員数' },
  { value: '38', unit: '名', label: '保有資格者数' },
];

const licenses = [
  { icon: 'ri-award-line', label: '建設業許可', value: '千葉県知事許可' },
  { icon: 'ri-user-star-line', label: '足場作業主任者', value: '15名' },
  { icon: 'ri-medal-line', label: 'その他資格', value: '玉掛け・小型移動式クレーン・高所作業車など' },
];

const AboutSection = () => (
  <section id="about" className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-[#00BFFF] text-xs font-bold tracking-[4px] uppercase">About</span>
        <h2 className="text-3xl md:text-4xl font-black text-[#1a2332] mt-3">会社情報</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-lg font-bold text-[#1a2332] mb-6 flex items-center gap-2">
            <div className="w-1 h-5 bg-[#00BFFF] rounded-full"></div>
            会社概要
          </h3>
          <div className="border border-[#e8ecf0] rounded-xl overflow-hidden">
            {companyInfo.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center px-6 py-4 ${
                  i !== companyInfo.length - 1 ? 'border-b border-[#e8ecf0]' : ''
                }`}
              >
                <span className="text-[#1a2332]/50 text-sm w-28 flex-shrink-0">{item.label}</span>
                <span className="text-[#1a2332] text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#1a2332] mt-10 mb-6 flex items-center gap-2">
            <div className="w-1 h-5 bg-[#00BFFF] rounded-full"></div>
            許可・資格
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {licenses.map((lic) => (
              <div key={lic.label} className="bg-[#f5f7fa] rounded-xl p-5 text-center">
                <div className="w-10 h-10 flex items-center justify-center bg-[#00BFFF]/10 rounded-full mx-auto mb-3">
                  <i className={`${lic.icon} text-[#00BFFF] text-xl`}></i>
                </div>
                <div className="text-[#1a2332]/50 text-xs mb-1">{lic.label}</div>
                <div className="text-[#1a2332] font-bold text-sm">{lic.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#1a2332] mb-6 flex items-center gap-2">
            <div className="w-1 h-5 bg-[#00BFFF] rounded-full"></div>
            会社データ
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#1a2332] rounded-xl p-6 text-center"
              >
                <div className="text-[#00BFFF] font-black text-4xl leading-none">
                  {stat.value}
                  <span className="text-xl">{stat.unit}</span>
                </div>
                <div className="text-white/60 text-xs mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-[#1a2332] mb-6 flex items-center gap-2">
            <div className="w-1 h-5 bg-[#00BFFF] rounded-full"></div>
            代表メッセージ
          </h3>
          <div className="bg-[#f5f7fa] rounded-xl p-8 relative">
            <div className="w-8 h-8 flex items-center justify-center absolute top-6 right-6 opacity-20">
              <i className="ri-double-quotes-r text-[#00BFFF] text-5xl"></i>
            </div>
            <p className="text-[#1a2332]/80 text-base leading-[2] mb-6">
              現場ごとに条件は異なりますが、<br />
              常に安全と効率を両立した足場を提供しています。<br />
              どんな現場でも柔軟に対応いたしますので、<br />
              まずはお気軽にご相談ください。
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-[#e8ecf0]">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1a2332] rounded-full">
                <i className="ri-user-line text-white text-lg"></i>
              </div>
              <div>
                <div className="text-[#1a2332] font-bold text-sm">西宮 寛治</div>
                <div className="text-[#1a2332]/50 text-xs">代表取締役</div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-[#1a2332] mt-10 mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-[#00BFFF] rounded-full"></div>
            連絡先
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="tel:0438-42-1710"
              className="flex items-center gap-3 text-[#1a2332] hover:text-[#00BFFF] transition-colors duration-200"
            >
              <div className="w-9 h-9 flex items-center justify-center bg-[#00BFFF]/10 rounded-lg">
                <i className="ri-phone-line text-[#00BFFF] text-lg"></i>
              </div>
              <span className="font-bold text-xl">0438-42-1710</span>
            </a>
            <div className="flex items-center gap-3 text-[#1a2332]/60">
              <div className="w-9 h-9 flex items-center justify-center bg-[#1a2332]/5 rounded-lg">
                <i className="ri-printer-line text-[#1a2332]/40 text-lg"></i>
              </div>
              <span className="text-base">FAX：0438-42-1713</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
