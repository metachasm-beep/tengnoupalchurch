import React from 'react';
import Masonry from '../components/Masonry/Masonry';

export default function Gallery({ galleryImages }) {
  return (
    <section id="gallery" className="w-full flex flex-col justify-center bg-zinc-50 dark:bg-zinc-950 py-32">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl font-semibold tracking-tighter text-zinc-900 dark:text-zinc-50">Community & Construction</h2>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative w-full">
        <Masonry data={galleryImages} items={galleryImages} blurToFocus={false} />
      </div>
    </section>
  );
}
