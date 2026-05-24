const services = [
  {
    icon: 'ri-building-2-line',
    title: 'プラント足場工事一式',
    desc: '複雑な設備環境にも対応した足場を設計・施工。安全性と作業効率を両立します。',
    img: 'https://readdy.ai/api/search-image?query=industrial%20plant%20scaffolding%20construction%20complex%20steel%20structure%20pipes%20towers%20professional%20workers%20safety%20equipment%20dark%20industrial%20background%20orange%20accent%20lighting%20wide%20angle%20shot%20high%20quality%20photography&width=600&height=400&seq=svc001&orientation=landscape',
  },
  {
    icon: 'ri-tools-line',
    title: '定修工事対応',
    desc: '大規模な定期修繕工事にも対応。工程に合わせた施工で、スムーズな現場運営を支えます。',
    img: 'https://readdy.ai/api/search-image?query=large%20scale%20plant%20maintenance%20scaffolding%20refinery%20industrial%20facility%20workers%20in%20hard%20hats%20systematic%20construction%20dark%20moody%20atmosphere%20professional%20industrial%20photography%20wide%20shot&width=600&height=400&seq=svc002&orientation=landscape',
  },
  {
    icon: 'ri-shield-check-line',
    title: '保全・メンテナンス足場',
    desc: '日常点検や保全作業に最適な足場を構築。作業効率を意識した設計を行います。',
    img: 'https://readdy.ai/api/search-image?query=maintenance%20scaffolding%20industrial%20plant%20inspection%20workers%20safety%20harness%20steel%20pipes%20equipment%20professional%20industrial%20site%20dark%20background%20orange%20safety%20colors&width=600&height=400&seq=svc003&orientation=landscape',
  },
  {
    icon: 'ri-flashlight-line',
    title: '緊急対応（突発案件）',
    desc: 'トラブル時にも迅速対応。即日対応・短時間施工にも柔軟に対応可能です。',
    img: 'https://readdy.ai/api/search-image?query=emergency%20scaffolding%20rapid%20deployment%20industrial%20plant%20urgent%20construction%20workers%20night%20shift%20dramatic%20lighting%20industrial%20atmosphere%20professional%20photography&width=600&height=400&seq=svc004&orientation=landscape',
  },
  {
    icon: 'ri-delete-bin-line',
    title: '解体・撤去',
    desc: '設置から撤去まで一貫対応。最後まで安全かつ確実に施工します。',
    img: 'https://readdy.ai/api/search-image?query=scaffolding%20dismantling%20removal%20industrial%20plant%20workers%20systematic%20deconstruction%20safety%20equipment%20professional%20industrial%20site%20dark%20moody%20background&width=600&height=400&seq=svc005&orientation=landscape',
  },
];

const ServiceSection = () => (
  <section id="service" className="bg-[#1a2332] py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-[#00BFFF] text-xs font-bold tracking-[4px] uppercase">Service</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-5">
          プラント足場工事一式対応
        </h2>
        <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
          プラント現場における足場工事を一式で対応。<br />
          定修・保全・緊急対応まで、状況に応じて柔軟に施工いたします。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 3).map((svc) => (
          <div
            key={svc.title}
            className="bg-[#263447] rounded-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={svc.img}
                alt={svc.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 flex items-center justify-center bg-[#00BFFF]/15 rounded-lg">
                  <i className={`${svc.icon} text-[#00BFFF] text-lg`}></i>
                </div>
                <h3 className="text-white font-bold text-lg">{svc.title}</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {services.slice(3).map((svc) => (
          <div
            key={svc.title}
            className="bg-[#263447] rounded-xl overflow-hidden flex flex-col sm:flex-row group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-full sm:w-56 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
              <img
                src={svc.img}
                alt={svc.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex flex-col justify-center border-l-4 border-[#00BFFF]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 flex items-center justify-center bg-[#00BFFF]/15 rounded-lg">
                  <i className={`${svc.icon} text-[#00BFFF] text-lg`}></i>
                </div>
                <h3 className="text-white font-bold text-lg">{svc.title}</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceSection;
