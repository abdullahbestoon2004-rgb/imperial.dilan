import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Suits', to: '/suits' },
  { label: 'Jackets', to: '#' },
  { label: 'Shirts', to: '#' },
  { label: 'Trousers', to: '#' },
  { label: 'Shoes', to: '#' },
  { label: 'Accessories', to: '#' },
  { label: 'New Collection', to: '#' },
  { label: 'Sale', to: '#' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? 'bg-[#0B0B0B]/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-4 md:px-6">
        <div className="relative flex h-[74px] md:h-[86px] items-center justify-between">
          <Link to="/" className="shrink-0" aria-label="Imperial home">
            <img
              src="/imperial-logo.png"
              alt="Imperial logo"
              className="h-12 w-auto object-contain md:h-16"
            />
          </Link>

          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[11px] tracking-wide text-white transition-colors hover:text-[#C6A96B] font-['Inter']"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-4 ml-auto">
            <button className="text-white transition-colors hover:text-[#C6A96B]" aria-label="Search">
              <Search size={19} />
            </button>
            <button className="text-white transition-colors hover:text-[#C6A96B]" aria-label="Account">
              <User size={19} />
            </button>
            <button className="text-white transition-colors hover:text-[#C6A96B]" aria-label="Cart">
              <ShoppingCart size={19} />
            </button>
          </div>

          <div className="flex xl:hidden items-center gap-3">
            <button className="text-white transition-colors hover:text-[#C6A96B]" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="text-white transition-colors hover:text-[#C6A96B]" aria-label="Cart">
              <ShoppingCart size={20} />
            </button>
            <button
              className="text-white transition-colors hover:text-[#C6A96B]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/10 bg-[#0B0B0B]/95 backdrop-blur-sm">
          <div className="max-w-[1700px] mx-auto space-y-3 px-4 py-4 md:px-6">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.label}`}
                to={link.to}
                className="block text-sm text-white transition-colors hover:text-[#C6A96B] font-['Inter']"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="mt-2 text-sm text-white transition-colors hover:text-[#C6A96B] font-['Inter']"
              onClick={() => setMobileOpen(false)}
            >
              Account
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

