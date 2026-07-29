import React from 'react';
import Navbar from './folds/Navbar';
import Hero from './folds/Hero';
import Sermons from './folds/Sermons';
import Project from './folds/Project';
import Foundation from './folds/Foundation';
import Committee from './folds/Committee';
import Gallery from './folds/Gallery';
import Footer from './folds/Footer';
import FoldWrapper from './components/FoldWrapper';
import ScrollProvider from './components/ScrollProvider';
import NavDots, { sections } from './components/NavDots';
import { getGalleryImages, getProjectRenders } from './stores/AssetStore';
import data from './data.json';

function App() {
  const { docx_content, hero, project, foundation, committee, footer } = data;
  
  const galleryImages = getGalleryImages(15);
  const renderCards = getProjectRenders();
  const sectionIds = sections.map(s => s.id);

  // We let the body handle the scrolling and snapping (defined in index.css)
  return (
    <ScrollProvider sectionIds={sectionIds}>
      <div className="w-full bg-forest-900 font-sans selection:bg-amber-accent selection:text-forest-900 text-bone-50">
        <Navbar />
        <NavDots />
        <div id="nav-hero" className="snap-start"><FoldWrapper><Hero content={hero} /></FoldWrapper></div>
        <div id="nav-sermons" className="snap-start"><FoldWrapper><Sermons docx_content={docx_content} /></FoldWrapper></div>
        <div id="nav-project" className="snap-start"><FoldWrapper><Project content={project} renderCards={renderCards} /></FoldWrapper></div>
        <div id="nav-foundation" className="snap-start"><FoldWrapper><Foundation content={foundation} /></FoldWrapper></div>
        <div id="nav-committee" className="snap-start"><FoldWrapper><Committee content={committee} /></FoldWrapper></div>
        <div id="nav-gallery" className="snap-start"><FoldWrapper><Gallery galleryImages={galleryImages} /></FoldWrapper></div>
        <div id="nav-footer" className="snap-start"><FoldWrapper><Footer content={footer} /></FoldWrapper></div>
      </div>
    </ScrollProvider>
  );
}

export default App;
