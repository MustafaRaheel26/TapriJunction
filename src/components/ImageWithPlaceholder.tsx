import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function ImageWithPlaceholder({ src, alt, className = "", icon }: ImageWithPlaceholderProps) {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#3D1A00] to-[#7A3A00] flex items-center justify-center ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setLoading(false)}
          onError={() => setHasError(true)}
        />
      ) : null}

      {(hasError || loading) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <div className="bg-white/10 backdrop-blur-xs rounded-full p-3 mb-2 animate-pulse text-[#C9922B]">
            {icon || <ImageIcon className="w-6 h-6" />}
          </div>
          <p className="text-[10px] text-white/60 font-mono tracking-wider uppercase">{alt}</p>
        </div>
      )}
    </div>
  );
}
