
import React from 'react';

interface LogoProps {
  className?: string;
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', scrolled = false }) => {
  // Explicitly pointing to the public folder as requested
  const logoPath = "public/logo.png";

  return (
    <img 
      src={logoPath} 
      alt="Anneke van Tilburg" 
      className={`block w-auto object-contain transition-all duration-500 ease-out ${
        scrolled ? 'h-10 md:h-14' : 'h-16 md:h-24'
      } ${className}`}
    />
  );
};

export default Logo;
