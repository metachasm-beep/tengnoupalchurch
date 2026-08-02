import React from 'react';
import { Calendar, BookOpenText } from '@phosphor-icons/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PaginatedReader from '../components/PaginatedReader';

export default function Sermons({ docx_content }) {
  return (
    <section id="sermons" className="relative min-h-[100dvh] w-full flex items-center bg-forest-900 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed pointer-events-none"
        style={{ backgroundImage: `url('/assets/bg_sermons.webp')` }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-24 md:mt-0 py-12 md:py-0">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-widest uppercase text-bone-50">Latest Message</h2>
            <div className="flex flex-col gap-4 md:gap-5 text-bone-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 text-amber-accent text-xs md:text-sm font-medium self-start shadow-sm border border-white/5">
                <Calendar weight="bold" /> Haggai 1:1-15 & Ezra 1-4
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-bone-50 leading-snug">
                Pathen intheng gelkhoh masat pendia kouna awgin
              </h3>
              <p className="leading-relaxed border-l-2 border-amber-accent pl-4 md:pl-5 italic text-sm md:text-lg opacity-90">
                "Vo kamite idia nangho in phatah tah a chenga, kei Houin asesa kijam ham?"
              </p>
              
              <div className="mt-2 md:mt-4 relative rounded-2xl overflow-hidden glass p-2 border border-white/5 max-w-[200px] md:max-w-xs self-start">
                <img 
                  src="/assets/pastor.webp" 
                  alt="Message Speaker" 
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />
              </div>

              {/* Mobile Read Message Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="md:hidden flex items-center justify-center gap-2 mt-4 bg-amber-accent text-forest-900 px-6 py-3 rounded-full font-bold w-full">
                    <BookOpenText weight="bold" size={20} /> Read Full Message
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-forest-900 border-white/10 text-bone-50 w-[90vw] rounded-2xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-left text-2xl font-serif">Pathen intheng gelkhoh masat pendia kouna awgin</DialogTitle>
                  </DialogHeader>
                  <div className="h-[70vh] flex flex-col mt-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-800 text-amber-accent text-xs font-medium border border-white/5 mb-4 w-fit shrink-0">
                      <Calendar weight="bold" /> Haggai 1:1-15 & Ezra 1-4
                    </div>
                    <div className="flex-1 relative overflow-hidden -mx-4 md:mx-0">
                      <PaginatedReader text={docx_content} maxChars={600} />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Desktop Text Container (Hidden on mobile) */}
          <div className="hidden md:block md:col-span-7 relative h-[600px]">
            <div className="glass-dark rounded-[2rem] h-full shadow-2xl bg-forest-900/50 overflow-hidden relative">
              <PaginatedReader text={docx_content} maxChars={1000} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
