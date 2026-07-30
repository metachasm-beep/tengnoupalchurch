import React, { useState } from 'react';
import { UsersThree, BookOpenText, Users } from '@phosphor-icons/react';

export default function KCK({ content }) {
  const [activeTab, setActiveTab] = useState('history'); // 'history' | 'leadership'

  return (
    <section id="kck" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col gap-6 md:gap-12 items-start">
        
        {/* Mobile Header & Tabs */}
        <div className="w-full md:hidden flex flex-col gap-4">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-bone-50 text-center">
            {content?.title}
          </h2>
          
          <div className="flex bg-white/5 rounded-full p-1 border border-white/10 w-full mt-2">
            <button 
              onClick={() => setActiveTab('history')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'history' ? 'bg-amber-accent text-forest-900' : 'text-bone-100'}`}
            >
              <BookOpenText weight={activeTab === 'history' ? 'bold' : 'regular'} /> History
            </button>
            <button 
              onClick={() => setActiveTab('leadership')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'leadership' ? 'bg-amber-accent text-forest-900' : 'text-bone-100'}`}
            >
              <Users weight={activeTab === 'leadership' ? 'bold' : 'regular'} /> Leadership
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-start h-full">
          {/* History Text (Desktop always, Mobile conditional) */}
          <div className={`w-full md:w-5/12 flex-col gap-6 order-2 md:order-1 ${activeTab === 'history' ? 'flex' : 'hidden md:flex'}`}>
            <h2 className="hidden md:block font-serif text-4xl font-medium tracking-tight text-bone-50">
              {content?.title}
            </h2>
            <div className="space-y-4 md:space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {content?.history?.map((para, i) => (
                <p key={i} className="text-bone-100/90 text-sm leading-relaxed font-light bg-white/5 md:bg-transparent p-4 md:p-0 rounded-xl border border-white/5 md:border-transparent">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Members and Image (Desktop always, Mobile conditional) */}
          <div className={`w-full md:w-7/12 flex-col gap-6 order-1 md:order-2 h-full ${activeTab === 'leadership' ? 'flex' : 'hidden md:flex'}`}>
            <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5 hidden md:block">
              <img 
                src="/assets/kck_image.webp" 
                alt="Kuki Christian Khangthah" 
                className="w-full h-auto max-h-[250px] rounded-xl shadow-lg object-cover"
              />
            </div>

            <div className="glass p-5 md:p-6 rounded-2xl border border-white/5 flex-1 overflow-y-auto max-h-[60vh] md:max-h-[40vh] custom-scrollbar">
              <h3 className="font-sans text-xs tracking-[0.2em] text-amber-accent uppercase font-medium mb-4 text-center">2025-2026 kum sunga Lamkai ho</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Lamkai</h4>
                  <ul className="space-y-2">
                    {content?.lamkai?.map((m, i) => (
                      <li key={i} className="flex flex-col bg-white/5 p-2 rounded-lg">
                        <span className="text-sm font-medium">{m.name}</span>
                        <span className="text-[10px] text-amber-accent/80">{m.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Lhacha</h4>
                  <ul className="space-y-2">
                    {content?.lhacha?.map((m, i) => (
                      <li key={i} className="flex flex-col bg-white/5 p-2 rounded-lg">
                        <span className="text-sm font-medium">{m.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sm:col-span-2">
                  <h4 className="text-[10px] uppercase tracking-wider text-bone-200/50 mb-2 border-b border-white/10 pb-1">Committee</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {content?.committee?.map((m, i) => (
                      <li key={i} className="flex items-center gap-2 p-1.5 hover:bg-white/5 rounded-lg transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-accent/50" />
                        <span className="text-xs md:text-sm">{m.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
