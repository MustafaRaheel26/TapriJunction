import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The chai here takes me right back to India. And the food... just like maa ke haath ka.",
      rating: 5,
      name: "Ankit",
      location: "Bangkok",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "We order lunch for our entire team from Tapri Junction. Consistent, healthy and always on time!",
      rating: 5,
      name: "HR Manager",
      location: "Agoda",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "Best place in Sukhumvit for a quick meal or a long chai with friends.",
      rating: 5,
      name: "Priya",
      location: "Expat",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-[#FAF6EE] relative overflow-hidden grain-overlay border-t border-[#C9922B]/20">
      
      {/* Decorative track dividers */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-center -translate-y-1/2 select-none pointer-events-none">
        <span className="bg-[#FAF6EE] px-4 font-mono text-xs text-[#C9922B] tracking-widest">—🚂—</span>
      </div>

      {/* Decorative Line Art: Left Side (Ribbed Cutting Chai Glass) */}
      <div className="absolute left-4 bottom-8 opacity-[0.08] pointer-events-none hidden lg:block w-[120px] h-[220px]">
        <svg viewBox="0 0 100 180" fill="none" stroke="#2C1810" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          {/* Ribbed Cutting Chai Glass */}
          <path d="M 15 15 L 25 150 L 75 150 L 85 15 Z" />
          {/* Glass Rim */}
          <ellipse cx="50" cy="15" rx="35" ry="8" />
          {/* Glass Base */}
          <ellipse cx="50" cy="150" rx="25" ry="6" />
          {/* Vertical Rib lines */}
          <line x1="28" y1="20" x2="35" y2="148" />
          <line x1="39" y1="22" x2="43" y2="149" />
          <line x1="50" y1="23" x2="50" y2="150" />
          <line x1="61" y1="22" x2="57" y2="149" />
          <line x1="72" y1="20" x2="65" y2="148" />
          {/* Tea Level */}
          <ellipse cx="50" cy="50" rx="31" ry="7" strokeDasharray="3,3" />
          {/* Steam ripples */}
          <path d="M42 -10 Q46 -25 42 -40" strokeWidth="0.75" />
          <path d="M54 -8 Q58 -23 54 -38" strokeWidth="0.75" />
        </svg>
      </div>

      {/* Decorative Line Art: Right Side (Teacup on Saucer) */}
      <div className="absolute right-4 bottom-12 opacity-[0.08] pointer-events-none hidden lg:block w-[140px] h-[160px]">
        <svg viewBox="0 0 120 120" fill="none" stroke="#2C1810" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          {/* Teacup Body */}
          <path d="M 25 35 C 25 75 95 75 95 35 Z" />
          {/* Rim */}
          <ellipse cx="60" cy="35" rx="35" ry="6" />
          {/* Cup Handle */}
          <path d="M 95 45 C 110 45 110 65 92 65" />
          {/* Saucer */}
          <path d="M 10 80 C 10 95 110 95 110 80 Z" />
          <ellipse cx="60" cy="80" rx="50" ry="8" />
          {/* Steam */}
          <path d="M52 10 Q56 0 52 -10" strokeWidth="0.75" />
          <path d="M68 12 Q72 2 68 -8" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative">
        
        {/* Section Heading with arrows */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#6B1A1A] uppercase tracking-wider inline-flex items-center justify-center gap-4">
            <span className="text-[#C9922B] text-lg sm:text-2xl font-light">✦—</span>
            <span className="section-heading tracking-[3px]">LOVED BY OUR COMMUNITY</span>
            <span className="text-[#C9922B] text-lg sm:text-2xl font-light">—✦</span>
          </h2>
        </div>

        {/* Testimonials Layout - Desktop Grid with Absolute Arrow Margins */}
        <div className="relative px-4 sm:px-12">
          
          {/* Desktop 3-Card Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-transparent p-6 text-center relative flex flex-col justify-between min-h-[220px]"
              >
                {/* Quotation Mark Centered at Top */}
                <div className="text-[#C9922B] text-4xl font-serif font-black leading-none opacity-40 select-none mb-2">
                  “
                </div>

                {/* Avatar Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#C9922B]/40 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-4 pt-1 flex-grow">
                  {/* Quote */}
                  <p className="font-sans italic text-[15px] sm:text-base leading-relaxed text-[#2C1810]/95">
                    {test.quote}
                  </p>

                  {/* Rating Stars - Centered below quote */}
                  <div className="flex items-center justify-center gap-1 pt-1">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9922B] text-[#C9922B]" />
                    ))}
                  </div>
                </div>

                {/* Attribution with yellow hyphen */}
                <div className="mt-5 pt-3 text-center">
                  <span className="font-sans font-extrabold text-[13px] text-[#2C1810]/80 tracking-wide uppercase">
                    <span className="text-[#C9922B] mr-1.5">—</span>
                    {test.name}, {test.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Carousel Layout */}
          <div className="lg:hidden block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-transparent p-6 text-center relative flex flex-col justify-between min-h-[200px]"
              >
                <div className="text-[#C9922B] text-4xl font-serif font-black leading-none opacity-40 select-none mb-2">
                  “
                </div>

                {/* Avatar Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#C9922B]/40 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-4 pt-1 flex-grow">
                  <p className="font-sans italic text-base leading-relaxed text-[#2C1810]/95">
                    {testimonials[activeIndex].quote}
                  </p>

                  <div className="flex items-center justify-center gap-1 pt-1">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9922B] text-[#C9922B]" />
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 text-center">
                  <span className="font-sans font-extrabold text-[13px] text-[#2C1810]/80 tracking-wide uppercase">
                    <span className="text-[#C9922B] mr-1.5">—</span>
                    {testimonials[activeIndex].name}, {testimonials[activeIndex].location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'bg-[#6B1A1A] w-4' : 'bg-[#EDE4D0]'}`}
                />
              ))}
            </div>
          </div>

          {/* Elegant Carousel Margin Arrows (Left/Right) */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#2C1810]/10 bg-white hover:bg-[#6B1A1A]/5 text-[#6B1A1A] flex items-center justify-center transition-all cursor-pointer shadow-sm"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#2C1810]/10 bg-white hover:bg-[#6B1A1A]/5 text-[#6B1A1A] flex items-center justify-center transition-all cursor-pointer shadow-sm"
            aria-label="Next Testimonial"
          >
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>
      </div>
    </section>
  );
}
