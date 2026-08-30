import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const navLinks = [
    { name: 'PRODUCTOS', href: '#productos' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'NOSOTROS', href: '#nosotros' },
  ];

  const handleScroll = (e, href) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12 flex items-center justify-between ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md py-2 md:py-3 border-b border-white/10 shadow-lg' 
        : 'bg-transparent pt-2 pb-2 md:py-6 border-b border-transparent'
    }`}>
      
      {/* Mobile Logo (Left) */}
      <div className="md:hidden">
        <a href="#" className="inline-block hover:scale-105 transition-transform duration-300">
          <img src="https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047321/logo2-sinfondo.png" alt="Logo Construcciones E.R" className={`${isScrolled ? 'h-20' : 'h-28 sm:h-32'} w-auto object-contain transition-all duration-300`} />
        </a>
      </div>

      {/* Desktop Left: Links */}
      <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest text-white/70">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="relative inline-block text-white/70 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-white after:origin-bottom-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Center: Logo (Desktop) */}
      <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 transition-transform duration-300 ${isScrolled ? 'translate-y-0' : 'translate-y-3 md:translate-y-4'}`}>
        <a href="#" className="inline-block hover:scale-105 transition-transform duration-300">
          <img src="https://res.cloudinary.com/llcon56b/image/upload/f_auto,q_auto/v1788047321/logo2-sinfondo.png" alt="Logo Construcciones E.R" className={`${isScrolled ? 'h-14' : 'h-28 md:h-40'} w-auto object-contain transition-all duration-300`} />
        </a>
      </div>

      {/* Right: Menu (Mobile) / Email, CTA (Desktop) */}
      <div className="flex items-center gap-6 ml-auto lg:ml-0">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:opacity-80 transition-opacity flex items-center justify-center p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-6">
          <a href="mailto:construccionesycielorasoser02@hotmail.com" className="text-sm text-white/70 hover:text-white transition-colors">
            construccionesycielorasoser02@hotmail.com
          </a>
          <a href="https://wa.link/46aows" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block bg-primary text-white text-xs font-bold px-6 py-3 rounded-none uppercase tracking-wider hover:bg-red-700 transition-colors duration-300">
            COTIZAR AHORA
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 overflow-hidden flex flex-col ${isMenuOpen ? 'max-h-[500px] py-2' : 'max-h-0'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              setIsMenuOpen(false);
              handleScroll(e, link.href);
            }}
            className="text-white text-sm font-semibold tracking-widest px-8 py-4 hover:bg-white/10 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a 
          href="https://wa.link/46aows" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white text-sm font-semibold tracking-widest px-8 py-4 hover:bg-white/10 transition-colors text-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          COTIZAR AHORA
        </a>
        <a
          href="#footer"
          onClick={(e) => {
            setIsMenuOpen(false);
            handleScroll(e, '#footer');
          }}
          className="text-white text-sm font-semibold tracking-widest px-8 py-4 hover:bg-white/10 transition-colors"
        >
          MÁS INFO
        </a>
      </div>
    </header>
  );
}

export default Header;
