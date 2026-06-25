import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Train } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenModal: (type: 'menu' | 'sweets' | 'catering' | 'lunch' | 'story') => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Our Story', sectionId: 'our-story', modalType: 'story' as const },
    { label: 'Dine-In Menu', sectionId: 'dine-in-menu', modalType: 'menu' as const },
    { label: 'Meetha Junction', sectionId: 'meetha-junction', modalType: 'sweets' as const },
    { label: 'Catering & Events', sectionId: 'catering-events', modalType: 'catering' as const },
    { label: 'Lunch Club', sectionId: 'lunch-club', modalType: 'lunch' as const },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#FAF6EE] border-b border-[#C9922B]/30 shadow-xs">
      <div className="max-w-[1200px] mx-auto px-6 h-[88px] flex items-center justify-between">
        
        {/* Left: Tapri Junction Logo */}
        <a href="#hero" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-[140px] block transition-transform duration-200 hover:scale-102">
          <Logo />
        </a>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 grow">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.sectionId)}
              className="font-sans text-[13px] font-semibold uppercase tracking-[1.5px] text-[#2C1810] hover:text-[#C9922B] transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenModal('lunch')}
            className="flex items-center gap-2 bg-[#6B1A1A] hover:bg-[#7B2D2D] text-white text-xs font-semibold uppercase tracking-[1.5px] px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Train className="w-4 h-4 text-[#C9922B]" />
            <span>ORDER NOW</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#6B1A1A]/10 text-[#6B1A1A] hover:bg-[#6B1A1A]/20 transition-all cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sliding Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[88px] left-0 w-full bg-[#FAF6EE] border-b border-[#C9922B]/30 shadow-lg px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.sectionId)}
                className="w-full text-left font-sans text-sm font-bold uppercase tracking-[1.5px] text-[#2C1810] hover:text-[#C9922B] py-2 border-b border-[#EDE4D0] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenModal('lunch');
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#6B1A1A] hover:bg-[#7B2D2D] text-white text-sm font-semibold uppercase tracking-[1.5px] py-3 rounded-full mt-2"
            >
              <Train className="w-4 h-4 text-[#C9922B]" />
              <span>ORDER NOW</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
