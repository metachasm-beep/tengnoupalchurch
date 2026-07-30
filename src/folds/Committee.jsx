import React, { useState } from 'react';
import { User, UsersThree } from '@phosphor-icons/react';
import Modal from '../components/Modal';

export default function Committee({ content }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="committee" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col gap-6 md:gap-20">
        
        <div className="mt-8 md:mt-0">
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-bone-50 mb-6 md:mb-12 text-center md:text-left font-medium">
            {content?.title}
          </h2>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
            {content?.members?.map((member, i) => (
              <div key={i} className="glass p-2.5 px-4 md:p-5 rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4 hover:bg-white/10 transition-all border border-white/5 hover:border-amber-accent/30 group">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0 text-amber-accent group-hover:scale-110 transition-transform">
                  <User weight="fill" className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-medium text-bone-50 text-[13px] md:text-base leading-tight">{member.name}</h4>
                  <p className="text-amber-accent/80 text-[10px] md:text-sm font-medium mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex flex-col gap-3">
            {content?.members?.slice(0, 2).map((member, i) => (
              <div key={i} className="glass p-4 rounded-xl flex items-center gap-4 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0 text-amber-accent">
                  <User weight="fill" className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-medium text-bone-50 text-sm leading-tight">{member.name}</h4>
                  <p className="text-amber-accent/80 text-xs font-medium mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 mt-4 bg-amber-accent text-forest-900 px-6 py-3 rounded-full font-bold w-full"
            >
              <UsersThree weight="bold" size={20} /> View Full Committee
            </button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={content?.title}
      >
        <div className="flex flex-col gap-3">
          {content?.members?.map((member, i) => (
            <div key={i} className="bg-white/5 p-4 rounded-xl flex items-center gap-4 border border-white/5">
              <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center flex-shrink-0 text-amber-accent">
                <User weight="fill" className="w-5 h-5" />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-medium text-bone-50 text-sm leading-tight">{member.name}</h4>
                <p className="text-amber-accent/80 text-xs font-medium mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
}
