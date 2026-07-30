import React from 'react';

export default function Houbong({ content }) {
  return (
    <section id="houbong" className="min-h-[100dvh] w-full flex items-center bg-forest-900 text-bone-50 relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-forest-900/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        
        {/* History Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h3 className="font-sans text-xs md:text-sm tracking-[0.2em] text-bone-200 uppercase font-medium">
            {content?.title}
          </h3>
          <div className="space-y-4 md:space-y-6 max-h-[50vh] md:max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {content?.history?.map((para, i) => (
              <p key={i} className="text-bone-100/90 text-sm md:text-base leading-relaxed font-light">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden glass p-2 border border-white/5">
            <img 
              src="/assets/houbong_lamkai.jpeg" 
              alt="2025-2026 kum sunga Houngbung lamkai holeh Upa Ngapdet ho" 
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          <p className="text-center text-bone-200/60 text-xs italic">
            2025-2026 kum sunga Houngbung lamkai holeh Upa Ngapdet ho
          </p>
        </div>

      </div>
    </section>
  );
}
