import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretRight } from '@phosphor-icons/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Houbong({ content }) {
  const [activeTab, setActiveTab] = useState('history');

  const tabs = [
    { id: 'history', label: 'History' },
    { id: 'gms', label: 'GMS Mission' },
    { id: 'events', label: 'Recent Events' },
  ];

  return (
    <section id="houbong" className="min-h-[100dvh] w-full bg-forest-900 text-bone-50 py-20 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
        {/* Left Column: Navigation & Title */}
        <div className="w-full md:w-1/3 flex flex-col gap-8 md:gap-12 md:sticky md:top-32">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-bone-50 leading-tight">
            {content?.title || "Tengnoupal Houbung"}
          </h2>
          
          <div className="hidden md:flex flex-col gap-4 w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-5 py-3 rounded-xl transition-all duration-300 whitespace-nowrap text-sm md:text-base font-medium
                  ${activeTab === tab.id 
                    ? 'bg-amber-accent text-forest-900 shadow-md' 
                    : 'text-bone-100/60 hover:text-bone-50 hover:bg-white/5'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mobile CTA Modals */}
          <div className="md:hidden flex flex-col gap-4 w-full">
            {tabs.map((tab) => (
              <Dialog key={tab.id}>
                <DialogTrigger asChild>
                  <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-bone-50 px-6 py-5 rounded-2xl text-lg font-medium shadow-md flex justify-between items-center transition-colors w-full">
                    <span>{tab.label}</span>
                    <CaretRight weight="bold" className="text-amber-accent" />
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-forest-900 border border-white/10 text-bone-50 w-[95vw] sm:w-[500px] rounded-[32px] p-6 max-h-[85vh] flex flex-col">
                  <DialogHeader className="mb-4">
                    <DialogTitle className="text-left text-2xl font-serif text-amber-accent">{tab.label}</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-2 pb-4">
                    {tab.id === 'history' && (
                      <div className="space-y-6 text-bone-100/90 text-sm leading-relaxed font-light">
                        {content?.history?.map((para, i) => <p key={i}>{para}</p>)}
                      </div>
                    )}
                    {tab.id === 'gms' && (
                      <div className="space-y-6 text-bone-100/90 text-sm leading-relaxed font-light">
                        {content?.gms?.map((para, i) => <p key={i}>{para}</p>)}
                      </div>
                    )}
                    {tab.id === 'events' && (
                      <div className="flex flex-col gap-8">
                        {content?.events?.map((evt, idx) => (
                          <div key={idx} className="glass p-5 rounded-2xl border border-white/5 shadow-sm">
                            <h4 className="font-serif text-xl font-medium text-bone-50 mb-2 leading-snug">{evt.title}</h4>
                            {evt.date && <p className="text-amber-accent font-medium text-xs mb-4">{evt.date}</p>}
                            <div className="flex flex-col gap-2">
                              {evt.theme && <p className="text-bone-100 text-xs"><span className="font-medium text-bone-50 uppercase tracking-widest text-[9px] mr-2">Theme</span> {evt.theme}</p>}
                              {evt.speakers && <p className="text-bone-100 text-xs"><span className="font-medium text-bone-50 uppercase tracking-widest text-[9px] mr-2">Speakers</span> {evt.speakers.join(', ')}</p>}
                              {evt.officiator && <p className="text-bone-100 text-xs"><span className="font-medium text-bone-50 uppercase tracking-widest text-[9px] mr-2">Officiator</span> {evt.officiator}</p>}
                              {evt.director && <p className="text-bone-100 text-xs"><span className="font-medium text-bone-50 uppercase tracking-widest text-[9px] mr-2">Director</span> {evt.director}</p>}
                            </div>
                            {evt.details && (
                              <div className="mt-4 space-y-3">
                                {evt.details.map((detail, dIdx) => (
                                  <div key={dIdx} className="bg-white/5 p-4 rounded-xl text-xs text-bone-100 leading-relaxed border-l-2 border-amber-accent">
                                    {detail.split(' | ').map((part, pIdx) => <p key={pIdx} className={pIdx > 0 ? "mt-1" : ""}>{part}</p>)}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                        <div className="grid grid-cols-1 gap-4 mt-2">
                          <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 w-full">
                            <img loading="lazy" src="/assets/houbong_lamkai.webp" alt="Houbung lamkai" className="w-full h-auto rounded-xl shadow-lg object-cover" />
                            <p className="mt-2 text-center text-bone-200/60 text-[10px] italic px-2">2025-2026 kum sunga Houngbung lamkai holeh Upa Ngapdet ho</p>
                          </div>
                          <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 w-full">
                            <img loading="lazy" src="/assets/houbong_1.jpeg" alt="Event Image" className="w-full h-auto rounded-xl shadow-lg object-cover" />
                            <p className="mt-2 text-center text-bone-200/60 text-[10px] italic px-2">Recent Events</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Right Column: Content (Desktop) */}
        <div className="hidden md:block w-full md:w-2/3 min-h-[50vh] relative">
          <AnimatePresence mode="wait">
            {activeTab === 'history' && (
              <motion.div
                key="history"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-8"
              >
                <div className="space-y-6 text-bone-100/90 text-base md:text-lg leading-relaxed font-light">
                  {content?.history?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'gms' && (
              <motion.div
                key="gms"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-8"
              >
                <div className="space-y-6 text-bone-100/90 text-base md:text-lg leading-relaxed font-light">
                  {content?.gms?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'events' && (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-8"
              >
                {content?.events?.map((evt, idx) => (
                  <div key={idx} className="glass p-6 md:p-8 rounded-2xl border border-white/5 shadow-sm">
                    <h4 className="font-serif text-2xl md:text-3xl font-medium text-bone-50 mb-2 leading-snug">
                      {evt.title}
                    </h4>
                    {evt.date && <p className="text-amber-accent font-medium text-sm md:text-base mb-5">{evt.date}</p>}
                    
                    <div className="flex flex-col gap-3">
                      {evt.theme && <p className="text-bone-100 text-sm md:text-base"><span className="font-medium text-bone-50 uppercase tracking-widest text-[10px] mr-2">Theme</span> {evt.theme}</p>}
                      {evt.speakers && <p className="text-bone-100 text-sm md:text-base"><span className="font-medium text-bone-50 uppercase tracking-widest text-[10px] mr-2">Speakers</span> {evt.speakers.join(', ')}</p>}
                      {evt.officiator && <p className="text-bone-100 text-sm md:text-base"><span className="font-medium text-bone-50 uppercase tracking-widest text-[10px] mr-2">Officiator</span> {evt.officiator}</p>}
                      {evt.director && <p className="text-bone-100 text-sm md:text-base"><span className="font-medium text-bone-50 uppercase tracking-widest text-[10px] mr-2">Director</span> {evt.director}</p>}
                    </div>
                    
                    {evt.details && (
                      <div className="mt-6 space-y-4">
                        {evt.details.map((detail, dIdx) => (
                          <div key={dIdx} className="bg-white/5 p-5 rounded-xl text-sm md:text-base text-bone-100 leading-relaxed border-l-2 border-amber-accent">
                            {detail.split(' | ').map((part, pIdx) => (
                              <p key={pIdx} className={pIdx > 0 ? "mt-1" : ""}>{part}</p>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 w-full">
                    <img 
                      loading="lazy"
                      src="/assets/houbong_lamkai.webp" 
                      alt="Houbung lamkai" 
                      className="w-full h-auto rounded-xl shadow-lg object-cover"
                    />
                    <p className="mt-3 text-center text-bone-200/60 text-xs italic px-2">
                      2025-2026 kum sunga Houngbung lamkai holeh Upa Ngapdet ho
                    </p>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 w-full">
                    <img 
                      loading="lazy"
                      src="/assets/houbong_1.jpeg" 
                      alt="Event Image" 
                      className="w-full h-auto rounded-xl shadow-lg object-cover"
                    />
                    <p className="mt-3 text-center text-bone-200/60 text-xs italic px-2">
                      Recent Events
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
