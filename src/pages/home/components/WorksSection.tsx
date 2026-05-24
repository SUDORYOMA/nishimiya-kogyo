const works = [
  {
    title: '製鉄所｜定修工事',
    content: '足場一式',
    period: '約4週間',
    crew: '約20名',
    desc: '安全性と作業効率を両立した施工を実施。複雑な配管周りにも対応した足場設計で、定修工事を円滑に進めました。',
    tag: 'REGULAR MAINTENANCE',
    img: 'https://readdy.ai/api/search-image?query=oil%20refinery%20plant%20scaffolding%20construction%20petroleum%20facility%20large%20scale%20maintenance%20workers%20safety%20equipment%20dramatic%20industrial%20sunset%20orange%20sky%20professional%20photography%20wide%20angle&width=800&height=600&seq=work001&orientation=portrait',
  },
  {
    title: '発電所｜保全足場',
    content: '点検用足場',
    period: '約10日',
    crew: '約8名',
    desc: '狭所環境でも作業しやすい足場を構築。発電設備の定期点検を安全かつ効率的にサポートしました。',
    tag: 'MAINTENANCE',
    img: 'https://readdy.ai/api/search-image?query=power%20plant%20scaffolding%20inspection%20maintenance%20industrial%20facility%20workers%20narrow%20space%20professional%20construction%20dark%20industrial%20atmosphere%20high%20contrast%20lighting&width=600&height=500&seq=work002&orientation=landscape',
  },
  {
    title: '化学工場｜緊急対応',
    content: '緊急足場設置',
    period: '即日対応',
    crew: '約5名',
    desc: '突発的なトラブルにも迅速に対応。短時間での足場設置を実現し、工場の早期復旧に貢献しました。',
    tag: 'EMERGENCY',
    img: 'https://readdy.ai/api/search-image?query=chemical%20plant%20emergency%20scaffolding%20rapid%20deployment%20industrial%20factory%20night%20operation%20dramatic%20lighting%20workers%20urgent%20construction%20professional%20photography&width=600&height=500&seq=work003&orientation=landscape',
  },
];

const WorksSection = () => (
  <section id="works" className="bg-[#f5f7fa] py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-14">
        <span className="text-[#00BFFF] text-xs font-bold tracking-[4px] uppercase">Works</span>
        <h2 className="text-3xl md:text-4xl font-black text-[#1a2332] mt-3">施工実績</h2>
        <p className="text-[#1a2332]/50 text-sm mt-3">
          これまでに手がけた主な施工事例をご紹介します。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer h-[500px] lg:h-auto">
          <img
            src={works[0].img}
            alt={works[0].title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/90 via-[#1a2332]/30 to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span className="bg-[#00BFFF] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
              {works[0].tag}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white font-black text-xl mb-3">{works[0].title}</h3>
            <div className="flex flex-wrap gap-3 mb-3">
              <span className="text-white/70 text-xs flex items-center gap-1">
                <i className="ri-tools-line text-[#00BFFF]"></i>
                {works[0].content}
              </span>
              <span className="text-white/70 text-xs flex items-center gap-1">
                <i className="ri-time-line text-[#00BFFF]"></i>
                {works[0].period}
              </span>
              <span className="text-white/70 text-xs flex items-center gap-1">
                <i className="ri-group-line text-[#00BFFF]"></i>
                {works[0].crew}
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{works[0].desc}</p>
          </div>
        </div>

        {works.slice(1).map((work) => (
          <div
            key={work.title}
            className="relative rounded-2xl overflow-hidden group cursor-pointer h-60"
          >
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/85 via-[#1a2332]/20 to-transparent"></div>
            <div className="absolute top-4 right-4">
              <span
                className={`text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${
                  work.tag === 'EMERGENCY' ? 'bg-red-500' : 'bg-[#00BFFF]'
                }`}
              >
                {work.tag}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white font-black text-base mb-2">{work.title}</h3>
              <div className="flex flex-wrap gap-3 mb-2">
                <span className="text-white/70 text-xs flex items-center gap-1">
                  <i className="ri-tools-line text-[#00BFFF]"></i>
                  {work.content}
                </span>
                <span className="text-white/70 text-xs flex items-center gap-1">
                  <i className="ri-time-line text-[#00BFFF]"></i>
                  {work.period}
                </span>
                <span className="text-white/70 text-xs flex items-center gap-1">
                  <i className="ri-group-line text-[#00BFFF]"></i>
                  {work.crew}
                </span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">{work.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorksSection;
