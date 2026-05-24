import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: 'サービス', id: 'service' },
    { label: '施工実績', id: 'works' },
    { label: '会社情報', id: 'about' },
    { label: '採用情報', id: 'recruit' },
    { label: 'お問い合わせ', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a2332]/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://public.readdy.ai/ai/img_res/6bd1be4e-af51-44c8-9037-3bde25705eff.png"
            alt="会社ロゴ"
            className="h-10 w-auto object-contain"
          />
          <span className="text-white font-bold text-base whitespace-nowrap hidden sm:block">
            株式会社西宮工業
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-white/90 hover:text-[#00BFFF] text-sm font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:0438-42-1710"
            className="flex items-center gap-2 bg-[#00BFFF] hover:bg-[#00a8e0] text-white text-sm font-bold px-4 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
          >
            <i className="ri-phone-fill text-base"></i>
            今すぐ電話する
          </a>
        </div>

        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`text-2xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1a2332] border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white/90 hover:text-[#00BFFF] text-sm font-medium text-left transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:0438-42-1710"
              className="flex items-center gap-2 bg-[#00BFFF] text-white text-sm font-bold px-4 py-3 rounded-md justify-center whitespace-nowrap"
            >
              <i className="ri-phone-fill"></i>
              今すぐ電話する
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
