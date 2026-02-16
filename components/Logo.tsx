
import React from 'react';

interface LogoProps {
  className?: string;
  scrolled?: boolean;
}

// Pointing to the raw file in your GitHub repository
// Repo: jvt1970-cyber/annekes-site
// Branch: main
// Path: public/logo.png
// Added version query param to ensure fresh fetch when file is updated on GitHub
const GITHUB_LOGO_URL = "https://raw.githubusercontent.com/jvt1970-cyber/annekes-site/main/public/logo.png?v=new_logo_1";

const Logo: React.FC<LogoProps> = ({ className = '', scrolled = false }) => {
  return (
    <img 
      src={GITHUB_LOGO_URL} 
      alt="Anneke van Tilburg" 
      className={`block w-auto max-w-[80vw] md:max-w-xl object-contain transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        scrolled ? 'h-16 md:h-20' : 'h-32 md:h-56'
      } ${className}`}
    />
  );
};

export default Logo;
