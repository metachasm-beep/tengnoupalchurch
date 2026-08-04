import React, { useEffect } from 'react';
import Navbar from '../folds/Navbar';
import Hero from '../folds/Hero';
import Sermons from '../folds/Sermons';
import Project from '../folds/Project';
import Foundation from '../folds/Foundation';
import Houbong from '../folds/Houbong';
import CE from '../folds/CE';
import KCK from '../folds/KCK';
import KCN from '../folds/KCN';
import KCU from '../folds/KCU';
import Gallery from '../folds/Gallery';
import Footer from '../folds/Footer';
import FoldWrapper from '../components/FoldWrapper';
import ScrollProvider from '../components/ScrollProvider';
import NavDots, { sections } from '../components/NavDots';
import { getGalleryImages, getProjectRenders } from '../stores/AssetStore';
import data from '../data.json';

function Home() {
  const { docx_content, hero, project, foundation, houbong, ce, kck, kcn, kcu, footer } = data;
  
  const galleryImages = getGalleryImages(50);
  const renderCards = getProjectRenders();
  const sectionIds = sections.map(s => s.id);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // We let the body handle the scrolling and snapping (defined in index.css)
  return (
          <ScrollProvider sectionIds={sectionIds}>
        <div className="w-full bg-forest-900 font-sans selection:bg-amber-accent selection:text-forest-900 text-bone-50">
          <Navbar />
          <NavDots />
          <div id="nav-hero" className="snap-start snap-always"><FoldWrapper><Hero content={hero} visionContent={houbong?.vision} /></FoldWrapper></div>
          <div id="nav-sermons" className="snap-start snap-always"><FoldWrapper><Sermons docx_content={docx_content} /></FoldWrapper></div>
          <div id="nav-project" className="snap-start snap-always"><FoldWrapper><Project content={project} renderCards={renderCards} /></FoldWrapper></div>
          <div id="nav-foundation" className="snap-start snap-always"><FoldWrapper><Foundation content={foundation} /></FoldWrapper></div>
          
          <div id="nav-houbong" className="snap-start snap-always"><FoldWrapper><Houbong content={houbong} /></FoldWrapper></div>
          <div id="nav-ce" className="snap-start snap-always"><FoldWrapper><CE content={ce} /></FoldWrapper></div>
          <div id="nav-kck" className="snap-start snap-always"><FoldWrapper><KCK content={kck} /></FoldWrapper></div>
          <div id="nav-kcn" className="snap-start snap-always"><FoldWrapper><KCN content={kcn} /></FoldWrapper></div>
          <div id="nav-kcu" className="snap-start snap-always"><FoldWrapper><KCU content={kcu} /></FoldWrapper></div>

          <div id="nav-gallery" className="snap-start snap-always"><FoldWrapper><Gallery galleryImages={galleryImages} /></FoldWrapper></div>
          <div id="nav-footer" className="snap-start snap-always"><FoldWrapper><Footer content={footer} /></FoldWrapper></div>
        </div>
              </ScrollProvider>
      );
}

export default Home;
