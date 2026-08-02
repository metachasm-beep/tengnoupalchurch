import React from 'react';
import { UsersThree, BookOpenText, Users, UserCircle, ArrowRight, X, ImageSquare } from '@phosphor-icons/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog } from "@base-ui/react/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getKCKImages } from '../stores/AssetStore';
import SpotlightCard from '../components/ui/SpotlightCard';

import ImageModal from '../components/ImageModal';
import ScrollFloat from '../components/ui/ScrollFloat';

export default function KCK({ content }) {
  const kckImages = getKCKImages();
  
  // Combine all members into one array for the carousel/grid
  const allMembers = [
    ...(content?.lamkai || []),
    ...(content?.lhacha || []),
    ...(content?.committee || [])
  ];

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
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mb-3 sm:mb-4 border-2 border-white/10 shadow-lg shrink-0"
        />
      ) : (
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-forest-900 rounded-full mb-3 sm:mb-4 border-2 border-white/10 shadow-lg flex items-center justify-center shrink-0">
          <UserCircle size={40} weight="light" className="text-amber-accent/50" />
        </div>
      )}
      
      <h4 className="font-serif text-base sm:text-lg text-bone-50 font-medium leading-tight line-clamp-2">{member.name}</h4>
      <p className="text-amber-accent text-xs uppercase tracking-widest mt-1 sm:mt-2">{member.role || 'Member'}</p>
    </SpotlightCard>
  );

  const GalleryCTA = () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="group flex items-center gap-4 bg-transparent border border-amber-accent text-amber-accent px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-accent hover:text-forest-900 transition-all hover:scale-105 active:scale-95 outline-none w-fit shrink-0">
          View Gallery
          <ImageSquare size={18} weight="bold" className="group-hover:translate-x-1.5 transition-transform" />
        </button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 isolate z-[90] bg-black/80 backdrop-blur-xl duration-300 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
        <Dialog.Popup className="fixed inset-x-0 bottom-0 top-12 z-[100] flex flex-col glass-dark border-t border-x border-white/10 rounded-t-[2.5rem] p-6 sm:p-8 outline-none duration-500 data-open:animate-in data-open:slide-in-from-bottom-full data-closed:animate-out data-closed:slide-out-to-bottom-full shadow-[0_-20px_60px_rgba(0,0,0,0.5)] overflow-hidden max-w-5xl mx-auto">
          <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6 shrink-0" />
          <div className="flex justify-between items-center mb-6 shrink-0">
            <div className="flex flex-col">
              <span className="text-amber-accent text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">K.C.K</span>
              <h3 className="font-serif text-3xl text-bone-50">Gallery</h3>
            </div>
            <Dialog.Close className="bg-white/5 hover:bg-white/10 text-white rounded-full p-2 transition-colors outline-none border-none cursor-pointer shrink-0">
              <X size={20} weight="bold" />
            </Dialog.Close>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar pb-10">
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
              {content?.gallery?.map((image, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden glass p-1 border border-white/5 break-inside-avoid">
                  <ImageModal src={image.img} alt={image.caption} className="w-full h-auto rounded-lg shadow-lg object-cover" />
                  <div className="absolute inset-1 bg-gradient-to-t from-forest-900/90 via-transparent to-transparent pointer-events-none rounded-lg" />
                  {image.caption && <p className="absolute bottom-3 left-3 text-[10px] font-medium text-bone-50 drop-shadow-md z-10 leading-tight pr-2">{image.caption}</p>}
                </div>
              ))}
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );

  return (
    <section id="kck" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
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
          K.C.K
        </ScrollFloat>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col gap-6 md:gap-12 items-start">
        
        {/* Mobile Header */}
        <div className="w-full md:hidden flex flex-col gap-5 items-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-widest uppercase text-bone-50 text-center">
            {content?.title}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="group flex items-center justify-center gap-4 bg-transparent border border-amber-accent text-amber-accent px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-accent hover:text-forest-900 transition-all hover:scale-105 active:scale-95 outline-none w-full sm:w-auto">
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

            {content?.gallery?.length > 0 && <GalleryCTA />}
          </div>
        </div>

        {/* Mobile Tabs Wrapper */}
        <div className="w-full md:hidden">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="w-full bg-white/5 border border-white/10 rounded-full mb-6">
              <TabsTrigger value="history" className="flex-1 rounded-full text-bone-100 data-[state=active]:bg-amber-accent data-[state=active]:text-forest-900">
                <BookOpenText className="mr-2" /> History
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="history">
              <div className="w-full flex-col gap-6 flex">
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {content?.history?.map((para, i) => (
                    <p key={i} className="text-bone-100/90 text-sm leading-relaxed font-light bg-white/5 p-4 rounded-xl border border-white/5">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full flex-col items-start h-full">
          <div className="flex flex-row items-center justify-between w-full mb-8">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-widest uppercase text-bone-50">
              {content?.title}
            </h2>
            {content?.gallery?.length > 0 && <GalleryCTA />}
          </div>
          <div className="flex-1 flex flex-col gap-6 max-w-4xl">
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {content?.history?.map((para, i) => (
                <p key={i} className="text-bone-100/90 text-sm leading-relaxed font-light">
                  {para}
                </p>
              ))}
            </div>
          </div>
          
          {/* Committee Carousel (Desktop Only) */}
          {allMembers.length > 0 && (
            <div className="w-full mt-12 hidden md:block">
              <h3 className="font-sans text-xs tracking-[0.2em] text-bone-200/70 uppercase font-medium mb-4 pl-2 border-l-2 border-amber-accent/50 leading-none">2025-2026 Committee</h3>
              <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
                <CarouselContent className="-ml-2">
                  {allMembers.map((member, idx) => (
                    <CarouselItem key={idx} className="pl-2 basis-[45%] lg:basis-[20%]">
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
