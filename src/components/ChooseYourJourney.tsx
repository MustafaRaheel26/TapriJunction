import React from 'react';
import { Utensils, Gift, CupSoda, Calendar } from 'lucide-react';
import ImageWithPlaceholder from './ImageWithPlaceholder';

interface ChooseYourJourneyProps {
  onOpenModal: (type: 'menu' | 'sweets' | 'catering' | 'lunch' | 'story') => void;
}

export default function ChooseYourJourney({ onOpenModal }: ChooseYourJourneyProps) {
  // Unsplash high quality assets
  const dineInImg = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600";
  const meethaImg = "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600";
  const cateringImg = "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600";
  const lunchClubImg = "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600";

  return (
    <section id="choose-journey" className="py-20 md:py-24 bg-[#FAF6EE] grain-overlay">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Heading with gold arrows */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#6B1A1A] uppercase tracking-wider inline-flex items-center justify-center gap-4">
            <span className="text-[#C9922B] text-lg sm:text-2xl font-light">✦—</span>
            <span className="section-heading tracking-[3px]">CHOOSE YOUR JOURNEY</span>
            <span className="text-[#C9922B] text-lg sm:text-2xl font-light">—✦</span>
          </h2>
        </div>

        {/* 4 Cards Grid - Center aligned text and exact colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1 — DINE-IN */}
          <div id="dine-in-menu" className="flex flex-col bg-[#FAF2DD] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#C9922B]/20 relative text-center">
            <div className="relative aspect-video">
              <ImageWithPlaceholder
                src={dineInImg}
                alt="Dine-In Sanctuary"
                className="w-full h-full object-cover"
                icon={<Utensils className="w-5 h-5 text-[#C9922B]" />}
              />
              {/* Overlapping Centered Icon Circle */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#C9922B] text-[#FAF6EE] rounded-full flex items-center justify-center shadow-md border-[4px] border-[#FAF2DD] z-10">
                <Utensils className="w-5 h-5" />
              </div>
            </div>

            <div className="p-6 pt-10 flex flex-col justify-between grow space-y-5">
              <div className="space-y-3">
                <h3 className="font-display font-black text-xl text-[#6B1A1A] tracking-wider uppercase">
                  DINE-IN
                </h3>
                <p className="font-sans text-[13px] text-[#2C1810]/90 leading-relaxed min-h-[64px]">
                  Step into our 12×90 sanctuary and enjoy a cozy escape with comforting food and chai.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenModal('menu')}
                  className="w-full py-2.5 bg-[#C9922B] hover:bg-[#D4A017] text-white font-sans font-bold text-xs uppercase tracking-[1.5px] rounded-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>VIEW MENU</span>
                  <span>›</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 — MEETHA JUNCTION */}
          <div id="meetha-junction" className="flex flex-col bg-[#F7EBEB] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#C9922B]/20 relative text-center">
            <div className="relative aspect-video">
              <ImageWithPlaceholder
                src={meethaImg}
                alt="Meetha Sweets Box"
                className="w-full h-full object-cover"
                icon={<Gift className="w-5 h-5 text-[#C9922B]" />}
              />
              {/* Overlapping Centered Icon Circle */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#6B1A1A] text-white rounded-full flex items-center justify-center shadow-md border-[4px] border-[#F7EBEB] z-10">
                <Gift className="w-5 h-5" />
              </div>
            </div>

            <div className="p-6 pt-10 flex flex-col justify-between grow space-y-5">
              <div className="space-y-3">
                <h3 className="font-display font-black text-xl text-[#6B1A1A] tracking-wider uppercase">
                  MEETHA JUNCTION
                </h3>
                <p className="font-sans text-[13px] text-[#2C1810]/90 leading-relaxed min-h-[64px]">
                  Traditional Indian sweets made the right way. Perfect for gifting or treating yourself.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenModal('sweets')}
                  className="w-full py-2.5 bg-[#6B1A1A] hover:bg-[#521313] text-white font-sans font-bold text-xs uppercase tracking-[1.5px] rounded-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>EXPLORE SWEETS</span>
                  <span>›</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 — CATERING & EVENTS */}
          <div id="catering-events" className="flex flex-col bg-[#EBF2E4] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#C9922B]/10 relative text-center">
            <div className="relative aspect-video">
              <ImageWithPlaceholder
                src={cateringImg}
                alt="Station Catering Service"
                className="w-full h-full object-cover"
                icon={<CupSoda className="w-5 h-5 text-[#C9922B]" />}
              />
              {/* Overlapping Centered Icon Circle */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#3B5E34] text-white rounded-full flex items-center justify-center shadow-md border-[4px] border-[#EBF2E4] z-10">
                <CupSoda className="w-5 h-5" />
              </div>
            </div>

            <div className="p-6 pt-10 flex flex-col justify-between grow space-y-5">
              <div className="space-y-3">
                <h3 className="font-display font-black text-xl text-[#3B5E34] tracking-wider uppercase">
                  CATERING & EVENTS
                </h3>
                <p className="font-sans text-[13px] text-[#2C1810]/90 leading-relaxed min-h-[64px]">
                  From corporate lunches to weddings and celebrations, we cater with care and flavour.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenModal('catering')}
                  className="w-full py-2.5 bg-[#3B5E34] hover:bg-[#2C4827] text-white font-sans font-bold text-xs uppercase tracking-[1.5px] rounded-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>KNOW MORE</span>
                  <span>›</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 — LUNCH CLUB */}
          <div id="lunch-club" className="flex flex-col bg-[#EBF2F6] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#C9922B]/10 relative text-center">
            <div className="relative aspect-video">
              <ImageWithPlaceholder
                src={lunchClubImg}
                alt="Lunch Club Tiffins"
                className="w-full h-full object-cover"
                icon={<Calendar className="w-5 h-5 text-[#C9922B]" />}
              />
              {/* Overlapping Centered Icon Circle */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#1B4B5A] text-white rounded-full flex items-center justify-center shadow-md border-[4px] border-[#EBF2F6] z-10">
                <Calendar className="w-5 h-5" />
              </div>
            </div>

            <div className="p-6 pt-10 flex flex-col justify-between grow space-y-5">
              <div className="space-y-3">
                <h3 className="font-display font-black text-xl text-[#1B4B5A] tracking-wider uppercase">
                  LUNCH CLUB
                </h3>
                <p className="font-sans text-[13px] text-[#2C1810]/90 leading-relaxed min-h-[64px]">
                  Weekly & monthly meal subscriptions for individuals and corporate teams.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenModal('lunch')}
                  className="w-full py-2.5 bg-[#1B4B5A] hover:bg-[#12333E] text-white font-sans font-bold text-xs uppercase tracking-[1.5px] rounded-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>JOIN NOW</span>
                  <span>›</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
