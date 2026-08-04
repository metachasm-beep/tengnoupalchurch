import React from 'react';
import { Calendar, BookOpenText, CaretLeft, CaretRight } from '@phosphor-icons/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PaginatedReader from '../components/PaginatedReader';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

export default function Sermons({ sermons }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="sermons" className="relative min-h-[100dvh] w-full flex items-center bg-forest-900 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed pointer-events-none"
        style={{ backgroundImage: `url('/assets/bg_sermons.webp')` }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20 md:mt-28 py-6 md:py-0 overflow-hidden">
        
        {/* Navigation Controls */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6 md:mb-6 w-full">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-widest uppercase text-bone-50 text-center">Messages</h2>
          {sermons?.length > 1 && (
            <div className="flex items-center gap-4">
              <button 
                onClick={scrollPrev}
                className="p-2.5 rounded-full glass border border-white/10 text-bone-50 hover:bg-white/10 transition-colors"
                aria-label="Previous sermon"
              >
                <CaretLeft weight="bold" size={20} />
              </button>
              <button 
                onClick={scrollNext}
                className="p-2.5 rounded-full glass border border-white/10 text-bone-50 hover:bg-white/10 transition-colors"
                aria-label="Next sermon"
              >
                <CaretRight weight="bold" size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {sermons?.map((sermon, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 pr-4 md:pr-10">
                <div className="grid md:grid-cols-12 gap-8 md:gap-16">
                  
                  {/* Left Side: Sermon Metadata */}
                  <div className="md:col-span-5 flex flex-col gap-3 md:gap-6">
                    <div className="flex flex-col gap-3 md:gap-5 text-bone-100">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 text-amber-accent text-xs md:text-sm font-medium self-start shadow-sm border border-white/5">
                        <Calendar weight="bold" /> {sermon.date}
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl font-medium text-bone-50 leading-snug">
                        {sermon.title}
                      </h3>
                      {sermon.quote && (
                        <p className="leading-relaxed border-l-2 border-amber-accent pl-3 md:pl-5 italic text-xs md:text-lg opacity-90 line-clamp-3 md:line-clamp-none">
                          "{sermon.quote}"
                        </p>
                      )}
                      
                      <div className="mt-1 md:mt-4 relative rounded-2xl overflow-hidden glass p-1.5 border border-white/5 max-w-[120px] md:max-w-xs self-start flex flex-col items-center gap-2">
                        <img 
                          src={sermon.img} 
                          alt={sermon.author} 
                          className="w-full h-auto rounded-xl shadow-lg object-cover"
                        />
                      </div>
                      <p className="text-sm font-medium text-amber-accent/80 ml-2">By {sermon.author}</p>

                      {/* Mobile Read Message Button */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="md:hidden flex items-center justify-center gap-2 mt-2 bg-amber-accent text-forest-900 px-6 py-2.5 rounded-full font-bold w-full text-sm">
                            <BookOpenText weight="bold" size={20} /> Read Full Message
                          </button>
                        </DialogTrigger>
                        <DialogContent className="bg-forest-900 border-white/10 text-bone-50 w-[90vw] rounded-2xl max-h-[85vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-left text-2xl font-serif">{sermon.title}</DialogTitle>
                          </DialogHeader>
                          <div className="h-[70vh] flex flex-col mt-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-800 text-amber-accent text-xs font-medium border border-white/5 mb-4 w-fit shrink-0">
                              <Calendar weight="bold" /> {sermon.date}
                            </div>
                            <div className="flex-1 relative overflow-hidden -mx-4 md:mx-0">
                              <PaginatedReader text={sermon.content} maxChars={600} />
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  
                  {/* Right Side: Desktop Text Container (Hidden on mobile) */}
                  <div className="hidden md:block md:col-span-7 relative h-[65vh] min-h-[450px] max-h-[720px]">
                    <div className="glass-dark rounded-[2rem] h-full shadow-2xl bg-forest-900/50 overflow-hidden relative">
                      <PaginatedReader text={sermon.content} maxChars={1200} />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
