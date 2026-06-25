import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin } from 'lucide-react';
import ImageWithPlaceholder from './ImageWithPlaceholder';

interface HeroProps {
  onOpenModal: (type: 'menu' | 'sweets' | 'catering' | 'lunch' | 'story') => void;
  onScrollToStory: () => void;
}

export default function Hero({ onOpenModal, onScrollToStory }: HeroProps) {
  const thaliImage = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800";
  const bgTrainImage = "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&q=80&w=1600";

  return (
    <section id="hero" className="relative pt-[130px] pb-16 md:py-24 lg:py-28 bg-[#150702] overflow-hidden grain-overlay">
      {/* Background railway coach image fading to dark brown/black */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url(${bgTrainImage})` }}
      />
      {/* Dark atmospheric radial and linear gradients to blend the background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#130601] via-[#130601]/95 to-transparent z-0" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#130601]/50 to-[#0c0301] z-0 pointer-events-none" />
      
      {/* Subtle steam animations rising from the bottom */}
      <div className="absolute bottom-0 left-[20%] w-[120px] h-[300px] bg-gradient-to-t from-white/5 to-transparent blur-xl rounded-full animate-pulse opacity-50 pointer-events-none" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-0 right-[30%] w-[180px] h-[400px] bg-gradient-to-t from-white/5 to-transparent blur-xl rounded-full animate-pulse opacity-40 pointer-events-none" style={{ animationDuration: '9s' }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content Panel */}
          <div className="lg:col-span-6 text-white space-y-6 text-left">
            
            {/* Main H1 Heading */}
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7.5xl leading-[0.95] tracking-tight">
              <span className="block text-white">HOME AWAY</span>
              <span className="block text-[#FAF6EE]">FROM HOME</span>
            </h1>

            {/* Subheading */}
            <div className="pt-1">
              <span className="font-sans font-bold text-lg md:text-xl text-[#C9922B] tracking-widest block uppercase">
                FROM PLATFORM TO PLATE
              </span>
            </div>

            {/* Body Copy */}
            <div className="space-y-4 max-w-xl">
              <p className="font-sans text-sm sm:text-base font-semibold leading-relaxed text-[#F5F0E8]/90">
                A journey through India's flavours, stories and traditions.
              </p>
              <p className="font-sans text-sm sm:text-base leading-relaxed text-[#F5F0E8]/80">
                Whether it's a cup of cutting chai, a hearty meal, or a box of mithai, everything here is made with love and nostalgia.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-3">
              <button
                onClick={() => onOpenModal('menu')}
                className="bg-[#C9922B] hover:bg-[#D4A017] text-[#2C1810] font-sans font-extrabold text-xs uppercase tracking-[2px] px-8 py-3.5 rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
              >
                EXPLORE MENU
              </button>
              <button
                onClick={onScrollToStory}
                className="bg-transparent hover:bg-white/5 border-2 border-white/80 text-white font-sans font-extrabold text-xs uppercase tracking-[2px] px-8 py-3 rounded-sm transition-all duration-300 cursor-pointer"
              >
                OUR STORY
              </button>
            </div>

            {/* Vintage Circular Stamp Badge */}
            <div className="pt-6 hidden sm:block">
              <div className="relative w-28 h-28 flex items-center justify-center rounded-full border border-dashed border-[#C9922B]/40 transform -rotate-12 hover:rotate-0 transition-transform duration-500 bg-[#C9922B]/5">
                <svg className="absolute w-full h-full animate-spin" style={{ animationDuration: '40s' }} viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="font-mono text-[6.5px] font-bold fill-[#C9922B] tracking-widest uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      • FROM PLATFORM • TO PLATE • TAPRI JUNCTION
                    </textPath>
                  </text>
                </svg>
                <div className="text-center">
                  <span className="block font-display font-extrabold text-[9px] text-[#C9922B] tracking-wider">TAPRI</span>
                  <span className="block font-mono text-[5.5px] text-white/50 tracking-widest">BKK</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Indian Railway Station Signboard & Thali Composition */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[460px]">
            
            {/* Wooden Station Sign - Top Right */}
            <motion.div
              initial={{ rotate: -1, y: 10 }}
              animate={{ rotate: [1, -1, 1], y: 0 }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 6, ease: "easeInOut" }}
              className="absolute top-0 right-4 z-20 w-[240px] bg-[#C9922B] rounded-sm p-3 shadow-2xl border-4 border-[#2C1810]"
            >
              {/* Chains hanger representation */}
              <div className="absolute -top-5 left-10 w-1 h-5 bg-[#2C1810] rounded-sm" />
              <div className="absolute -top-5 right-10 w-1 h-5 bg-[#2C1810] rounded-sm" />

              {/* Station signboard content (Yellow BG, Black Text) */}
              <div className="text-center py-2 px-3 border border-[#2C1810]/30 rounded-sm">
                <h2 className="font-sans font-extrabold text-2xl text-[#2C1810] tracking-wide block mb-0.5">
                  टपरी जंक्शन
                </h2>
                <h3 className="font-display font-black text-[15px] text-[#2C1810] tracking-widest uppercase mb-0.5">
                  TAPRI JUNCTION
                </h3>
                <span className="block text-[10px] font-mono font-bold text-[#2C1810]/80 tracking-widest uppercase border-t border-[#2C1810]/20 pt-1">
                  BANGKOK
                </span>
              </div>
            </motion.div>

            {/* Traditional Indian Brass Thali Meal Presentation - Bottom/Center */}
            <div className="relative mt-24 lg:mt-28 w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] rounded-full border-8 border-white/5 overflow-hidden shadow-2xl">
              <ImageWithPlaceholder
                src={thaliImage}
                alt="Traditional Indian Railway Meal Thali"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                icon={<Sparkles className="w-8 h-8 text-[#C9922B]" />}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Interactive Floating Hot Chai Cup Tag */}
              <div className="absolute bottom-6 right-6 bg-[#2C1810] border border-[#C9922B] text-[#FAF6EE] px-3.5 py-2 rounded-sm shadow-xl flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="font-mono text-[9px] font-bold tracking-widest uppercase text-[#C9922B]">TAPRI CHAI</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
