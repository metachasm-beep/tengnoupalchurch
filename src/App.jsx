import React from 'react';
import Navbar from './folds/Navbar';
import Hero from './folds/Hero';
import Sermons from './folds/Sermons';
import Project from './folds/Project';
import Gallery from './folds/Gallery';
import Footer from './folds/Footer';
import FoldWrapper from './components/FoldWrapper';
import data from './data.json';

// Separate InShot (3D renders) from PHOTO (construction gallery)
const galleryModules = import.meta.glob('/public/assets/gallery/*.{webp,jpeg,jpg,png}', { eager: true });
const galleryImages = Object.keys(galleryModules)
  .filter(key => !key.includes('InShot')) // Only use non-InShot photos for Gallery
  .map((key, index) => {
    return { 
      id: index + 1, 
      img: galleryModules[key].default,
      height: 400 + Math.random() * 400 // random height for masonry effect
    };
  });

function App() {
  const { docx_content } = data;
  
  const renderCards = [
    { title: "Front View", desc: "Main entrance and facade", img: galleryModules['/public/assets/gallery/InShot_20250701_000923921.jpg.webp']?.default },
    { title: "Axiometric View", desc: "Overall structural perspective", img: galleryModules['/public/assets/gallery/InShot_20250630_231103059.jpg.webp']?.default },
    { title: "Sectional & Interior View", desc: "Inner sanctum layout", img: galleryModules['/public/assets/gallery/InShot_20250701_191653072.jpg.webp']?.default },
    { title: "Environment Rendering", desc: "Integration with surroundings", img: galleryModules['/public/assets/gallery/InShot_20250701_001016010.jpg.webp']?.default }
  ];

  // We let the body handle the scrolling and snapping (defined in index.css)
  return (
    <div className="w-full bg-zinc-950 font-sans selection:bg-emerald-600 selection:text-white">
      <Navbar />
      <div id="nav-hero"><FoldWrapper><Hero /></FoldWrapper></div>
      <div id="nav-sermons"><FoldWrapper><Sermons docx_content={docx_content} /></FoldWrapper></div>
      <div id="nav-project"><FoldWrapper><Project renderCards={renderCards} /></FoldWrapper></div>
      <div id="nav-gallery"><Gallery galleryImages={galleryImages.slice(0, 15)} /></div>
      <div id="nav-footer"><Footer /></div>
    </div>
  );
}

export default App;
