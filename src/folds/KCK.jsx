import React, { useState } from 'react';
import { UsersThree, BookOpenText, Users, UserCircle, ArrowRight, X, ImageSquare, CaretLeft, CaretRight } from '@phosphor-icons/react';
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
import PaginatedReader from '../components/PaginatedReader';

export default function KCK({ content }) {
  const kckImages = getKCKImages();
  
  const [memberPage, setMemberPage] = useState(0);
  const [mobileMemberPage, setMobileMemberPage] = useState(0);
  const MEMBERS_PER_PAGE = 9;
  const MOBILE_MEMBERS_PER_PAGE = 4;
  
  // Combine all members into one array for the carousel/grid
  const allMembers = [
    ...(content?.lamkai || []),
    ...(content?.lhacha || []),
    ...(content?.committee || [])
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

  const GalleryCTA = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    return (
      <Dialog.Root onOpenChange={(open) => { if (!open) setSelectedEvent(null); }}>
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
                <div className="flex items-center gap-2 mb-1">
                  {selectedEvent && (
                    <button onClick={() => setSelectedEvent(null)} className="text-bone-200 hover:text-amber-accent transition-colors flex items-center pr-2 border-r border-white/20">
                      <CaretLeft size={16} weight="bold" />
                    </button>
                  )}
                  <span className="text-amber-accent text-[10px] uppercase tracking-[0.2em] font-semibold">K.C.K</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-bone-50 leading-tight">
                  {selectedEvent ? selectedEvent.title : "Gallery"}
                </h3>
              </div>
              <Dialog.Close className="bg-white/5 hover:bg-white/10 text-white rounded-full p-2 transition-colors outline-none border-none cursor-pointer shrink-0">
                <X size={20} weight="bold" />
              </Dialog.Close>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar pb-10">
              {!selectedEvent ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content?.gallery?.map((eventItem, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setSelectedEvent(eventItem)}
                      className="group relative rounded-xl overflow-hidden glass border border-white/5 cursor-pointer aspect-video shadow-lg"
                    >
                      <img src={eventItem.thumbnail} alt={eventItem.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 pr-4">
                        <h4 className="font-serif text-lg md:text-xl text-bone-50 group-hover:text-amber-accent transition-colors leading-tight drop-shadow-md">{eventItem.title}</h4>
                        <p className="text-bone-100/70 text-xs mt-1 font-medium">{eventItem.images?.length || 0} Photos</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
                  {selectedEvent.images?.map((imgSrc, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden glass p-1 border border-white/5 break-inside-avoid">
                      <ImageModal src={imgSrc} alt={`${selectedEvent.title} - ${idx + 1}`} caption="" className="w-full h-auto rounded-lg shadow-lg object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    );
  };

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
                  
                  <div className="flex-1 flex flex-col justify-between overflow-hidden pb-4">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {allMembers.slice(mobileMemberPage * MOBILE_MEMBERS_PER_PAGE, (mobileMemberPage + 1) * MOBILE_MEMBERS_PER_PAGE).map((member, idx) => (
                        <MemberCard key={idx} member={member} />
                      ))}
                    </div>

                    {Math.ceil(allMembers.length / MOBILE_MEMBERS_PER_PAGE) > 1 && (
                      <div className="flex items-center justify-center gap-4 mt-4">
                        <button 
                          onClick={() => setMobileMemberPage(prev => Math.max(0, prev - 1))}
                          disabled={mobileMemberPage === 0}
                          className="p-2 rounded-full bg-forest-800/80 text-bone-50 hover:bg-forest-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-white/10"
                        >
                          <CaretLeft size={20} weight="bold" />
                        </button>
                        <div className="flex gap-2">
                          {Array.from({ length: Math.ceil(allMembers.length / MOBILE_MEMBERS_PER_PAGE) }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-2 h-2 rounded-full transition-colors ${i === mobileMemberPage ? 'bg-amber-accent' : 'bg-white/30'}`}
                            />
                          ))}
                        </div>
                        <button 
                          onClick={() => setMobileMemberPage(prev => Math.min(Math.ceil(allMembers.length / MOBILE_MEMBERS_PER_PAGE) - 1, prev + 1))}
                          disabled={mobileMemberPage === Math.ceil(allMembers.length / MOBILE_MEMBERS_PER_PAGE) - 1}
                          className="p-2 rounded-full bg-forest-800/80 text-bone-50 hover:bg-forest-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-white/10"
                        >
                          <CaretRight size={20} weight="bold" />
                        </button>
                      </div>
                    )}
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
              <div className="w-full flex-col gap-6 flex h-[60vh] bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                <PaginatedReader text={content?.history?.join('\n\n')} maxChars={300} />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full flex-row gap-8 lg:gap-12 h-full max-h-[80vh] items-stretch">
          
          {/* Left Column: History & Gallery CTA */}
          <div className="w-[45%] flex flex-col h-full">
            <div className="flex flex-row items-center justify-between w-full mb-6 shrink-0">
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-widest uppercase text-bone-50 leading-tight">
                {content?.title}
              </h2>
              {content?.gallery?.length > 0 && <GalleryCTA />}
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
          {/* Committee Pagination Grid */}
          <div className="w-[55%] flex flex-col h-full pl-4 lg:pl-8">
            <div className="flex items-center gap-4 mb-6 shrink-0">
              <div>
                <h3 className="font-serif text-2xl font-medium tracking-tight text-bone-50">
                  2025-2026 Committee
                </h3>
                <p className="text-amber-accent/80 font-medium tracking-widest uppercase text-xs mt-1">Leaders & Members</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between pr-4 pb-4">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {allMembers.slice(memberPage * MEMBERS_PER_PAGE, (memberPage + 1) * MEMBERS_PER_PAGE).map((member, idx) => (
                  <MemberCard key={idx} member={member} isDesktop={true} />
                ))}
              </div>

              {Math.ceil(allMembers.length / MEMBERS_PER_PAGE) > 1 && (
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button 
                    onClick={() => setMemberPage(prev => Math.max(0, prev - 1))}
                    disabled={memberPage === 0}
                    className="p-2 rounded-full bg-forest-800/80 text-bone-50 hover:bg-forest-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-white/10"
                  >
                    <CaretLeft size={20} weight="bold" />
                  </button>
                  <div className="flex gap-2">
                    {Array.from({ length: Math.ceil(allMembers.length / MEMBERS_PER_PAGE) }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full transition-colors ${i === memberPage ? 'bg-amber-accent' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={() => setMemberPage(prev => Math.min(Math.ceil(allMembers.length / MEMBERS_PER_PAGE) - 1, prev + 1))}
                    disabled={memberPage === Math.ceil(allMembers.length / MEMBERS_PER_PAGE) - 1}
                    className="p-2 rounded-full bg-forest-800/80 text-bone-50 hover:bg-forest-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-white/10"
                  >
                    <CaretRight size={20} weight="bold" />
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
