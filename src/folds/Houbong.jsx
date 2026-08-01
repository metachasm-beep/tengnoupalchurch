import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretRight } from '@phosphor-icons/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ImageModal from '../components/ImageModal';

export default function Houbong({ content }) {
  const [activeTab, setActiveTab] = useState('history');

  const tabs = [
    { id: 'history', label: 'History' },
    { id: 'leaders', label: 'Church Leaders' },
    { id: 'gms', label: 'GMS Mission' },
    { id: 'events', label: 'Recent Events' },
    { id: 'gallery', label: 'Gallery' },
  ];

  return (
    <section id="houbong" className="h-[100dvh] w-full bg-forest-900 text-bone-50 pt-24 pb-12 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
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
                      <div className="space-y-6 text-bone-100/95 text-base leading-relaxed font-light">
                        {content?.history?.map((para, i) => <p key={i}>{para}</p>)}
                      </div>
                    )}
                    {tab.id === 'leaders' && (
                      <div className="flex flex-col gap-4">
                        <h4 className="font-sans text-xs tracking-[0.2em] text-amber-accent uppercase font-medium mb-2">2025-2026 kum sunga Lamkai ho</h4>
                        <div className="space-y-3">
                          {content?.leaders?.map((leader, idx) => (
                            <div key={idx} className="bg-white/5 p-4 rounded-xl flex items-center gap-4 border border-white/5 shadow-sm">
                              {leader.img ? (
                                <img src={leader.img} alt={leader.name} className="w-12 h-12 object-cover rounded-full border border-white/10" />
                              ) : (
                                <div className="w-12 h-12 bg-forest-900 rounded-full border border-white/10 flex items-center justify-center">
                                  <span className="text-lg text-amber-accent/50 font-serif">{leader.name.replace(/(Mr\.|Upa|Ph|Ch)\s*/g, '').charAt(0)}</span>
                                </div>
                              )}
                              <div className="flex flex-col">
                                <span className="text-sm font-medium text-bone-50">{leader.name}</span>
                                <span className="text-xs text-amber-accent/80 mt-0.5">{leader.role}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {tab.id === 'gms' && (
                      <div className="space-y-6 text-bone-100/95 text-base leading-relaxed font-light">
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
                                  <div key={dIdx} className="bg-white/5 p-4 rounded-xl text-sm text-bone-100 leading-relaxed border-l-2 border-amber-accent">
                                    {detail.split(' | ').map((part, pIdx) => <p key={pIdx} className={pIdx > 0 ? "mt-1" : ""}>{part}</p>)}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    {tab.id === 'gallery' && (
                      <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 gap-4 mt-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 w-full text-left cursor-pointer hover:border-amber-accent transition-colors group focus:outline-none">
                                <img loading="lazy" src="/assets/houbong_lamkai.webp" alt="Houbung lamkai" className="w-full h-auto rounded-xl shadow-lg object-cover group-hover:opacity-90 transition-opacity" />
                                <p className="mt-2 text-center text-bone-200/60 text-[10px] italic px-2">2025-2026 kum sunga Houngbung lamkai holeh Upa Ngapdet ho</p>
                              </button>
                            </DialogTrigger>
                            <DialogContent className="bg-transparent border-none shadow-none max-w-5xl w-full h-full flex justify-center items-center p-2 pt-12">
                              <img src="/assets/houbong_lamkai.webp" alt="Houbung lamkai" className="max-w-full max-h-[90vh] object-contain rounded-xl" />
                            </DialogContent>
                          </Dialog>
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 w-full text-left cursor-pointer hover:border-amber-accent transition-colors group focus:outline-none">
                                <img loading="lazy" src="/assets/houbong_1.jpeg" alt="Event Image" className="w-full h-auto rounded-xl shadow-lg object-cover group-hover:opacity-90 transition-opacity" />
                                <p className="mt-2 text-center text-bone-200/60 text-[10px] italic px-2">Recent Events</p>
                              </button>
                            </DialogTrigger>
                            <DialogContent className="bg-transparent border-none shadow-none max-w-5xl w-full h-full flex justify-center items-center p-2 pt-12">
                              <img src="/assets/houbong_1.jpeg" alt="Event Image" className="max-w-full max-h-[90vh] object-contain rounded-xl" />
                            </DialogContent>
                          </Dialog>
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
        <div className="hidden md:flex w-full md:w-2/3 h-[75vh] relative glass-dark rounded-[32px] border border-white/10 shadow-2xl flex-col overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forest-900/90 to-transparent pointer-events-none z-10" />
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12 pb-24 relative z-0">
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
                <div className="space-y-6 text-bone-100/95 text-base md:text-lg leading-relaxed font-light max-w-prose">
                  {content?.history?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'leaders' && (
              <motion.div
                key="leaders"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-8 h-full"
              >
                <div className="glass p-8 rounded-3xl border border-white/10 shadow-lg flex-1">
                  <h3 className="font-sans text-sm tracking-[0.2em] text-amber-accent uppercase font-medium mb-8 border-b border-white/10 pb-4">
                    Church Leaders for the term 2025-2026
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content?.leaders?.map((leader, idx) => (
                      <div key={idx} className="bg-white/5 p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-5 border border-white/5 hover:bg-white/10 transition-colors text-center sm:text-left">
                        {leader.img ? (
                          <img src={leader.img} alt={leader.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full shadow-lg border-2 border-white/10" />
                        ) : (
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-forest-900 rounded-full border-2 border-white/10 flex items-center justify-center shadow-lg">
                            <span className="text-2xl text-amber-accent/50 font-serif">{leader.name.replace(/(Mr\.|Upa|Ph|Ch)\s*/g, '').charAt(0)}</span>
                          </div>
                        )}
                        <div className="flex flex-col flex-1 justify-center h-full">
                          <span className="text-xl font-medium text-bone-50 leading-tight">{leader.name}</span>
                          <span className="text-sm font-semibold text-amber-accent/80 tracking-wide mt-1">{leader.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
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
                <div className="space-y-6 text-bone-100/95 text-base md:text-lg leading-relaxed font-light max-w-prose">
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
              </motion.div>
            )}

            {activeTab === 'gallery' && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 w-full">
                    <ImageModal 
                      src="/assets/houbong_lamkai.webp" 
                      alt="Houbung lamkai" 
                      className="w-full h-auto rounded-xl shadow-lg object-cover"
                    />
                    <p className="mt-3 text-center text-bone-200/60 text-xs italic px-2">
                      2025-2026 kum sunga Houngbung lamkai holeh Upa Ngapdet ho
                    </p>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 w-full">
                    <ImageModal 
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
      </div>
    </section>
  );
}
