import React, { useState, useEffect } from 'react';
import { ChalkboardTeacher, Images, Users } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import ScrollFloat from '../components/ui/ScrollFloat';

export default function CE({ content }) {
  const [currentCbs, setCurrentCbs] = useState(0);
  const cbsImages = [1, 2, 3, 4, 5].map(i => `/assets/cbs_${i}.webp`);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCbs((prev) => (prev + 1) % cbsImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [cbsImages.length]);

  return (
    <section id="ce" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-20 md:py-20 overflow-hidden">
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
          C.E
        </ScrollFloat>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col md:flex-row gap-8 md:gap-12 items-start h-full">
        
        {/* Mobile Header */}
        <div className="w-full md:hidden flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src="/assets/ce_logo.webp" alt="CE Logo" className="w-16 h-16 rounded-full object-cover border border-white/10 shadow-lg" />
            <h2 className="font-serif text-3xl font-medium tracking-tight text-bone-50">
              {content?.title}
            </h2>
          </div>
        </div>

        {/* Mobile Tabs Wrapper */}
        <div className="w-full md:hidden">
          <Tabs defaultValue="staff" className="w-full">
            <TabsList className="w-full bg-white/5 border border-white/10 rounded-full mb-6">
              <TabsTrigger value="staff" className="flex-1 rounded-full text-bone-100 data-[state=active]:bg-amber-accent data-[state=active]:text-forest-900">
                <Users className="mr-2" /> Staff
              </TabsTrigger>
              <TabsTrigger value="gallery" className="flex-1 rounded-full text-bone-100 data-[state=active]:bg-amber-accent data-[state=active]:text-forest-900">
                <Images className="mr-2" /> Gallery
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="staff">
              <div className="w-full flex-col gap-6 flex h-full">
                <div className="glass p-4 sm:p-5 rounded-2xl border border-white/5 flex-1 flex flex-col gap-4 sm:gap-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
                  <div className="flex flex-col gap-2 sm:gap-4 border-b border-white/10 pb-4 sm:pb-6">
                    <div className="flex items-center gap-3">
                      
                      {content?.staff?.superintendent?.img ? (
                        <img src={content.staff.superintendent.img} alt={content.staff.superintendent.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent flex-shrink-0">
                          <ChalkboardTeacher size={24} weight="fill" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-semibold">{content?.staff?.superintendent?.name || content?.staff?.superintendent}</h4>
                        <p className="text-xs text-amber-accent/80 font-medium">Superintendent</p>
                      </div>
  
                    </div>
                    <div className="flex items-center gap-3">
                      
                      {content?.staff?.secretary?.img ? (
                        <img src={content.staff.secretary.img} alt={content.staff.secretary.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent flex-shrink-0">
                          <ChalkboardTeacher size={24} weight="fill" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-semibold">{content?.staff?.secretary?.name || content?.staff?.secretary}</h4>
                        <p className="text-xs text-amber-accent/80 font-medium">Secretary</p>
                      </div>
  
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-[0.2em] text-bone-200 uppercase font-medium mb-3 sm:mb-4">Teaching Staff</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-3">
                      {content?.staff?.teachers?.map((teacher, i) => (
                        <HoverCard key={i}>
                          <HoverCardTrigger asChild>
                            <div className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                              {teacher.img ? (
                                <img src={teacher.img} alt={teacher.name} className="w-6 h-6 rounded-full object-cover border border-white/10" />
                              ) : (
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-accent/50 flex-shrink-0" />
                              )}
                              <span className="text-sm text-bone-100">{teacher.name}</span>
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-64 bg-forest-800 border-white/10 text-bone-50 rounded-xl shadow-xl">
                            <div className="flex justify-between space-x-4">
                              {teacher.img ? (
                                <img src={teacher.img} alt={teacher.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center flex-shrink-0">
                                  <ChalkboardTeacher size={20} className="text-amber-accent" weight="fill" />
                                </div>
                              )}
                              <div className="space-y-1">
                                <h4 className="text-sm font-semibold text-bone-50 leading-tight">{teacher.name}</h4>
                                <p className="text-xs text-amber-accent/90">
                                  Teaching Staff
                                </p>
                                <p className="text-xs text-bone-100/70 pt-1">
                                  Tengnoupal Christian Church
                                </p>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="gallery">
              <div className="w-full flex-col gap-4 flex h-full justify-center">
                
                {content?.images?.map((img, idx) => (
                  <div key={idx} className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5">
                    <img src={img} alt="CE Photo" className="w-full h-[25vh] rounded-xl shadow-lg object-cover" />
                    <p className="absolute bottom-4 left-4 glass px-3 py-1 text-xs font-medium rounded-full">CE Photo</p>
                  </div>
                ))}

                <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 h-[30vh]">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentCbs}
                      src={cbsImages[currentCbs]}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-xl object-cover"
                      alt="Chapang Bible School 2025"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent pointer-events-none rounded-2xl" />
                  <p className="absolute bottom-4 left-4 z-10 px-3 py-1 text-xs font-medium text-bone-50 drop-shadow-md">
                    Chapang Bible School (CBS) 2025
                  </p>
                  <div className="absolute bottom-4 right-4 z-10 flex gap-1">
                    {cbsImages.map((_, i) => (
                      <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentCbs ? 'bg-amber-accent' : 'bg-white/30'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full flex-row gap-8 lg:gap-12 items-start h-full">
          <div className="w-1/2 flex-col gap-8 flex h-full">
            <div className="flex items-center gap-4">
              <img src="/assets/ce_logo.webp" alt="CE Logo" className="w-20 h-20 rounded-full object-cover border border-white/10 shadow-lg" />
              <h2 className="font-serif text-4xl font-medium tracking-tight text-bone-50">
                {content?.title}
              </h2>
            </div>

            <div className="glass p-8 rounded-2xl border border-white/5 flex-1 flex flex-col gap-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  
                  {content?.staff?.superintendent?.img ? (
                    <img src={content.staff.superintendent.img} alt={content.staff.superintendent.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent flex-shrink-0">
                      <ChalkboardTeacher size={24} weight="fill" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-base font-semibold">{content?.staff?.superintendent?.name || content?.staff?.superintendent}</h4>
                    <p className="text-sm text-amber-accent/80 font-medium">Superintendent</p>
                  </div>
  
                </div>
                <div className="flex items-center gap-3">
                  
                  {content?.staff?.secretary?.img ? (
                    <img src={content.staff.secretary.img} alt={content.staff.secretary.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center text-amber-accent flex-shrink-0">
                      <ChalkboardTeacher size={24} weight="fill" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-base font-semibold">{content?.staff?.secretary?.name || content?.staff?.secretary}</h4>
                    <p className="text-sm text-amber-accent/80 font-medium">Secretary</p>
                  </div>
  
                </div>
              </div>
              <div>
                <h3 className="font-sans text-xs tracking-[0.2em] text-bone-200 uppercase font-medium mb-4">Teaching Staff</h3>
                <div className="grid grid-cols-2 gap-3">
                  {content?.staff?.teachers?.map((teacher, i) => (
                        <HoverCard key={i}>
                          <HoverCardTrigger asChild>
                            <div className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
                              {teacher.img ? (
                                <img src={teacher.img} alt={teacher.name} className="w-6 h-6 rounded-full object-cover border border-white/10" />
                              ) : (
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-accent/50 flex-shrink-0" />
                              )}
                              <span className="text-sm text-bone-100">{teacher.name}</span>
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-64 bg-forest-800 border-white/10 text-bone-50 rounded-xl shadow-xl">
                            <div className="flex justify-between space-x-4">
                              {teacher.img ? (
                                <img src={teacher.img} alt={teacher.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-amber-accent/10 flex items-center justify-center flex-shrink-0">
                                  <ChalkboardTeacher size={20} className="text-amber-accent" weight="fill" />
                                </div>
                              )}
                              <div className="space-y-1">
                                <h4 className="text-sm font-semibold text-bone-50 leading-tight">{teacher.name}</h4>
                                <p className="text-xs text-amber-accent/90">
                                  Teaching Staff
                                </p>
                                <p className="text-xs text-bone-100/70 pt-1">
                                  Tengnoupal Christian Church
                                </p>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex-col gap-6 flex h-full justify-center">
            
            {content?.images?.map((img, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5">
                <img src={img} alt="CE Photo" className="w-full h-[30vh] rounded-xl shadow-lg object-cover" />
                <p className="absolute bottom-4 left-4 glass px-3 py-1 text-sm font-medium rounded-full">CE Photo</p>
              </div>
            ))}

            <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 h-[35vh]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentCbs}
                  src={cbsImages[currentCbs]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-xl object-cover"
                  alt="Chapang Bible School 2025"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent pointer-events-none rounded-2xl" />
              <p className="absolute bottom-4 left-4 z-10 px-3 py-1 text-sm font-medium text-bone-50 drop-shadow-md">
                Chapang Bible School (CBS) 2025
              </p>
              <div className="absolute bottom-4 right-4 z-10 flex gap-1">
                {cbsImages.map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentCbs ? 'bg-amber-accent' : 'bg-white/30'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
