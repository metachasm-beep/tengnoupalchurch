import React, { useState } from 'react';
import { Calendar, BookOpenText } from '@phosphor-icons/react';
import Modal from '../components/Modal';

export default function Sermons({ docx_content }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="sermons" className="relative min-h-[100dvh] w-full flex items-center bg-forest-900 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed pointer-events-none"
        style={{ backgroundImage: `url('/assets/bg_sermons.webp')` }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-24 md:mt-0 py-12 md:py-0">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
            <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-bone-50">Latest Message</h2>
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
              <button 
                onClick={() => setIsModalOpen(true)}
                className="md:hidden flex items-center justify-center gap-2 mt-4 bg-amber-accent text-forest-900 px-6 py-3 rounded-full font-bold w-full"
              >
                <BookOpenText weight="bold" size={20} /> Read Full Message
              </button>
            </div>
          </div>
          
          {/* Desktop Text Container (Hidden on mobile) */}
          <div className="hidden md:block md:col-span-7 relative">
            <div className="glass-dark p-6 md:p-12 rounded-[2rem] h-[600px] overflow-y-auto custom-scrollbar shadow-2xl bg-forest-900/50">
              <div className="max-w-prose space-y-6">
                {docx_content?.split('\n\n').filter(Boolean).map((para, i) => (
                  <p key={i} className="leading-relaxed text-bone-100 text-lg font-light tracking-wide">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Pathen intheng gelkhoh masat pendia kouna awgin"
      >
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-800 text-amber-accent text-xs font-medium border border-white/5 mb-2">
            <Calendar weight="bold" /> Haggai 1:1-15 & Ezra 1-4
          </div>
          {docx_content?.split('\n\n').filter(Boolean).map((para, i) => (
            <p key={i} className="leading-relaxed text-bone-100 text-sm font-light tracking-wide">{para}</p>
          ))}
        </div>
      </Modal>
    </section>
  );
}
