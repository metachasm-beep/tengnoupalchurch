import React from 'react';
import { UserCircle } from '@phosphor-icons/react';
import ScrollFloat from '../components/ui/ScrollFloat';
import SpotlightCard from '../components/ui/SpotlightCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ImageModal from '../components/ImageModal';

export default function KCU({ content }) {
  
  // Combine all committee members into a unified array
  const allMembers = [
    ...(content?.committee?.leaders || []),
    ...(content?.committee?.members || []),
    ...(content?.committee?.lhacha || [])
  ];

  const MemberCard = ({ member, isDesktop = false }) => (
    <SpotlightCard 
      spotlightColor="rgba(255, 183, 77, 0.15)"
      className={`relative rounded-3xl overflow-hidden glass p-4 sm:p-5 border border-white/5 shadow-2xl bg-forest-800 flex flex-col items-center text-center group h-full ${isDesktop ? '' : 'min-h-[220px]'}`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-amber-accent/50 group-hover:bg-amber-accent transition-colors"></div>
      
      {member.img ? (
        <ImageModal 
          src={member.img} 
          alt={member.name} 
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
    <section id="kcu" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-5 pointer-events-none z-0">
        <ScrollFloat 
          animationDuration={1} 
          ease="back.inOut(2)" 
          scrollStart="top bottom+=20%" 
          scrollEnd="bottom top-=20%" 
          containerClassName="text-[12rem] md:text-[25rem] font-serif font-bold text-bone-50 tracking-tighter whitespace-nowrap" 
          textClassName="leading-none"
        >
          K.C.U
        </ScrollFloat>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full h-full flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-center">
        
        {/* Mobile Header & Layout */}
        <div className="w-full md:hidden flex flex-col gap-6 h-full justify-center">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-bone-50">
              {content?.title}
            </h2>
          </div>

          {/* History */}
          <div className="w-full glass p-6 rounded-3xl border border-white/5 space-y-4 shadow-xl">
            {content?.history?.map((para, i) => (
              <p key={i} className="leading-relaxed font-light text-sm text-bone-100/90">
                {para}
              </p>
            ))}
          </div>

          {/* Committee Carousel */}
          {allMembers.length > 0 && (
            <div className="w-full mt-4">
              <h3 className="font-sans text-xs tracking-[0.2em] text-bone-200/70 uppercase font-medium mb-3 pl-2">2025-2026 Committee</h3>
              <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
                <CarouselContent className="-ml-2">
                  {allMembers.map((member, idx) => (
                    <CarouselItem key={idx} className="pl-2 basis-[55%] sm:basis-[40%]">
                      <MemberCard member={member} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full flex-row gap-8 lg:gap-12 h-full max-h-[80vh] items-stretch">
          
          {/* Left Column: History */}
          <div className="w-[45%] flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6 shrink-0">
              <div>
                <h2 className="font-serif text-4xl font-medium tracking-tight text-bone-50 leading-tight">
                  {content?.title}
                </h2>
                <p className="text-amber-accent/80 font-medium tracking-widest uppercase text-xs mt-2">History & Overview</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 rounded-3xl pb-10">
              <div className="glass p-8 rounded-3xl border border-white/5 space-y-4 shadow-xl">
                {content?.history?.map((para, i) => (
                  <p key={i} className="leading-relaxed font-light text-bone-100/90">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Committee */}
          <div className="w-[55%] flex flex-col h-full relative">
            <div className="flex items-center gap-4 mb-6 shrink-0">
              <div>
                <h3 className="font-serif text-2xl font-medium tracking-tight text-bone-50">
                  2025-2026 Committee
                </h3>
                <p className="text-amber-accent/80 font-medium tracking-widest uppercase text-xs mt-1">Leaders & Members</p>
              </div>
            </div>

             <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 rounded-3xl pb-10">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {allMembers.map((member, idx) => (
                    <MemberCard key={idx} member={member} isDesktop={true} />
                  ))}
                </div>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
