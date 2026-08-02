// This module abstracts Vite's asset globbing away from the application logic.
// It provides a clean interface to fetch project renders and gallery images.

const galleryModules = import.meta.glob('/public/assets/gallery/*.{webp,jpeg,jpg,png}', { eager: true });
const constructionModules = import.meta.glob('/public/assets/construction/*.{webp,jpeg,jpg,png}', { eager: true });
const kckModules = import.meta.glob('/public/assets/kck/*.{webp,jpeg,jpg,png}', { eager: true });
const videoModules = import.meta.glob('/public/assets/videos/*.{mp4,mov,avi}', { eager: true });
const renderModules = import.meta.glob('/public/assets/renders/*.{webp,jpeg,jpg,png}', { eager: true });

export function getKCKImages() {
  return Object.keys(kckModules).map((key, index) => ({
    id: index + 1,
    img: kckModules[key].default
  }));
}

export function getProjectVideos() {
  return Object.keys(videoModules).map((key, index) => ({
    id: index + 1,
    url: videoModules[key].default,
    title: key.split('/').pop().replace(/_/g, ' ').replace(/\.(mp4|mov|avi)$/i, '')
  }));
}

export function getConstructionImages() {
  const fundDriveImages = Array.from({ length: 15 }, (_, i) => ({
    id: `fund-${i + 1}`,
    img: `/assets/fund_drive_${i + 1}.jpeg`,
    height: 300 + Math.random() * 300
  }));

  const construction = Object.keys(constructionModules)
    .map((key, index) => ({
      id: index + 1,
      img: constructionModules[key].default,
      height: 300 + Math.random() * 300
    }));

  return [...construction, ...fundDriveImages];
}

export function getGalleryImages(limit = 15) {
  return Object.keys(galleryModules)
    .filter(key => !key.includes('InShot')) // Only use non-InShot photos for Gallery
    .map((key, index) => ({
      id: index + 1,
      img: galleryModules[key].default,
      height: 400 + Math.random() * 400 // random height for masonry effect
    }))
    .slice(0, limit);
}

export function getProjectRenders() {
  const allRenders = Object.keys(renderModules)
    .filter(key => key.endsWith('.webp') || key.endsWith('.jpeg') || key.endsWith('.jpg') || key.endsWith('.png'))
    .map(key => {
      // Extract filename without extension
      let filename = key.split('/').pop().replace(/\.(webp|jpeg|jpg|png)$/i, '');
      let title = filename;
      let desc = "Church Building Project";
      let desktopPanClass = "scale-[0.8] !object-contain";
      
      return {
        title,
        desc,
        img: renderModules[key].default,
        desktopPanClass
      };
    });

  // Sort alphabetically by title
  allRenders.sort((a, b) => a.title.localeCompare(b.title));

  return allRenders;
}
