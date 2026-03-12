import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Heart, Menu, Search, ShoppingCart, User, X } from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'New Arrivals', href: '#' },
  {
    label: 'Clothing',
    href: '#',
    children: [
      { label: 'Suits', href: '/suits' },
      { label: 'Blazers', href: '#' },
      {
        label: 'Shirts',
        href: '#',
        children: [
          { label: 'Dress Shirts', href: '#' },
          { label: 'Casual Shirts', href: '#' },
          { label: 'Polo Shirts', href: '#' },
        ],
      },
      { label: 'T-Shirts', href: '#' },
      {
        label: 'Pants',
        href: '#',
        children: [
          { label: 'Dress Pants', href: '#' },
          { label: 'Chinos', href: '#' },
          { label: 'Jeans', href: '#' },
        ],
      },
      { label: 'Jackets & Coats', href: '#' },
      { label: 'Hoodies & Sweatshirts', href: '#' },
      { label: 'Shorts', href: '#' },
    ],
  },
  {
    label: 'Shoes',
    href: '#',
    children: [
      { label: 'Formal Shoes', href: '#' },
      { label: 'Sneakers', href: '#' },
      { label: 'Loafers', href: '#' },
      { label: 'Boots', href: '#' },
      { label: 'Sandals', href: '#' },
    ],
  },
  {
    label: 'Accessories',
    href: '#',
    children: [
      { label: 'Belts', href: '#' },
      { label: 'Watches', href: '#' },
      { label: 'Sunglasses', href: '#' },
      { label: 'Bags', href: '#' },
      { label: 'Wallets', href: '#' },
      { label: 'Ties', href: '#' },
    ],
  },
  {
    label: 'Collections',
    href: '#',
    children: [
      { label: 'Business / Formal', href: '#' },
      { label: 'Smart Casual', href: '#' },
      { label: 'Streetwear', href: '#' },
      { label: 'Summer Collection', href: '#' },
      { label: 'Winter Collection', href: '#' },
      { label: 'Limited Edition', href: '#' },
    ],
  },
  { label: 'Sale', href: '#' },
  { label: 'Contact', href: '#' },
];

function isInternalLink(href: string) {
  return href.startsWith('/');
}

function NavAnchor({
  item,
  className,
  onClick,
}: {
  item: NavItem;
  className: string;
  onClick?: () => void;
}) {
  if (isInternalLink(item.href)) {
    return (
      <Link to={item.href} className={className} onClick={onClick}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.href} className={className} onClick={onClick}>
      {item.label}
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<Record<string, boolean>>({});
  const closeTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openDropdown = (label: string) => {
    clearCloseTimer();
    setActiveDropdown(label);
  };

  const scheduleDropdownClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  const toggleMobileSection = (key: string) => {
    setExpandedMobile((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderMobileItems = (items: NavItem[], depth = 0, parent = ''): JSX.Element[] => {
    return items.map((item) => {
      const key = parent ? `${parent}>${item.label}` : item.label;
      const hasChildren = Boolean(item.children?.length);
      const isExpanded = Boolean(expandedMobile[key]);
      const depthPadding = depth === 0 ? '' : depth === 1 ? 'pl-4' : 'pl-8';

      if (!hasChildren) {
        return (
          <NavAnchor
            key={key}
            item={item}
            onClick={() => setMobileOpen(false)}
            className={`block rounded-md px-2 py-2 font-['Inter'] text-[#E7D7C4] transition-colors hover:bg-[#7A4A2A]/35 hover:text-[#D6A25B] ${depthPadding} ${
              depth === 0 ? 'text-sm' : 'text-[13px]'
            }`}
          />
        );
      }

      return (
        <div key={key} className="space-y-1">
          <button
            type="button"
            className={`flex w-full items-center justify-between rounded-md px-2 py-2 text-left font-['Inter'] text-[#E7D7C4] transition-colors hover:bg-[#7A4A2A]/35 hover:text-[#D6A25B] ${depthPadding} ${
              depth === 0 ? 'text-sm' : 'text-[13px]'
            }`}
            onClick={() => toggleMobileSection(key)}
            aria-expanded={isExpanded}
          >
            <span>{item.label}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>

          <div
            className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
              isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden border-l border-[#6E6A66]/35">
              <div className="space-y-1 py-1">{renderMobileItems(item.children ?? [], depth + 1, key)}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#1B1411]/78 shadow-[0_12px_35px_rgba(15,7,1,0.35)] backdrop-blur-md'
          : 'bg-[#1B1411]/45 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-[1700px] px-4 md:px-6">
        <div className="flex h-[78px] items-center md:h-[84px]">
          <div className="w-[180px] shrink-0">
            <Link to="/" className="inline-flex items-center" aria-label="Imperial home">
              <img src="/imperial-logo.png" alt="Imperial logo" className="h-12 w-auto object-contain md:h-14" />
            </Link>
          </div>

          <div
            className="hidden flex-1 justify-center lg:flex"
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleDropdownClose}
          >
            <div className="flex items-center gap-5 xl:gap-6">
              {NAV_ITEMS.map((item) => {
                const hasDropdown = Boolean(item.children?.length);
                const isOpen = activeDropdown === item.label;
                const columnsClass =
                  (item.children?.length ?? 0) > 6
                    ? 'md:grid-cols-3'
                    : (item.children?.length ?? 0) > 3
                      ? 'md:grid-cols-2'
                      : 'md:grid-cols-1';

                if (!hasDropdown) {
                  return (
                    <NavAnchor
                      key={item.label}
                      item={item}
                      className="font-['Inter'] text-[11px] tracking-wide text-[#E7D7C4] transition-colors hover:text-[#D6A25B]"
                    />
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openDropdown(item.label)}
                    onFocus={() => openDropdown(item.label)}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 font-['Inter'] text-[11px] tracking-wide text-[#E7D7C4] transition-colors hover:text-[#D6A25B]"
                      aria-expanded={isOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      />
                    </button>

                    <div
                      onMouseEnter={clearCloseTimer}
                      onMouseLeave={scheduleDropdownClose}
                      className={`absolute left-1/2 top-full z-50 mt-0 w-[min(88vw,900px)] -translate-x-1/2 rounded-2xl border border-[#6E6A66]/35 bg-[#7A4A2A] p-6 shadow-[0_20px_55px_rgba(15,7,1,0.35)] transition-all duration-300 ${
                        isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
                      }`}
                    >
                      <div className={`grid grid-cols-1 gap-x-10 gap-y-6 ${columnsClass}`}>
                        {item.children?.map((group) => (
                          <div key={group.label} className="space-y-2">
                            <NavAnchor
                              item={group}
                              className="block font-['Playfair_Display'] text-[18px] text-[#E7D7C4] transition-colors hover:text-[#D6A25B]"
                            />

                            {group.children?.length ? (
                              <div className="space-y-1 border-l border-[#6E6A66]/35 pl-3">
                                {group.children.map((child) => (
                                  <NavAnchor
                                    key={child.label}
                                    item={child}
                                    className="block font-['Inter'] text-sm text-[#E7D7C4]/80 transition-colors hover:text-[#D6A25B]"
                                  />
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden w-[180px] shrink-0 justify-end gap-4 lg:flex">
            <button className="text-[#E7D7C4] transition-colors hover:text-[#D6A25B]" aria-label="Search">
              <Search size={19} />
            </button>
            <button className="text-[#E7D7C4] transition-colors hover:text-[#D6A25B]" aria-label="Account">
              <User size={19} />
            </button>
            <button className="text-[#E7D7C4] transition-colors hover:text-[#D6A25B]" aria-label="Wishlist">
              <Heart size={19} />
            </button>
            <button className="text-[#E7D7C4] transition-colors hover:text-[#D6A25B]" aria-label="Cart">
              <ShoppingCart size={19} />
            </button>
          </div>

          <div className="ml-auto flex items-center gap-3 lg:hidden">
            <button className="text-[#E7D7C4] transition-colors hover:text-[#D6A25B]" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="text-[#E7D7C4] transition-colors hover:text-[#D6A25B]" aria-label="Cart">
              <ShoppingCart size={20} />
            </button>
            <button
              className="text-[#E7D7C4] transition-colors hover:text-[#D6A25B]"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-[#6E6A66]/35 bg-[#7A4A2A]">
          <div className="mx-auto max-w-[1700px] space-y-2 px-4 py-4 md:px-6">{renderMobileItems(NAV_ITEMS)}</div>
        </div>
      </div>
    </nav>
  );
}

