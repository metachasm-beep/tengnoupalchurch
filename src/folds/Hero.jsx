import React from 'react';
import BlurText from '../components/BlurText/BlurText';
import { MapPin, X } from '@phosphor-icons/react';
import heroBg from '../../public/assets/hero_bg.webp';
import { Button } from "@/components/ui/button";
import { Dialog } from "@base-ui/react/dialog";
import PaginatedReader from '../components/PaginatedReader';

export default function Hero({ content, visionContent }) {
  return (
    <section id="hero" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden pt-20 bg-forest-900">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center gap-4 md:gap-6 mt-0 md:mt-[-40px]">
        <img 
          src="/assets/logo.webp" 
          alt="Tengnoupal Christian Church Logo" 
          className="h-24 md:h-32 w-auto object-contain brightness-0 invert opacity-90 drop-shadow-lg mb-2"
        />
        <div className="flex flex-col items-center gap-3 md:gap-4 mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold tracking-wider text-amber-accent uppercase">
            <MapPin weight="bold" /> {content?.location}
          </div>
        </div>
        
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-widest uppercase leading-[1.1] text-bone-50 my-2 md:my-4 drop-shadow-lg">
          {content?.subtitle}
        </h1>
        
        <h2 className="font-sans text-sm md:text-xl tracking-[0.1em] text-bone-200 uppercase font-medium mb-4">
          <BlurText 
            text={content?.headline || ""} 
            delay={50} 
            className="block"
          />
        </h2>
        
        <p className="text-base md:text-lg text-bone-100 max-w-[40ch] leading-relaxed mx-auto">
          {content?.description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 w-full sm:w-auto">
          <Button onClick={() => { const el = document.getElementById('nav-sermons'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="bg-amber-accent text-forest-900 px-8 py-6 rounded-full font-bold hover:bg-amber-accent-hover transition-colors hover:scale-[0.98] w-full sm:w-auto text-sm md:text-base h-auto">
            Sunday Services
          </Button>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button className="glass px-8 py-6 rounded-full font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-sm md:text-base text-bone-50 h-auto">
                Our Vision
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop className="fixed inset-0 isolate z-[90] bg-black/80 backdrop-blur-md duration-300 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
              <Dialog.Popup className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl z-[100] flex flex-col glass-dark border border-white/10 rounded-[2rem] p-6 md:p-10 outline-none duration-300 data-open:animate-in data-open:zoom-in-95 data-open:fade-in-0 data-closed:animate-out data-closed:zoom-out-95 data-closed:fade-out-0 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="flex justify-between items-center mb-8 shrink-0 border-b border-white/5 pb-4">
                  <h3 className="font-serif text-2xl md:text-4xl text-bone-50 flex items-center gap-4">
                    Our Vision
                  </h3>
                  <Dialog.Close className="bg-white/5 hover:bg-white/10 text-white rounded-full p-2.5 transition-colors outline-none border-none cursor-pointer">
                    <X size={20} weight="bold" />
                  </Dialog.Close>
                </div>
                <div className="w-full flex-1 flex-col flex bg-white/5 rounded-xl border border-white/5 relative overflow-hidden min-h-[350px]">
                  <PaginatedReader 
                    text={visionContent?.join('\n\n')} 
                    maxChars={600} 
                    renderImage={() => (
                      <div className="float-left mr-5 mb-3 w-1/3 sm:w-1/4 min-w-[120px] max-w-[200px]">
                        <img 
                          src="/assets/houbong/vision/1.jpeg" 
                          alt="Our Vision" 
                          className="w-full h-auto object-cover rounded-xl shadow-lg border border-white/10"
                        />
                      </div>
                    )}
                  />
                </div>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </section>
  );
}
