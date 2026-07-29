import React from 'react';

export default function Foundation({ content }) {
  return (
    <section id="foundation" className="min-h-[100dvh] w-full flex items-center justify-center bg-forest-900 text-bone-50 relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* History Text */}
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold tracking-wider text-amber-accent uppercase mb-6">
             {content?.badge}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: content?.title }} />
          <div className="space-y-6 text-bone-100 text-base md:text-lg leading-relaxed border-l-2 border-amber-accent/50 pl-6 md:pl-8">
            <p className="italic font-serif text-lg md:text-xl text-bone-50 opacity-90">
              {content?.paragraphs[0]}
            </p>
            <p className="text-sm md:text-base opacity-80 uppercase tracking-widest font-sans pt-2">
              {content?.paragraphs[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
