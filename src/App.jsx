import React from 'react';
import Navbar from './folds/Navbar';
import Hero from './folds/Hero';
import Sermons from './folds/Sermons';
import Project from './folds/Project';
import Gallery from './folds/Gallery';
import Footer from './folds/Footer';
import data from './data.json';

// Dynamically import all optimized gallery images
const galleryModules = import.meta.glob('/public/assets/gallery/*.{webp,jpeg,jpg,png}', { eager: true });
const galleryImages = Object.keys(galleryModules).map((key, index) => {
  return { 
    id: index + 1, 
    img: galleryModules[key].default,
    height: 400 + Math.random() * 400 // random height for masonry effect
  };
});

function App() {
  const { docx_content } = data;
  
  const renderCards = [
    { title: "Front View", desc: "Main entrance and facade", img: galleryModules['/public/assets/gallery/PHOTO-2026-07-28-15-49-42.jpg.webp']?.default },
    { title: "Axiometric View", desc: "Overall structural perspective", img: galleryModules['/public/assets/gallery/PHOTO-2026-07-28-15-49-44.jpg.webp']?.default },
    { title: "Sectional & Interior View", desc: "Inner sanctum layout", img: galleryModules['/public/assets/gallery/PHOTO-2026-07-28-15-49-45.jpg.webp']?.default },
    { title: "Environment Rendering", desc: "Integration with surroundings", img: galleryModules['/public/assets/gallery/PHOTO-2026-07-28-15-47-14.jpg.webp']?.default }
  ];

  return (
    <div className="h-[100dvh] w-full snap-y snap-mandatory overflow-y-scroll overflow-x-hidden bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-emerald-600 selection:text-white">
      <Navbar />
      <Hero />
      <Sermons docx_content={docx_content} />
      <Project renderCards={renderCards} />
      <Gallery galleryImages={galleryImages.slice(0, 15)} />
      <Footer />
    </div>
  );
}

export default App;
