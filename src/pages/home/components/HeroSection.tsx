const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=industrial%20plant%20scaffolding%20construction%20site%20at%20dusk%2C%20large%20steel%20pipes%20and%20towers%2C%20workers%20on%20scaffolding%2C%20dramatic%20industrial%20atmosphere%2C%20orange%20and%20dark%20blue%20tones%2C%20wide%20angle%20panoramic%20view%2C%20professional%20photography%2C%20high%20contrast%20lighting%2C%20dark%20moody%20background%20with%20industrial%20structures&width=1920&height=1080&seq=hero001&orientation=landscape"
          alt="プラント足場施工現場"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/85 via-[#1a2332]/60 to-[#1a2332]/30"></div>
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:block pointer-events-none select-none">
        <span className="text-[120px] font-black text-white/5 tracking-widest leading-none">
          PLANT
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-[#00BFFF]"></div>
            <span className="text-[#00BFFF] text-sm font-bold tracking-widest uppercase">
              Plant Scaffolding
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            止められない現場に、<br />
            <span className="text-[#00BFFF]">止めない足場</span>を。
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
            プラント特化の足場施工。<br />
            安全・迅速・確実に、現場の稼働を支えます。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:0438-42-1710"
              className="flex items-center justify-center gap-3 bg-[#00BFFF] hover:bg-[#00a8e0] text-white font-bold px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 whitespace-nowrap"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-phone-fill text-lg"></i>
              </div>
              今すぐ電話する
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#1a2332] font-bold px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 whitespace-nowrap"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-file-list-3-line text-lg"></i>
              </div>
              無料見積もりはこちら
            </button>
          </div>

          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-black text-[#00BFFF]">24h</div>
              <div className="text-white/60 text-xs mt-1">緊急対応</div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#00BFFF]">即日</div>
              <div className="text-white/60 text-xs mt-1">対応可能</div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#00BFFF]">全国</div>
              <div className="text-white/60 text-xs mt-1">対応エリア</div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const el = document.getElementById('service');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 animate-bounce cursor-pointer bg-transparent border-none min-w-fit px-2"
      >
        <span className="text-white/50 text-xs tracking-widest">SCROLL</span>
        <div className="w-4 h-4 flex items-center justify-center">
          <i className="ri-arrow-down-line text-white/50"></i>
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
