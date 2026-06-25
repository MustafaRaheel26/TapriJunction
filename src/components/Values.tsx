import React from 'react';
import { Coffee, Heart, Train, Leaf, Users } from 'lucide-react';

export default function Values() {
  const values = [
    {
      icon: <Coffee className="w-8 h-8 text-[#C9922B] stroke-[1.5]" />,
      title: "AUTHENTIC INDIAN FLAVOURS",
      desc: "Made with real ingredients and time-honoured recipes"
    },
    {
      icon: <Heart className="w-8 h-8 text-[#C9922B] stroke-[1.5]" />,
      title: "MADE WITH LOVE, SERVED WITH WARMTH",
      desc: "Every dish is prepared to make you feel at home"
    },
    {
      icon: <Train className="w-8 h-8 text-[#C9922B] stroke-[1.5]" />,
      title: "INSPIRED BY INDIAN RAILWAYS",
      desc: "From the platform culture to the food we grew up with"
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#C9922B] stroke-[1.5]" />,
      title: "VEGETARIAN GOODNESS",
      desc: "Wholesome, sattvic and full of flavour"
    },
    {
      icon: <Users className="w-8 h-8 text-[#C9922B] stroke-[1.5]" />,
      title: "A PLACE FOR EVERYONE",
      desc: "Come as a guest, leave as family"
    }
  ];

  return (
    <section className="bg-[#6B1A1A] py-16 text-white overflow-hidden relative">
      {/* Subtle track outline graphics */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9922B]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9922B]/30 to-transparent" />

      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x lg:divide-dashed divide-[#C9922B]/35">
          {values.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-4 ${index > 0 ? 'pt-6 sm:pt-0' : ''} lg:first:pl-0 lg:last:pr-0`}
            >
              {/* Icon Container with subtle ring */}
              <div className="bg-[#FAF6EE]/5 p-3 rounded-full mb-4 border border-[#C9922B]/20 flex items-center justify-center hover:bg-[#C9922B]/10 hover:border-[#C9922B]/40 transition-all duration-300">
                {item.icon}
              </div>

              {/* Heading */}
              <h4 className="font-sans font-bold text-[11px] xl:text-[12px] tracking-[2px] text-[#C9922B] uppercase mb-2 leading-snug">
                {item.title}
              </h4>

              {/* Description */}
              <p className="font-sans text-[12px] xl:text-[13px] text-white/80 leading-relaxed max-w-[200px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
