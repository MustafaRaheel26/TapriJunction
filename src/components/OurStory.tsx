import React from 'react';
import { motion } from 'motion/react';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import { Compass, Milestone, Heart } from 'lucide-react';

interface OurStoryProps {
  onOpenModal: (type: 'menu' | 'sweets' | 'catering' | 'lunch' | 'story') => void;
}

export default function OurStory({ onOpenModal }: OurStoryProps) {
  // URLs of high-quality Indian Chai & Train & Street Tea images
  const indianTrainImage = "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=600";
  const chaiPourImage = "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600";
  const chaiStallImage = "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600";

  return (
    <section id="our-story" className="py-20 md:py-24 bg-[#FAF6EE] relative overflow-hidden grain-overlay">
      {/* Decorative track lines on the bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-[8px] bg-gradient-to-r from-transparent via-[#C9922B]/20 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Polaroid Mosaic Collage */}
          <div className="lg:col-span-5 relative min-h-[460px] flex items-center justify-center">
            
            {/* Background railway track path */}
            <div className="absolute -z-10 -left-10 top-0 w-48 h-full border-r-2 border-dashed border-[#C9922B]/10 rounded-full" />

            {/* Polaroid Card 1: Train Journey (Rotated Left) */}
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 30, rotate: -4 }}
              className="absolute left-4 top-4 w-[200px] sm:w-[220px] bg-white p-3 pb-8 rounded-md shadow-xl border border-gray-100 rotate-[-8deg] z-10 transition-all duration-300"
            >
              <ImageWithPlaceholder
                src={indianTrainImage}
                alt="Darjeeling Himalayan Railway"
                className="w-full aspect-square rounded-xs grayscale-[10%] sepia-[10%] contrast-[1.05]"
                icon={<Milestone className="w-5 h-5 text-[#C9922B]" />}
              />
              <div className="mt-3 text-center">
                <span className="font-accent italic text-[11px] text-[#5C3D2E] tracking-wider block">
                  Darjeeling Express, 1984
                </span>
              </div>
            </motion.div>

            {/* Polaroid Card 2: Cutting Chai Pour (Rotated Right) */}
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 30, rotate: 4 }}
              className="absolute right-4 top-16 w-[200px] sm:w-[220px] bg-white p-3 pb-8 rounded-md shadow-2xl border border-gray-100 rotate-[6deg] z-20 transition-all duration-300"
            >
              <ImageWithPlaceholder
                src={chaiPourImage}
                alt="Authentic Cutting Chai Pouring"
                className="w-full aspect-square rounded-xs grayscale-[5%] sepia-[5%] contrast-[1.05]"
                icon={<Compass className="w-5 h-5 text-[#C9922B]" />}
              />
              <div className="mt-3 text-center">
                <span className="font-accent italic text-[11px] text-[#5C3D2E] tracking-wider block">
                  The Cutting Chai Pour
                </span>
              </div>
            </motion.div>

            {/* Polaroid Card 3: Handwritten Quote + Postage Stamp (Center/Bottom) */}
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 30, rotate: -2 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[220px] sm:w-[240px] bg-white p-3 pb-8 rounded-md shadow-2xl border border-gray-100 rotate-[-2deg] z-25 transition-all duration-300"
            >
              <div className="relative aspect-square">
                <ImageWithPlaceholder
                  src={chaiStallImage}
                  alt="Cozy Tapri Gathering"
                  className="w-full h-full rounded-xs grayscale-[5%] sepia-[5%]"
                  icon={<Heart className="w-5 h-5 text-[#C9922B]" />}
                />
                
                {/* Retro Postage Stamp overlapping the image */}
                <div className="absolute top-2 right-2 w-9 h-11 bg-[#FAF6EE] stamp-border border border-[#C9922B]/20 flex flex-col items-center justify-center p-0.5 shadow-md rotate-[4deg] z-10 select-none">
                  <div className="text-[5px] font-mono uppercase tracking-wider text-[#6B1A1A] font-bold leading-none">THAILAND</div>
                  <div className="text-[9px] font-mono font-black text-[#C9922B] leading-tight">5฿</div>
                  <div className="w-full h-[0.5px] bg-[#C9922B]/30 my-0.5" />
                  <span className="text-[4px] font-mono text-[#5C3D2E] leading-none">BKK JN.</span>
                </div>
              </div>

              {/* Hand written quote */}
              <div className="mt-3 text-center">
                <p className="font-accent italic text-xs text-[#2C1810] leading-relaxed">
                  “Some journeys stay with you forever.”
                </p>
                <span className="block text-[8px] font-mono text-[#5C3D2E]/60 tracking-widest uppercase mt-1">
                  TAPRI POSTCARD, BKK
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Text & Architectural Sketch */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left relative">
            
            {/* Section label */}
            <div>
              <span className="text-xs font-mono font-bold text-[#C9922B] tracking-[3px] uppercase block mb-1">
                OUR STORY
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4.5xl text-[#2C1810] leading-[1.1] tracking-tight">
                It started with a <br />
                <span className="text-[#6B1A1A]">train journey...</span>
              </h2>
            </div>

            {/* Paragraphs - exact text matches screenshot */}
            <div className="space-y-4 text-sm sm:text-[15px] text-[#2C1810]/90 leading-relaxed max-w-xl">
              <p>
                The sound of wheels on tracks. The aroma of chai.<br />
                The joy of sharing food with strangers who feel like family.
              </p>
              <p>
                Tapri Junction is our tribute to those memories. Inspired by Indian railways, built with passion in Bangkok, we bring you honest food, warm hospitality and a place where everyone belongs.
              </p>
            </div>

            {/* CTA Pill Button (Dark Maroon BG) */}
            <div className="pt-2">
              <button
                onClick={() => onOpenModal('story')}
                className="bg-[#6B1A1A] hover:bg-[#521313] text-white font-sans font-bold text-xs uppercase tracking-[2px] px-7 py-3 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>READ OUR STORY</span>
                <span>›</span>
              </button>
            </div>

            {/* Right Far Overlay: Highly detailed Victorian-era Indian railway clock-tower line-art */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.12] pointer-events-none hidden xl:block w-[180px] h-[340px]">
              <svg viewBox="0 0 100 220" fill="none" stroke="#2C1810" strokeWidth="0.75" xmlns="http://www.w3.org/2000/svg">
                {/* Victorian Clock Tower Sketch */}
                {/* Spire / Dome */}
                <path d="M50 10 L50 2" strokeWidth="1.5" />
                <path d="M44 25 C44 15 56 15 56 25 Z" fill="#2C1810" fillOpacity="0.1" />
                <rect x="42" y="25" width="16" height="15" rx="1" />
                
                {/* Clock Stage */}
                <rect x="36" y="40" width="28" height="30" />
                <circle cx="50" cy="52" r="5" />
                <line x1="50" y1="52" x2="50" y2="49" />
                <line x1="50" y1="52" x2="53" y2="54" />
                <rect x="39" y="70" width="22" height="10" />

                {/* Lower Tower Structure with Gothic Arches */}
                <rect x="30" y="80" width="40" height="90" />
                <path d="M36 100 Q50 90 64 100" />
                <rect x="36" y="105" width="28" height="40" />
                <path d="M42 145 C42 125 58 125 58 145 Z" />
                
                {/* Arches flanking tower */}
                <path d="M10 170 L90 170" strokeWidth="1.5" />
                <path d="M30 130 H10 V170 H30" />
                <path d="M12 170 A 8 8 0 0 1 28 170" />
                <path d="M70 130 H90 V170 H70" />
                <path d="M72 170 A 8 8 0 0 1 88 170" />

                {/* Balconies & Details */}
                <line x1="28" y1="80" x2="72" y2="80" strokeWidth="1.5" />
                <line x1="34" y1="40" x2="66" y2="40" strokeWidth="1.5" />
                <circle cx="20" cy="140" r="1.5" />
                <circle cx="80" cy="140" r="1.5" />
              </svg>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
