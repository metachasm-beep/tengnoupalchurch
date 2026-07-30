import React from 'react';
import { Calendar, UserCircle } from '@phosphor-icons/react';

export default function KCU({ content }) {
  return (
    <section id="kcu" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 w-full flex flex-col gap-8 md:gap-12 text-center items-center">
        
        <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-bone-50">
          {content?.title}
        </h2>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto custom-scrollbar px-2 pb-8">
          
          {content?.events?.map((ev, i) => (
            <div key={i} className="glass p-6 rounded-2xl border border-white/5 flex flex-col text-left hover:bg-white/5 transition-all">
              <h3 className="text-amber-accent font-semibold text-lg md:text-xl mb-4 border-b border-white/10 pb-2">{ev.title}</h3>
              
              {ev.date && (
                <div className="flex items-center gap-2 text-bone-100 text-sm mb-2">
                  <Calendar size={18} className="text-amber-accent/70" />
                  <span>{ev.date}</span>
                </div>
              )}
              
              {ev.officiator && (
                <div className="flex items-center gap-2 text-bone-100 text-sm mb-2">
                  <UserCircle size={18} className="text-amber-accent/70" />
                  <span>Officiator: {ev.officiator}</span>
                </div>
              )}

              {ev.theme && (
                <p className="text-sm text-bone-200 mt-2"><span className="text-bone-200/50 uppercase text-[10px] tracking-wider block mb-1">Theme</span> {ev.theme}</p>
              )}

              {ev.speakers && (
                <div className="mt-4">
                  <span className="text-bone-200/50 uppercase text-[10px] tracking-wider block mb-1">Speakers</span>
                  <ul className="text-sm text-bone-100 flex flex-col gap-1">
                    {ev.speakers.map((s, idx) => <li key={idx}>• {s}</li>)}
                  </ul>
                </div>
              )}

              {ev.director && (
                <p className="text-sm text-bone-100 mt-4 italic text-amber-accent/80">{ev.director}</p>
              )}

              {ev.details && (
                <div className="mt-4 flex flex-col gap-4">
                  {ev.details.map((d, idx) => (
                    <div key={idx} className="bg-forest-900/40 p-3 rounded-lg border border-white/5">
                      {d.split(' | ').map((line, lIdx) => (
                        <p key={lIdx} className="text-xs text-bone-100 mb-1 last:mb-0">
                          <span className="text-bone-200/50 uppercase mr-1">{line.split(':')[0]}:</span>
                          <span>{line.split(':')[1]}</span>
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
