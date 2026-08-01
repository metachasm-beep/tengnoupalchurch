import React from 'react';
import { motion } from 'motion/react';
import { BookOpenText, Users, CalendarHeart, GlobeHemisphereWest, X, UserCircle } from '@phosphor-icons/react';
import ScrollFloat from '../components/ui/ScrollFloat';
import SpotlightCard from '../components/ui/SpotlightCard';
import { Dialog } from "@base-ui/react/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ImageModal from '../components/ImageModal';

const TextModal = ({ title, contentArray, triggerText, icon: Icon }) => (
  <Dialog.Root>
    <Dialog.Trigger className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-amber-accent hover:text-forest-900 transition-all text-bone-50 text-xs font-semibold uppercase tracking-widest rounded-full cursor-pointer border border-white/10 hover:border-transparent z-10 shadow-lg">
      <Icon size={16} weight="bold" /> {triggerText}
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Backdrop className="fixed inset-0 isolate z-[90] bg-black/80 backdrop-blur-sm duration-200 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
      <Dialog.Popup className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl z-[100] flex flex-col glass border border-white/10 rounded-3xl p-6 md:p-8 outline-none duration-200 data-open:animate-in data-open:zoom-in-95 data-open:fade-in-0 data-closed:animate-out data-closed:zoom-out-95 data-closed:fade-out-0 shadow-2xl overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center mb-6 shrink-0">
          <h3 className="font-serif text-2xl text-bone-50 flex items-center gap-3">
            <Icon size={28} className="text-amber-accent" /> {title}
          </h3>
          <Dialog.Close className="bg-white/5 hover:bg-white/10 text-white rounded-full p-2 transition-colors outline-none border-none cursor-pointer">
            <X size={20} weight="bold" />
          </Dialog.Close>
        </div>
        <div className="space-y-4 text-bone-100/90 font-light leading-relaxed">
          {contentArray?.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Dialog.Popup>
    </Dialog.Portal>
  </Dialog.Root>
);

const LeaderCard = ({ leader }) => (
  <div className="bg-white/5 p-4 md:p-5 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 border border-white/5 hover:bg-white/10 transition-colors text-center sm:text-left h-full shadow-lg backdrop-blur-md">
    {leader.img ? (
      <ImageModal src={leader.img} alt={leader.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full shadow-lg border-2 border-white/10 cursor-pointer hover:opacity-80 transition-opacity" />
    ) : (
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-forest-900 rounded-full border-2 border-white/10 flex items-center justify-center shadow-lg">
        <UserCircle size={40} weight="light" className="text-amber-accent/50" />
      </div>
    )}
    <div className="flex flex-col flex-1 justify-center h-full">
      <span className="text-lg font-medium text-bone-50 leading-tight">{leader.name}</span>
      <span className="text-xs font-semibold text-amber-accent/80 tracking-wide mt-1 uppercase">{leader.role}</span>
    </div>
  </div>
);

const EventCard = ({ evt }) => (
  <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5 shadow-lg h-full flex flex-col backdrop-blur-md">
    <h4 className="font-serif text-xl md:text-2xl font-medium text-bone-50 mb-1 leading-snug line-clamp-2">
      {evt.title}
    </h4>
    {evt.date && <p className="text-amber-accent font-medium text-xs mb-4">{evt.date}</p>}
    
    <div className="flex flex-col gap-2 mt-auto">
      {evt.theme && <p className="text-bone-100 text-xs"><span className="font-medium text-bone-50 uppercase tracking-widest text-[9px] mr-2">Theme</span> {evt.theme}</p>}
      {evt.speakers && <p className="text-bone-100 text-xs"><span className="font-medium text-bone-50 uppercase tracking-widest text-[9px] mr-2">Speakers</span> {evt.speakers.join(', ')}</p>}
      {evt.officiator && <p className="text-bone-100 text-xs"><span className="font-medium text-bone-50 uppercase tracking-widest text-[9px] mr-2">Officiator</span> {evt.officiator}</p>}
      {evt.director && <p className="text-bone-100 text-xs"><span className="font-medium text-bone-50 uppercase tracking-widest text-[9px] mr-2">Director</span> {evt.director}</p>}
    </div>
  </div>
);

export default function Houbong({ content }) {
  return (
    <section id="houbong" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-5 pointer-events-none z-0">
        <ScrollFloat 
          animationDuration={1} 
          ease="back.inOut(2)" 
          scrollStart="top bottom+=20%" 
          scrollEnd="bottom top-=20%" 
          containerClassName="text-[10rem] md:text-[20rem] font-serif font-bold text-bone-50 tracking-tighter whitespace-nowrap" 
          textClassName="leading-none"
        >
          HOUBUNG
        </ScrollFloat>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full h-full flex flex-col gap-6 md:gap-8 justify-center">
        
        {/* Header */}
        <div className="w-full flex items-center gap-4 mb-2 md:mb-6">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-bone-50">
            {content?.title || "Tengnoupal Houbung"}
          </h2>
        </div>

        {/* Mobile Layout (Stacked naturally) */}
        <div className="w-full md:hidden flex flex-col gap-6">
          {/* History Preview */}
          <SpotlightCard className="w-full glass p-6 rounded-3xl border border-white/5 shadow-xl flex flex-col items-start gap-4">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-accent flex items-center gap-2"><BookOpenText size={18} /> History</h3>
            <p className="leading-relaxed font-light text-sm text-bone-100/90 line-clamp-3">
              {content?.history?.[0]}
            </p>
            <TextModal title="Houbung History" contentArray={content?.history} triggerText="Read Full History" icon={BookOpenText} />
          </SpotlightCard>

          {/* Leaders Carousel */}
          <div className="w-full">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-bone-200/70 mb-3 pl-2 flex items-center gap-2"><Users size={18} /> Church Leaders</h3>
            <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
              <CarouselContent className="-ml-2">
                {content?.leaders?.map((leader, idx) => (
                  <CarouselItem key={idx} className="pl-2 basis-[85%] sm:basis-[60%]">
                    <LeaderCard leader={leader} />
                  </CarouselItem>
                ))}
                <CarouselItem className="pl-2 basis-[85%] sm:basis-[60%]">
                  <div className="relative rounded-2xl overflow-hidden glass border border-white/5 h-full min-h-[140px]">
                    <ImageModal src="/assets/houbong_lamkai.webp" alt="Houbung lamkai" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 to-transparent pointer-events-none" />
                    <p className="absolute bottom-3 left-3 right-3 text-center text-bone-50 text-[10px] font-medium leading-tight z-10">2025-2026 Lamkai</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          {/* GMS Mission Preview */}
          <SpotlightCard className="w-full glass p-6 rounded-3xl border border-white/5 shadow-xl flex flex-col items-start gap-4">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-accent flex items-center gap-2"><GlobeHemisphereWest size={18} /> GMS Mission</h3>
            <p className="leading-relaxed font-light text-sm text-bone-100/90 line-clamp-3">
              {content?.gms?.[0]}
            </p>
            <TextModal title="GMS Mission" contentArray={content?.gms} triggerText="Read About GMS" icon={GlobeHemisphereWest} />
          </SpotlightCard>

          {/* Events Carousel */}
          <div className="w-full mt-2">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-bone-200/70 mb-3 pl-2 flex items-center gap-2"><CalendarHeart size={18} /> Recent Events</h3>
            <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
              <CarouselContent className="-ml-2">
                <CarouselItem className="pl-2 basis-[85%] sm:basis-[60%]">
                  <div className="relative rounded-2xl overflow-hidden glass border border-white/5 h-full min-h-[180px]">
                    <ImageModal src="/assets/houbong_1.jpeg" alt="Recent Event" className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
                {content?.events?.map((evt, idx) => (
                  <CarouselItem key={idx} className="pl-2 basis-[85%] sm:basis-[60%]">
                    <EventCard evt={evt} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Desktop Layout (Bento Box Grid) */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-6 h-[70vh] max-h-[800px] w-full">
          
          {/* Row 1, Col 1: History */}
          <SpotlightCard className="col-span-1 row-span-1 glass p-8 rounded-[2rem] border border-white/5 shadow-xl flex flex-col">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-accent mb-4 flex items-center gap-2"><BookOpenText size={20} /> History</h3>
            <p className="leading-relaxed font-light text-bone-100/90 line-clamp-5 xl:line-clamp-6">
              {content?.history?.[0]}
            </p>
            <TextModal title="Houbung History" contentArray={content?.history} triggerText="Read Full History" icon={BookOpenText} />
          </SpotlightCard>

          {/* Row 1, Col 2 & 3: Leaders */}
          <SpotlightCard className="col-span-2 row-span-1 glass p-8 rounded-[2rem] border border-white/5 shadow-xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <img src="/assets/houbong_lamkai.webp" className="w-full h-full object-cover mask-image-gradient-l" alt="" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-accent mb-6 flex items-center gap-2"><Users size={20} /> Church Leaders</h3>
              <Carousel opts={{ align: "start", dragFree: true }} className="w-full flex-1">
                <CarouselContent className="-ml-4">
                  {content?.leaders?.map((leader, idx) => (
                    <CarouselItem key={idx} className="pl-4 basis-1/2 lg:basis-1/3">
                      <LeaderCard leader={leader} />
                    </CarouselItem>
                  ))}
                  <CarouselItem className="pl-4 basis-1/2 lg:basis-1/3">
                    <div className="relative rounded-2xl overflow-hidden glass border border-white/10 h-full cursor-pointer hover:border-amber-accent transition-colors">
                      <ImageModal src="/assets/houbong_lamkai.webp" alt="Houbung lamkai" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </SpotlightCard>

          {/* Row 2, Col 1 & 2: Events */}
          <SpotlightCard className="col-span-2 row-span-1 glass p-8 rounded-[2rem] border border-white/5 shadow-xl flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-full opacity-10 pointer-events-none">
              <img src="/assets/houbong_1.jpeg" className="w-full h-full object-cover mask-image-gradient-r" alt="" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-accent mb-6 flex items-center gap-2"><CalendarHeart size={20} /> Recent Events</h3>
              <Carousel opts={{ align: "start", dragFree: true }} className="w-full flex-1">
                <CarouselContent className="-ml-4 h-full">
                  <CarouselItem className="pl-4 basis-1/2 lg:basis-1/3 h-full">
                    <div className="relative rounded-2xl overflow-hidden glass border border-white/10 h-full min-h-[160px] cursor-pointer hover:border-amber-accent transition-colors">
                      <ImageModal src="/assets/houbong_1.jpeg" alt="Recent Event" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                  </CarouselItem>
                  {content?.events?.map((evt, idx) => (
                    <CarouselItem key={idx} className="pl-4 basis-1/2 lg:basis-1/3 h-full">
                      <EventCard evt={evt} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </SpotlightCard>

          {/* Row 2, Col 3: GMS Mission */}
          <SpotlightCard className="col-span-1 row-span-1 glass p-8 rounded-[2rem] border border-white/5 shadow-xl flex flex-col">
            <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-accent mb-4 flex items-center gap-2"><GlobeHemisphereWest size={20} /> GMS Mission</h3>
            <p className="leading-relaxed font-light text-bone-100/90 line-clamp-5 xl:line-clamp-6">
              {content?.gms?.[0]}
            </p>
            <TextModal title="GMS Mission" contentArray={content?.gms} triggerText="Read About GMS" icon={GlobeHemisphereWest} />
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
}
