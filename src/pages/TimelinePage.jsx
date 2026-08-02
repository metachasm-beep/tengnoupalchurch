import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft } from 'lucide-react';
import ImageModal from '../components/ImageModal';
import data from '../data.json';

export default function TimelinePage() {
  const timeline = data.project?.timeline || [];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const years = useMemo(() => {
    if (!timeline) return [];
    const yearSet = new Set();
    timeline.forEach(t => {
      if (t.date === 'General Progress' || t.date === 'Notice' || t.date.includes('General') || t.date.includes('Notice')) {
         yearSet.add('General');
         t.year = 'General';
      } else {
         const match = t.date.match(/\d{4}/);
         if (match) {
           yearSet.add(match[0]);
           t.year = match[0];
         } else {
           yearSet.add('General');
           t.year = 'General';
         }
      }
    });
    return Array.from(yearSet).sort((a, b) => a === 'General' ? 1 : b === 'General' ? -1 : a - b);
  }, [timeline]);

  const [activeYear, setActiveYear] = useState(years[0] || 'General');

  const events = useMemo(() => {
    return (timeline || []).filter(t => t.year === activeYear);
  }, [timeline, activeYear]);

  return (
    <div className="min-h-screen bg-forest-900 text-bone-50 p-4 sm:p-6 md:p-12 selection:bg-amber-accent selection:text-forest-900 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-amber-accent mb-2">Construction Timeline</h1>
            <p className="text-bone-200/70">Tracking the progress of the New Church Building Project</p>
          </div>
          <Link to="/#nav-project" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-bone-50 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full font-bold transition-colors w-fit border border-white/10">
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" /> Back to Project
          </Link>
        </div>

        {/* Year Tabs */}
        <div className="flex gap-2 sm:gap-4 border-b border-white/10 pb-3 sm:pb-4 mb-6 sm:mb-8 overflow-x-auto shrink-0 scrollbar-hide">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-5 py-2 sm:px-8 sm:py-3 rounded-full font-serif transition-colors whitespace-nowrap text-base sm:text-lg ${
                activeYear === year 
                  ? 'bg-amber-accent text-forest-900 font-bold shadow-[0_0_20px_rgba(255,183,77,0.3)]' 
                  : 'bg-white/5 text-bone-200 hover:bg-white/10 border border-white/5'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Events Carousel */}
        <div className="flex-1 min-h-[500px]">
          {events.length > 0 ? (
            <Carousel opts={{ align: "start", loop: false }} className="w-full h-full">
              <CarouselContent className="-ml-6 h-full">
                {events.map((event, idx) => (
                  <CarouselItem key={idx} className="pl-6 md:basis-1/2 lg:basis-1/3 h-full">
                    <div className="flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-amber-accent/50 group-hover:bg-amber-accent transition-colors"></div>
                      
                      <span className="text-amber-accent font-bold tracking-widest uppercase text-sm mb-3 block">{event.date}</span>
                      <h3 className="font-serif text-2xl font-medium text-bone-50 mb-6 flex-1 leading-snug">{event.caption}</h3>
                      
                      {/* Event Images / Videos Carousel */}
                      {(event.images?.length > 0 || event.videos?.length > 0) && (
                        <div className="w-full mt-auto glass p-3 rounded-2xl border border-white/5 shadow-xl bg-black/40">
                          <Carousel opts={{ align: "start", loop: true }} className="w-full">
                            <CarouselContent className="-ml-3">
                              {event.videos?.map((vid, vIdx) => (
                                <CarouselItem key={`v-${vIdx}`} className="pl-3 basis-full">
                                  <video src={vid} controls className="w-full h-64 object-cover rounded-xl border border-white/5 bg-black" />
                                </CarouselItem>
                              ))}
                              {event.images?.map((img, iIdx) => (
                                <CarouselItem key={iIdx} className="pl-3 basis-full">
                                  <ImageModal 
                                    src={img} 
                                    alt={event.caption} 
                                    caption={event.caption}
                                    className="w-full h-64 object-cover rounded-xl border border-white/5" 
                                  />
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            {(event.images?.length + (event.videos?.length || 0)) > 1 && (
                              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 sm:px-3 pointer-events-none">
                                <CarouselPrevious className="relative static translate-x-0 translate-y-0 h-8 w-8 sm:h-10 sm:w-10 bg-forest-900/80 border-none pointer-events-auto hover:bg-amber-accent hover:text-forest-900 text-bone-50" />
                                <CarouselNext className="relative static translate-x-0 translate-y-0 h-8 w-8 sm:h-10 sm:w-10 bg-forest-900/80 border-none pointer-events-auto hover:bg-amber-accent hover:text-forest-900 text-bone-50" />
                              </div>
                            )}
                          </Carousel>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {events.length > 3 && (
                <div className="flex justify-center gap-6 mt-12">
                  <CarouselPrevious className="relative static translate-x-0 translate-y-0 bg-white/5 border-white/10 hover:bg-amber-accent hover:text-forest-900 h-12 w-12" />
                  <CarouselNext className="relative static translate-x-0 translate-y-0 bg-white/5 border-white/10 hover:bg-amber-accent hover:text-forest-900 h-12 w-12" />
                </div>
              )}
            </Carousel>
          ) : (
            <div className="flex items-center justify-center h-full text-bone-200/50 font-serif text-2xl">
              No events found for {activeYear}.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
