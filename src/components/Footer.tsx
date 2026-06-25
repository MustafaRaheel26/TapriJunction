import React, { useState } from 'react';
import { Instagram, Facebook, Youtube, Phone, MapPin, ArrowUp, Send } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [waJoined, setWaJoined] = useState(false);

  const quickLinks = [
    { label: "Our Story", id: "our-story" },
    { label: "Dine-In Menu", id: "dine-in-menu" },
    { label: "Meetha Junction", id: "meetha-junction" },
    { label: "Catering & Events", id: "catering-events" },
    { label: "Lunch Club", id: "lunch-club" },
    { label: "Contact Us", id: "choose-journey" }
  ];

  const helpLinks = [
    { label: "FAQ" },
    { label: "Delivery Info" },
    { label: "Subscription Info" },
    { label: "Terms & Conditions" },
    { label: "Privacy Policy" }
  ];

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1A0606] text-[#FAF6EE]/85 pt-16 pb-6 relative overflow-hidden border-t border-[#C9922B]/30 grain-overlay">
      
      {/* Scroll to Top button */}
      <button
        onClick={handleScrollTop}
        className="absolute top-6 right-6 p-2 rounded-full border border-[#C9922B]/20 text-[#C9922B] hover:bg-[#C9922B] hover:text-[#1A0606] transition-all cursor-pointer shadow-md"
        aria-label="Scroll to top of page"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-10 xl:gap-8 pb-12 border-b border-[#FAF6EE]/10">
          
          {/* Column 1 — Brand Column */}
          <div className="space-y-4 text-left">
            <div className="flex justify-start">
              <Logo light />
            </div>
            <p className="font-sans text-[13px] text-[#FAF6EE]/70 leading-relaxed max-w-[220px]">
              From Platform to Plate.<br />
              From our hearts to your table.<br />
              Thank you for being a part of our journey.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="space-y-4 text-left">
            <h4 className="font-sans font-bold text-[11px] text-[#C9922B] tracking-[2px] uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-[13px]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScrollToSection(link.id)}
                    className="text-[#FAF6EE]/75 hover:text-[#C9922B] transition-colors cursor-pointer text-left font-sans font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Help */}
          <div className="space-y-4 text-left">
            <h4 className="font-sans font-bold text-[11px] text-[#C9922B] tracking-[2px] uppercase">
              HELP
            </h4>
            <ul className="space-y-2 text-[13px]">
              {helpLinks.map((link, idx) => (
                <li key={idx}>
                  <button className="text-[#FAF6EE]/75 hover:text-[#C9922B] transition-colors cursor-pointer font-sans font-medium text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Follow Us */}
          <div className="space-y-4 text-left">
            <h4 className="font-sans font-bold text-[11px] text-[#C9922B] tracking-[2px] uppercase">
              FOLLOW US
            </h4>
            
            {/* Social icons */}
            <div className="flex gap-3 items-center">
              {[
                { icon: <Instagram className="w-4 h-4" />, url: "#" },
                { icon: <Facebook className="w-4 h-4" />, url: "#" },
                { icon: <Phone className="w-4 h-4" />, url: "tel:+6621234567" },
                { icon: <Youtube className="w-4 h-4" />, url: "#" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  className="w-8 h-8 rounded-full border border-white/10 hover:border-[#C9922B] text-white/70 hover:text-[#C9922B] flex items-center justify-center transition-all bg-white/5"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* JOIN OUR WHATSAPP CHANNEL Box */}
            <div className="space-y-2 max-w-[200px] pt-1">
              <span className="block font-sans font-bold text-[10px] text-[#FAF6EE]/90 uppercase tracking-wider">JOIN OUR WHATSAPP CHANNEL</span>
              <p className="text-[11px] text-[#FAF6EE]/60 leading-snug">
                Weekly menus, offers & exciting updates!
              </p>
              {!waJoined ? (
                <button
                  onClick={() => setWaJoined(true)}
                  className="px-4 py-2 bg-[#6B1A1A] hover:bg-[#521313] text-white font-sans font-bold text-[10px] uppercase tracking-wider rounded-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Send className="w-3 h-3" />
                  <span>JOIN NOW</span>
                </button>
              ) : (
                <span className="block text-[10px] text-green-400 font-bold py-1">
                  ✓ JOINED CHANNEL
                </span>
              )}
            </div>
          </div>

          {/* Column 5 — Visit Us / Location */}
          <div className="space-y-4 text-left">
            <h4 className="font-sans font-bold text-[11px] text-[#C9922B] tracking-[2px] uppercase">
              VISIT US
            </h4>
            <div className="space-y-3 text-[13px]">
              <p className="font-sans text-[#FAF6EE]/80 leading-relaxed max-w-[200px]">
                Tapri Junction Sukhumvit Soi 24, Bangkok 10110, Thailand
              </p>
              <div className="pt-1">
                <a
                  href="https://maps.google.com/?q=Sukhumvit+Soi+24+Bangkok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#6B1A1A] hover:bg-[#521313] text-white font-sans font-bold text-[11px] uppercase tracking-wider px-4 py-2 rounded-md transition-all"
                >
                  <span>DIRECTIONS</span>
                  <MapPin className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom strip */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#FAF6EE]/50">
          <div>
            <span>© 2026 Tapri Junction. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Made by Mustafa with</span>
            <span className="text-[#6B1A1A]">❤</span>
            <span>in Bangkok</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
