import { Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#2F2F2F] text-[#F6F3EE] py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Shop */}
          <div>
            <h3 className="font-['Playfair_Display'] text-xl mb-6">Shop</h3>
            <ul className="space-y-3 font-['Inter']">
              <li>
                <a href="#" className="text-[#F6F3EE]/70 hover:text-[#2D332B] transition-colors">
                  Suits
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F6F3EE]/70 hover:text-[#2D332B] transition-colors">
                  Jackets
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F6F3EE]/70 hover:text-[#2D332B] transition-colors">
                  Shirts
                </a>
              </li>
              <li>
                <Link to="/shoes" className="text-[#F6F3EE]/70 hover:text-[#2D332B] transition-colors">
                  Shoes
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-['Playfair_Display'] text-xl mb-6">Help</h3>
            <ul className="space-y-3 font-['Inter']">
              <li>
                <a href="#" className="text-[#F6F3EE]/70 hover:text-[#2D332B] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F6F3EE]/70 hover:text-[#2D332B] transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F6F3EE]/70 hover:text-[#2D332B] transition-colors">
                  Shipping
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-['Playfair_Display'] text-xl mb-6">Company</h3>
            <ul className="space-y-3 font-['Inter']">
              <li>
                <a href="#" className="text-[#F6F3EE]/70 hover:text-[#2D332B] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F6F3EE]/70 hover:text-[#2D332B] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-['Playfair_Display'] text-xl mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 border border-[#F6F3EE]/30 flex items-center justify-center hover:border-[#2D332B] hover:text-[#2D332B] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#F6F3EE]/30 flex items-center justify-center hover:border-[#2D332B] hover:text-[#2D332B] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#F6F3EE]/30 flex items-center justify-center hover:border-[#2D332B] hover:text-[#2D332B] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F6F3EE]/10 pt-8 text-center">
          <p className="text-[#F6F3EE]/50 font-['Inter'] text-sm">
            (c) 2026 GENTLEMAN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}