import React from 'react';
import { Sparkle, ArrowRight, X } from '@phosphor-icons/react';
import { Dialog } from "@base-ui/react/dialog";
import ScrollVelocity from '../components/ui/ScrollVelocity';

export default function KCN({ content }) {
  return (
    <section id="kcn" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative overflow-hidden">
      
      {/* Background Ambient Layers */}
      <div className="absolute inset-0 z-0 bg-forest-900/60 pointer-events-none" />
      
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden h-full">
        <ScrollVelocity 
          texts={["ESTABLISHED IN FAITH"]} 
          velocity={40} 
          className="text-8xl md:text-[12rem] font-serif font-bold text-bone-50 tracking-tighter whitespace-nowrap" 
        />
      </div>

      {/* Mobile Top Image Banner */}
      <div className="md:hidden absolute top-0 left-0 w-full h-[50vh] z-0 pointer-events-none">
        <img src="/assets/kcn_1.webp" alt="KCN Women" className="w-full h-full object-cover object-top mix-blend-luminosity opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20 py-12 md:py-32">
        
        {/* Desktop Left Image (Editorial Split) */}
        <div className="hidden md:block w-5/12 h-[75vh] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
          <div className="absolute inset-0 bg-forest-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700" />
          <img 
            src="/assets/kcn_1.webp" 
            alt="KCN Women's Department" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
          />
        </div>

        {/* Right Content / Mobile Main Content */}
        <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left mt-[35vh] md:mt-0">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-semibold tracking-[0.2em] text-amber-accent uppercase border border-white/10 mb-4 md:mb-6 backdrop-blur-md shadow-lg">
            <Sparkle size={14} weight="fill" className="text-amber-accent" />
            Women's Department
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-4 md:mb-8 leading-[1.1] drop-shadow-lg" dangerouslySetInnerHTML={{ __html: content?.title }} />
          
          <div className="w-12 h-1 bg-amber-accent/50 rounded-full mb-8 hidden md:block" />

          <p className="italic font-serif text-xl md:text-2xl text-bone-100/90 leading-[1.6] mb-8 md:mb-12 line-clamp-4 md:line-clamp-none md:max-w-xl">
            {content?.history?.[0]}
          </p>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="group flex items-center gap-4 bg-amber-accent text-forest-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm shadow-[0_10px_30px_rgba(212,128,28,0.2)] hover:bg-bone-50 transition-all hover:scale-105 active:scale-95 outline-none">
                Read Full History 
                <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </Dialog.Trigger>
            
            <Dialog.Portal>
              <Dialog.Backdrop className="fixed inset-0 isolate z-[90] bg-black/80 backdrop-blur-xl duration-300 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
              <Dialog.Popup className="fixed inset-x-0 bottom-0 top-12 md:top-24 z-[100] flex flex-col glass-dark border-t border-x border-white/10 rounded-t-[2.5rem] p-8 md:p-12 outline-none duration-500 data-open:animate-in data-open:slide-in-from-bottom-full data-closed:animate-out data-closed:slide-out-to-bottom-full shadow-[0_-20px_60px_rgba(0,0,0,0.5)] overflow-hidden max-w-4xl mx-auto">
                
                {/* Pull Tab Indicator */}
                <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-8 shrink-0" />

                <div className="flex justify-between items-center mb-10 shrink-0">
                  <div className="flex flex-col">
                    <span className="text-amber-accent text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">Our Story</span>
                    <h3 className="font-serif text-3xl md:text-4xl text-bone-50">{content?.title}</h3>
                  </div>
                  <Dialog.Close className="bg-white/5 hover:bg-white/10 text-white rounded-full p-3 transition-colors outline-none border-none cursor-pointer shrink-0">
                    <X size={24} weight="bold" />
                  </Dialog.Close>
                </div>
                
                <div className="flex-1 overflow-y-auto custom-scrollbar pb-10 space-y-8 pr-4">
                  {content?.history?.map((para, i) => (
                    <p key={i} className={`text-bone-100/90 leading-relaxed md:leading-loose ${i === 0 ? 'italic font-serif text-xl text-amber-accent/90' : 'text-base font-light tracking-wide'}`}>
                      {para}
                    </p>
                  ))}
                </div>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>

        </div>
      </div>
    </section>
  );
}
