
import React, { useState, useEffect } from 'react';
import { generateSoulPrompt } from './services/geminiService';
import SectionWrapper from './components/SectionWrapper';
import ArtisticButton from './components/ArtisticButton';
import AnimatedBackground from './components/AnimatedBackground';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [soulPrompt, setSoulPrompt] = useState<{ title: string; prompt: string } | null>(null);
  const [loadingPrompt, setLoadingPrompt] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetSoulPrompt = async () => {
    setLoadingPrompt(true);
    const result = await generateSoulPrompt("Alchemical transformation through intuitive art and deep rhythm");
    setSoulPrompt(result);
    setLoadingPrompt(false);
  };

  const services = [
    { label: 'Workshops', color: '#D12061', id: 'workshops' },
    { label: 'DJ Sets', color: '#00796B', id: 'dj' },
    { label: 'Farm Dances', color: '#B8860B', id: 'dances' },
    { label: 'Gallery', color: '#1A1A1B', id: 'gallery' },
    { label: 'Coaching', color: '#4A4A4A', id: 'coaching' }
  ];

  return (
    <div className="bg-texture min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />

      {/* Navigation - The Minimalist Explorer */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl py-2 border-[#1A1A1B]/5 shadow-sm' 
            : 'bg-transparent py-8 border-transparent'
        }`}
      >
        <div className={`max-w-7xl mx-auto px-6 flex flex-col items-center justify-center transition-all duration-500 ${scrolled ? 'gap-2' : 'gap-6'}`}>
          <a href="#home" className="group block">
            <Logo scrolled={scrolled} />
          </a>
          <div className={`hidden md:flex font-serif text-[10px] tracking-[0.4em] uppercase opacity-60 transition-all duration-500 ${scrolled ? 'space-x-8' : 'space-x-12'}`}>
            <a href="#home" className="hover:text-[#D12061] hover:opacity-100 transition-all relative group">
              Journey
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#D12061] transition-all group-hover:w-full"></span>
            </a>
            <a href="#spotlight" className="hover:text-[#B8860B] hover:opacity-100 transition-all relative group">
              Portal
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#B8860B] transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-[#D12061] hover:opacity-100 transition-all relative group">
              Essence
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#D12061] transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-[#1A1A1B] hover:opacity-100 transition-all relative group">
              Connect
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#1A1A1B] transition-all group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - The Explorer Intro & The Creator Language */}
      <SectionWrapper id="home" className="pt-64 pb-32" useSplatters>
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10 relative">
            {/* Background scribe (Outlaw Edge) */}
            <div className="absolute -top-24 -left-12 font-qwitcher text-[12rem] text-[#D12061]/5 rotate-[-10deg] select-none pointer-events-none">
              Raw Truth
            </div>
            
            <div className="space-y-2">
              <span className="font-allison text-5xl text-[#D12061] block mb-2 opacity-80">Finding home in every stroke...</span>
              <h2 className="font-serif text-6xl md:text-8xl leading-[0.9] text-[#1A1A1B] tracking-tighter">
                Embody <br />
                <span className="italic font-normal opacity-90 pl-12 md:pl-24 font-qwitcher text-[#B8860B] text-[8rem] inline-block -mt-6">the Flow.</span>
              </h2>
            </div>
            
            <p className="font-serif text-xl md:text-2xl text-[#1A1A1B]/50 leading-relaxed max-w-xl">
              Test tekst in het glooiende Zuid Limburg, met heerlijke ritmes op de dansvloer. Ontdek en ga mee op reis.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              {services.map(s => (
                <ArtisticButton key={s.id} label={s.label} color={s.color} onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })} />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 relative group">
            <div className="relative z-10 p-6 bg-white shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-1000 magician-glow">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Anneke In Studio" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-[3s]"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-[#D12061] rounded-full flex items-center justify-center p-8 transform group-hover:scale-110 transition-transform duration-700">
                 <p className="font-qwitcher text-5xl text-white text-center leading-none">Creator's Heart</p>
              </div>
            </div>
            {/* Alchemical Shadows */}
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-[#B8860B]/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#D12061]/5 rounded-full blur-[120px] -z-10"></div>
          </div>
        </div>
      </SectionWrapper>

      {/* The Portal - The Magician (Hidden Gem) */}
      <SectionWrapper id="spotlight" className="bg-[#1A1A1B] text-white overflow-visible py-40">
        <div className="max-w-6xl mx-auto relative">
          {/* Subtle scribe background */}
          <div className="absolute top-0 right-0 font-qwitcher text-[15rem] text-white/5 rotate-12 select-none pointer-events-none">Transformation</div>
          
          <div className="flex flex-col md:flex-row items-stretch bg-[#212122] rounded-none md:rounded-l-[10rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5 group">
            <div className="w-full md:w-5/12 p-16 md:p-24 space-y-10 flex flex-col justify-center order-2 md:order-1">
              <div className="space-y-6">
                <h3 className="font-windsong text-[#B8860B] text-6xl">The Next Portal</h3>
                <h2 className="font-serif text-5xl md:text-6xl leading-tight">Limburg Solstice Ritual</h2>
                <div className="w-20 h-[2px] bg-[#D12061]"></div>
              </div>
              <p className="font-serif text-lg text-white/60 leading-relaxed italic">
                "Step into the rolling hills for a night of rhythmic ritual and collective creation. A homecoming for the wild soul."
              </p>
              <div className="pt-6">
                <ArtisticButton label="Enter the Circle" color="#B8860B" onClick={() => {}} />
              </div>
            </div>
            
            <div className="w-full md:w-7/12 min-h-[500px] relative overflow-hidden order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s]" 
                alt="Ecstatic Dance" 
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#212122] via-transparent to-transparent hidden md:block"></div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* The Oracle - Interactive Magician */}
      <section className="py-40 px-6 relative bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <p className="font-serif text-[10px] tracking-[0.5em] uppercase opacity-30">The Hidden Gem</p>
            <h3 className="font-serif text-4xl md:text-5xl text-[#1A1A1B]">Whispers of Intuition</h3>
          </div>
          
          {!soulPrompt ? (
            <div className="relative inline-block">
              <button 
                onClick={handleGetSoulPrompt}
                disabled={loadingPrompt}
                className="group relative px-16 py-8 bg-white border border-[#1A1A1B]/10 hover:border-[#B8860B] transition-all duration-700 magician-glow"
              >
                <span className="relative z-10 font-serif uppercase tracking-[0.3em] text-xs">
                  {loadingPrompt ? "Translating Frequencies..." : "Evoke a Soul Prompt"}
                </span>
                <div className="absolute inset-0 bg-[#B8860B]/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
              </button>
              <div className="absolute -top-12 -right-12 font-shalimar text-6xl text-[#D12061] opacity-60 animate-drift rotate-12">Ready?</div>
            </div>
          ) : (
            <div className="p-16 bg-white magician-glow rounded-none border-l-4 border-[#B8860B] animate-fade-in text-left relative overflow-hidden">
               <div className="absolute top-4 right-8 font-qwitcher text-8xl text-[#1A1A1B]/5">Received</div>
               <h4 className="font-qwitcher text-7xl mb-6 text-[#D12061]">{soulPrompt.title}</h4>
               <p className="font-serif text-2xl italic leading-relaxed text-[#1A1A1B]/70">{soulPrompt.prompt}</p>
               <button onClick={() => setSoulPrompt(null)} className="mt-12 text-[10px] font-serif uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2">
                 <span>Seek Another Whisper</span>
                 <span className="w-8 h-px bg-current"></span>
               </button>
            </div>
          )}
        </div>
      </section>

      {/* The Outlaw - Raw & Rebellious About */}
      <SectionWrapper id="about" className="bg-[#EAE6E1] py-40">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="grid grid-cols-12 grid-rows-12 gap-0 relative">
                <div className="col-span-10 row-span-10 z-20 shadow-2xl overflow-hidden outlaw-edge transform -rotate-2">
                  <img src="https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale-[0.2]" alt="Anneke DJing" />
                </div>
                <div className="col-start-6 col-span-7 row-start-6 row-span-7 z-30 shadow-2xl overflow-hidden border-[12px] border-white transform rotate-3 mt-4">
                  <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdc8a8b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Art Detail" />
                </div>
                <div className="absolute -top-16 -left-12 font-qwitcher text-[12rem] text-[#1A1A1B]/10 -rotate-12 z-10 select-none">Unfiltered</div>
             </div>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-7xl md:text-8xl leading-[0.85] tracking-tighter">
                Refuse <br />
                the Ordinary.
              </h2>
              <span className="font-qwitcher text-7xl text-[#D12061]">This is my rebellion.</span>
            </div>
            
            <div className="space-y-8 font-serif text-xl text-[#1A1A1B]/60 leading-relaxed">
              <p>
                My name is Anneke. I am an explorer of the inner landscape, a creator of vivid worlds, and an outlaw to the status quo. 
              </p>
              <p>
                In my studio on the edge of the South Limburg hills, I dismantle the barriers between movement and static art. Every DJ set is a prayer; every canvas is a confession.
              </p>
            </div>
            
            <ArtisticButton label="Explore the Essence" color="#1A1A1B" onClick={() => {}} />
          </div>
        </div>
      </SectionWrapper>

      {/* Contact - The Grounded Explorer */}
      <SectionWrapper id="contact" className="py-48 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5 space-y-10">
            <h2 className="font-qwitcher text-8xl text-[#D12061] leading-none">Reach Out</h2>
            <h3 className="font-serif text-5xl leading-tight">Let the journey <br /> begin here.</h3>
            <p className="font-serif text-lg text-[#1A1A1B]/40 italic max-w-sm">
              Inquiries for workshops, rhythmic curation, or private coaching are handled with deep presence.
            </p>
            <div className="pt-8 space-y-4 font-serif text-sm tracking-widest opacity-60">
              <p>Studio Limburg, NL</p>
              <p>hello@annekevt.com</p>
            </div>
          </div>
          
          <form className="lg:col-span-7 space-y-12 relative">
            <div className="absolute -top-20 -right-20 font-allison text-8xl text-[#B8860B]/20 rotate-12 select-none">Write to me...</div>
            
            <div className="space-y-2 border-b-2 border-[#1A1A1B]/5 focus-within:border-[#D12061] transition-all duration-500">
              <label className="font-serif uppercase tracking-[0.3em] text-[9px] opacity-40">Spirit Identity</label>
              <input type="text" className="w-full bg-transparent py-4 focus:outline-none font-serif text-2xl placeholder:opacity-10" placeholder="Full Name" />
            </div>
            
            <div className="space-y-2 border-b-2 border-[#1A1A1B]/5 focus-within:border-[#D12061] transition-all duration-500">
              <label className="font-serif uppercase tracking-[0.3em] text-[9px] opacity-40">The Frequency</label>
              <input type="email" className="w-full bg-transparent py-4 focus:outline-none font-serif text-2xl placeholder:opacity-10" placeholder="Email Address" />
            </div>
            
            <div className="space-y-2 border-b-2 border-[#1A1A1B]/5 focus-within:border-[#D12061] transition-all duration-500">
              <label className="font-serif uppercase tracking-[0.3em] text-[9px] opacity-40">The Intent</label>
              <textarea rows={3} className="w-full bg-transparent py-4 focus:outline-none font-serif text-2xl placeholder:opacity-10" placeholder="What calls to you?"></textarea>
            </div>
            
            <div className="pt-4">
              <ArtisticButton label="Release Your Voice" color="#D12061" onClick={() => {}} />
            </div>
          </form>
        </div>
      </SectionWrapper>

      {/* Footer - The Unified Archetypes */}
      <footer className="py-32 px-6 bg-[#1A1A1B] text-white/30 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12">
            <h4 className="font-qwitcher text-8xl text-white mb-2">Anneke van Tilburg</h4>
            <div className="flex justify-center items-center gap-6 font-serif text-[9px] tracking-[0.5em] uppercase opacity-40">
              <span>Explorer</span>
              <span className="w-1 h-1 bg-[#D12061] rounded-full"></span>
              <span>Creator</span>
              <span className="w-1 h-1 bg-[#B8860B] rounded-full"></span>
              <span>Outlaw</span>
              <span className="w-1 h-1 bg-[#00796B] rounded-full"></span>
              <span>Magician</span>
            </div>
          </div>
          
          <div className="w-full h-px bg-white/5 mb-12 max-w-md mx-auto"></div>
          
          <p className="text-[9px] tracking-[0.3em] uppercase opacity-20">
            &copy; {new Date().getFullYear()} Anneke van Tilburg. Crafted with Soul in South Limburg.
          </p>
        </div>
        
        {/* Magician's Glow Footer */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#D12061]/10 rounded-full blur-[150px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-[150px]"></div>
      </footer>
    </div>
  );
};

export default App;
