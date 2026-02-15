
import React from 'react';

interface ArtisticButtonProps {
  label: string;
  color: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

const ArtisticButton: React.FC<ArtisticButtonProps> = ({ label, color, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative px-10 py-5 overflow-hidden font-serif text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:scale-[1.02] active:scale-95`}
    >
      <div 
        className="absolute inset-0 bg-[#1A1A1B] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
      ></div>
      <div 
        className="absolute inset-0 border border-[#1A1A1B]/20 group-hover:border-transparent transition-colors"
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-2 h-2"
        style={{ backgroundColor: color }}
      ></div>
      <div className="relative flex items-center justify-center gap-2 text-[#1A1A1B] group-hover:text-white transition-colors duration-500">
        {icon}
        <span className="font-bold">{label}</span>
      </div>
    </button>
  );
};

export default ArtisticButton;
