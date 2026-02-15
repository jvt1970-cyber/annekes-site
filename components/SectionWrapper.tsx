
import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  useSplatters?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '', useSplatters = false }) => {
  return (
    <section id={id} className={`relative min-h-screen py-24 px-6 md:px-12 lg:px-24 overflow-hidden ${className}`}>
      {useSplatters && (
        <>
          <div className="absolute top-10 right-[-5%] w-64 h-64 bg-[#E91E63] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
          <div className="absolute bottom-10 left-[-5%] w-80 h-80 bg-[#009688] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full gold-splatter opacity-[0.03] pointer-events-none"></div>
        </>
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
