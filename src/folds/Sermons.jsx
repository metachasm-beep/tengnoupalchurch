import React from 'react';
import { Calendar } from '@phosphor-icons/react';

export default function Sermons({ docx_content }) {
  return (
    <section id="sermons" className="h-[100dvh] snap-start w-full flex items-center bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900 dark:text-zinc-50">Latest Message</h2>
            <div className="flex flex-col gap-4 text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <Calendar weight="bold" /> Haggai 1:1-15 & Ezra 1-4
              </div>
              <h3 className="text-2xl font-medium text-zinc-900 dark:text-zinc-50 leading-snug">
                Pathen intheng gelkhoh masat pendia kouna awgin
              </h3>
              <p className="leading-relaxed border-l-2 border-emerald-500 pl-4 italic">
                "Vo kamite idia nangho in phatah tah a chenga, kei Houin asesa kijam ham?"
              </p>
            </div>
          </div>
          
          <div className="md:col-span-7 relative">
            <div className="glass-dark p-8 md:p-12 rounded-[2rem] h-[600px] overflow-y-auto custom-scrollbar shadow-xl bg-zinc-50/50 dark:bg-zinc-900/50">
              <div className="max-w-prose space-y-6">
                {docx_content?.split('\n\n').filter(Boolean).map((para, i) => (
                  <p key={i} className="leading-relaxed text-zinc-700 dark:text-zinc-300 text-lg">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
