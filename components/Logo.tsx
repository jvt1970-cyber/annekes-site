
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', scrolled = false }) => {
  const [error, setError] = useState(false);

  // We try to load the logo from the root (public folder serves to root)
  // Ensure your file is named 'logo.png' and placed in the public folder.
  const logoPath = "/logo.png";

  if (error) {
    return (
      <h1 className={`logo-font text-6xl md:text-8xl transition-all duration-500 group-hover:-rotate-2 group-hover:scale-105 ${scrolled ? 'text-[#1A1A1B]' : 'text-[#1A1A1B]'} ${className}`}>
        Anneke van Tilburg
      </h1>
    );
  }

  return (
    <img 
      src={logoPath} 
      onError={() => setError(true)}
      alt="Anneke van Tilburg" 
      className={`h-20 md:h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105 ${className}`}
    />
  );
};

export default Logo;
