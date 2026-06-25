import React from 'react';
import { Train } from 'lucide-react';

interface LogoProps {
  light?: boolean;
}

export default function Logo({ light = false }: LogoProps) {
  return (
    <div className="flex flex-col items-center justify-center shrink-0">
      {/* Train icon with steam motif */}
      <div className="flex items-center gap-1.5 mb-0.5">
        <div className={`relative flex items-center justify-center rounded-full p-1.5 border border-dashed ${light ? 'border-[#C9922B]/40 text-[#C9922B]' : 'border-[#6B1A1A]/30 text-[#6B1A1A]'}`}>
          <Train className="w-5 h-5 animate-pulse" />
          {/* Steam rings */}
          <span className={`absolute -top-1 left-4 w-1 h-1 rounded-full animate-bounce ${light ? 'bg-white/40' : 'bg-[#6B1A1A]/30'}`} style={{ animationDelay: '0.1s' }} />
          <span className={`absolute -top-2 left-6 w-1.5 h-1.5 rounded-full animate-bounce ${light ? 'bg-white/50' : 'bg-[#6B1A1A]/40'}`} style={{ animationDelay: '0.3s' }} />
        </div>
      </div>

      {/* TAPRI JUNCTION */}
      <div className="text-center leading-none">
        <span className={`block font-display font-black text-xl tracking-tight ${light ? 'text-white' : 'text-[#6B1A1A]'}`}>
          TAPRI
        </span>
        <span className={`block font-sans font-semibold text-[10px] tracking-[0.25em] -mt-0.5 uppercase ${light ? 'text-[#C9922B]' : 'text-[#C9922B]'}`}>
          JUNCTION
        </span>
      </div>

      {/* Curved Circular Arc Text or subtitle badge */}
      <div className="mt-1 flex items-center gap-1">
        <span className={`text-[8px] font-mono tracking-wider font-semibold uppercase ${light ? 'text-white/60' : 'text-[#5C3D2E]/80'}`}>
          • HOME AWAY FROM HOME •
        </span>
      </div>
    </div>
  );
}
