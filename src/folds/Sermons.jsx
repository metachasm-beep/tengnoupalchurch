import React from 'react';
import { Calendar } from '@phosphor-icons/react';

export default function Sermons({ docx_content }) {
  return (
    <section id="sermons" className="h-[100dvh] w-full flex items-center bg-forest-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-bone-50">Latest Message</h2>
            <div className="flex flex-col gap-5 text-bone-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 text-amber-accent text-sm font-medium self-start">
                <Calendar weight="bold" /> Haggai 1:1-15 & Ezra 1-4
              </div>
              <h3 className="font-serif text-3xl font-medium text-bone-50 leading-snug">
                Pathen intheng gelkhoh masat pendia kouna awgin
              </h3>
              <p className="leading-relaxed border-l-2 border-amber-accent pl-5 italic text-lg opacity-90">
                "Vo kamite idia nangho in phatah tah a chenga, kei Houin asesa kijam ham?"
              </p>
            </div>
          </div>
          
          <div className="md:col-span-7 relative">
            <div className="glass-dark p-8 md:p-12 rounded-[2rem] h-[600px] overflow-y-auto custom-scrollbar shadow-2xl bg-forest-900/50">
              <div className="max-w-prose space-y-6">
                {docx_content?.split('\n\n').filter(Boolean).map((para, i) => (
                  <p key={i} className="leading-relaxed text-bone-100 text-lg font-light tracking-wide">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
