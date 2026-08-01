import React from 'react';
import { ArrowRight, X } from '@phosphor-icons/react';
import ScrollVelocity from '../components/ui/ScrollVelocity';
import { Dialog } from "@base-ui/react/dialog";

export default function Foundation({ content }) {
  return (
    <section id="foundation" className="min-h-[100dvh] w-full flex items-center justify-center bg-forest-900 text-bone-50 relative py-20 overflow-hidden">
      
      {/* Background Ambient Layers */}
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden h-full">
        <ScrollVelocity 
          texts={["ESTABLISHED 1974"]} 
          velocity={50} 
          className="text-8xl md:text-[12rem] font-serif font-bold text-amber-accent whitespace-nowrap" 
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full h-full flex flex-col justify-center">
        
        {/* Desktop Content (Cinematic Split View) */}
        <div className="hidden md:flex flex-col items-start w-full max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold tracking-wider text-amber-accent uppercase mb-6">
             {content?.badge}
          </div>
          <h2 className="font-serif text-5xl font-medium tracking-tight mb-8 leading-tight drop-shadow-lg" dangerouslySetInnerHTML={{ __html: content?.title }} />
          
          <div className="space-y-6 text-bone-100 text-lg leading-relaxed border-l-2 border-amber-accent/50 pl-8">
            <p className="italic font-serif text-xl text-bone-50 opacity-90">
              {content?.paragraphs[0]}
            </p>
            <p className="text-base opacity-80 uppercase tracking-widest font-sans pt-2">
              {content?.paragraphs[1]}
            </p>
          </div>
        </div>

        {/* Mobile Content (Editorial Spotlight with FAB Modal) */}
        <div className="md:hidden w-full flex flex-col justify-center items-center relative">
          
          {/* Mobile Specific Ambient Background */}
          <div className="absolute inset-0 z-0 -mx-4 -my-20 pointer-events-none opacity-30 mix-blend-luminosity">
             <img src="/assets/houbong_1.jpeg" className="w-full h-full object-cover blur-md" alt="" />
             <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-forest-900/10" />
          </div>

          <div className="relative z-10 w-full glass-dark p-8 rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col items-start backdrop-blur-xl">
            
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-accent/20 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-900/80 text-[10px] font-semibold tracking-[0.2em] text-amber-accent uppercase border border-white/5 mb-8 backdrop-blur-md shadow-lg">
              {content?.badge}
            </div>
            
            <h3 className="font-serif text-4xl font-medium tracking-tight text-bone-50 leading-[1.1] mb-8 drop-shadow-md" dangerouslySetInnerHTML={{ __html: content?.title }} />
            
            <p className="italic font-serif text-lg text-bone-100/90 leading-[1.8] mb-10 line-clamp-4 relative z-10">
              <span className="absolute -top-3 -left-3 text-7xl text-amber-accent/10 font-serif leading-none select-none">"</span>
              {content?.paragraphs[0]}
            </p>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="group mt-auto self-end flex items-center gap-3 bg-amber-accent text-forest-900 px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs outline-none shadow-[0_10px_30px_rgba(212,128,28,0.3)] hover:bg-bone-50 transition-colors">
                  Read Chapter 
                  <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Dialog.Trigger>
              
              <Dialog.Portal>
                <Dialog.Backdrop className="fixed inset-0 isolate z-[90] bg-black/80 backdrop-blur-xl duration-300 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
                <Dialog.Popup className="fixed inset-x-0 bottom-0 top-12 z-[100] flex flex-col glass-dark border-t border-x border-white/10 rounded-t-[2.5rem] p-8 md:p-10 outline-none duration-500 data-open:animate-in data-open:slide-in-from-bottom-full data-closed:animate-out data-closed:slide-out-to-bottom-full shadow-[0_-20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                  
                  {/* Pull Tab Indicator */}
                  <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-8 shrink-0" />

                  <div className="flex justify-between items-center mb-8 shrink-0">
                    <h3 className="font-serif text-3xl text-bone-50">Our Foundation</h3>
                    <Dialog.Close className="bg-white/5 hover:bg-white/10 text-white rounded-full p-2.5 transition-colors outline-none border-none cursor-pointer shrink-0">
                      <X size={20} weight="bold" />
                    </Dialog.Close>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto custom-scrollbar pb-10 space-y-8">
                    <p className="italic font-serif text-xl text-amber-accent/90 leading-relaxed drop-shadow-sm">
                      {content?.paragraphs[0]}
                    </p>
                    <p className="text-base text-bone-100/90 font-light tracking-wide leading-loose">
                      {content?.paragraphs[1]}
                    </p>
                  </div>
                </Dialog.Popup>
              </Dialog.Portal>
            </Dialog.Root>

          </div>
        </div>

      </div>
    </section>
  );
}
