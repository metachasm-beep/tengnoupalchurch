import React from 'react';
import { Sparkle, ArrowRight, X, UserCircle } from '@phosphor-icons/react';
import { Dialog } from "@base-ui/react/dialog";
import ScrollVelocity from '../components/ui/ScrollVelocity';
import SpotlightCard from '../components/ui/SpotlightCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ImageModal from '../components/ImageModal';
import Autoplay from "embla-carousel-autoplay";

export default function KCN({ content }) {
  const allMembers = Array.isArray(content?.committee) ? content.committee : [];

  const MemberCard = ({ member }) => (
    <SpotlightCard 
      spotlightColor="rgba(255, 183, 77, 0.15)"
      className="relative rounded-3xl overflow-hidden glass p-4 sm:p-5 border border-white/5 shadow-2xl bg-forest-800 flex flex-col items-center text-center group h-full min-h-[220px]"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-amber-accent/50 group-hover:bg-amber-accent transition-colors"></div>
      
      {member.img ? (
        <ImageModal 
          src={member.img} 
          alt={member.name} 
          caption={`${member.name} - ${member.role || 'Member'}`}
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mb-3 sm:mb-4 border-2 border-white/10 shadow-lg"
        />
      ) : (
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-forest-900 rounded-full mb-3 sm:mb-4 border-2 border-white/10 shadow-lg flex items-center justify-center">
          <UserCircle size={40} weight="light" className="text-amber-accent/50" />
        </div>
      )}
      
      <h4 className="font-serif text-base sm:text-lg text-bone-50 font-medium leading-tight line-clamp-2">{member.name}</h4>
      <p className="text-amber-accent text-xs uppercase tracking-widest mt-1 sm:mt-2">{member.role || 'Member'}</p>
    </SpotlightCard>
  );

  return (
    <section id="kcn" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative overflow-x-hidden overflow-y-auto md:overflow-hidden custom-scrollbar">
      
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
      <div className="md:hidden absolute top-0 left-0 w-full h-[40vh] z-0 pointer-events-none">
        <Carousel opts={{ loop: true }} plugins={typeof window !== 'undefined' ? [Autoplay({ delay: 4000, stopOnInteraction: false })] : []} className="w-full h-full">
          <CarouselContent className="h-full ml-0">
            {(content?.gallery?.length ? content.gallery : [{img: "/assets/kcn_1.webp"}]).map((item, idx) => (
              <CarouselItem key={idx} className="pl-0 h-[40vh]">
                <img src={item.img} alt="KCN Women" className="w-full h-full object-cover mix-blend-luminosity opacity-80" style={{ objectPosition: idx === 1 ? '40% 30%' : 'top' }} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-20 py-8 md:py-32">
        
        {/* Desktop Left Image (Editorial Split) */}
        <div className="hidden md:block w-5/12 h-[75vh] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
          <div className="absolute inset-0 bg-forest-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
          <Carousel opts={{ loop: true }} plugins={typeof window !== 'undefined' ? [Autoplay({ delay: 4000, stopOnInteraction: false })] : []} className="w-full h-full">
            <CarouselContent className="h-full ml-0">
              {(content?.gallery?.length ? content.gallery : [{img: "/assets/kcn_1.webp"}]).map((item, idx) => (
                <CarouselItem key={idx} className="pl-0 h-[75vh]">
                  <img 
                    src={item.img} 
                    alt="KCN Women's Department" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Right Content / Mobile Main Content */}
        <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left mt-[25vh] md:mt-0">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-semibold tracking-[0.2em] text-amber-accent uppercase border border-white/10 mb-4 md:mb-6 backdrop-blur-md shadow-lg">
            <Sparkle size={14} weight="fill" className="text-amber-accent" />
            Women's Department
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium tracking-widest uppercase mb-3 md:mb-8 leading-[1.1] drop-shadow-lg" dangerouslySetInnerHTML={{ __html: content?.title }} />
          
          <div className="w-12 h-1 bg-amber-accent/50 rounded-full mb-8 hidden md:block" />

          <p className="italic font-serif text-lg md:text-2xl text-bone-100/90 leading-[1.6] mb-6 md:mb-12 line-clamp-3 md:line-clamp-none md:max-w-xl">
            {content?.history?.[0]}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center md:justify-start">
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

            {/* Mobile Committee CTA */}
            {allMembers.length > 0 && (
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className="md:hidden group flex items-center gap-4 bg-transparent border border-amber-accent text-amber-accent px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-accent hover:text-forest-900 transition-all hover:scale-105 active:scale-95 outline-none">
                    View Committee 
                    <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </Dialog.Trigger>
                
                <Dialog.Portal>
                  <Dialog.Backdrop className="fixed inset-0 isolate z-[90] bg-black/80 backdrop-blur-xl duration-300 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
                  <Dialog.Popup className="fixed inset-x-0 bottom-0 top-12 z-[100] flex flex-col glass-dark border-t border-x border-white/10 rounded-t-[2.5rem] p-6 sm:p-8 outline-none duration-500 data-open:animate-in data-open:slide-in-from-bottom-full data-closed:animate-out data-closed:slide-out-to-bottom-full shadow-[0_-20px_60px_rgba(0,0,0,0.5)] overflow-hidden max-w-4xl mx-auto">
                    
                    {/* Pull Tab Indicator */}
                    <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6 shrink-0" />

                    <div className="flex justify-between items-center mb-6 shrink-0">
                      <div className="flex flex-col">
                        <span className="text-amber-accent text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">2025-2026</span>
                        <h3 className="font-serif text-3xl text-bone-50">Committee</h3>
                      </div>
                      <Dialog.Close className="bg-white/5 hover:bg-white/10 text-white rounded-full p-2 transition-colors outline-none border-none cursor-pointer shrink-0">
                        <X size={20} weight="bold" />
                      </Dialog.Close>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto custom-scrollbar pb-10">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {allMembers.map((member, idx) => (
                          <MemberCard key={idx} member={member} />
                        ))}
                      </div>
                    </div>
                  </Dialog.Popup>
                </Dialog.Portal>
              </Dialog.Root>
            )}
          </div>

          {/* Committee Carousel (Desktop Only) */}
          {allMembers.length > 0 && (
            <div className="w-full mt-10 md:mt-12 hidden md:block">
              <h3 className="font-sans text-xs tracking-[0.2em] text-bone-200/70 uppercase font-medium mb-4 pl-2 border-l-2 border-amber-accent/50 leading-none">2025-2026 Committee</h3>
              <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
                <CarouselContent className="-ml-2">
                  {allMembers.map((member, idx) => (
                    <CarouselItem key={idx} className="pl-2 basis-[45%] lg:basis-[30%]">
                      <MemberCard member={member} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
