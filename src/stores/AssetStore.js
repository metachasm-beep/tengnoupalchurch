// This module abstracts Vite's asset globbing away from the application logic.
// It provides a clean interface to fetch project renders and gallery images.

const galleryModules = import.meta.glob('/public/assets/gallery/*.{webp,jpeg,jpg,png}', { eager: true });
const constructionModules = import.meta.glob('/public/assets/construction/*.{webp,jpeg,jpg,png}', { eager: true });
const kckModules = import.meta.glob('/public/assets/kck/*.{webp,jpeg,jpg,png}', { eager: true });
const videoModules = import.meta.glob('/public/assets/videos/*.{mp4,mov,avi}', { eager: true });

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
  return [
    { title: "Front View", desc: "Main entrance and facade", img: galleryModules['/public/assets/gallery/InShot_20250701_000923921.jpg.webp']?.default },
    { title: "Axiometric View", desc: "Overall structural perspective", img: galleryModules['/public/assets/gallery/InShot_20250630_231103059.jpg.webp']?.default, desktopPanClass: "md:object-[center_60%]" },
    { title: "Sectional & Interior View", desc: "Inner sanctum layout", img: galleryModules['/public/assets/gallery/InShot_20250701_191653072.jpg.webp']?.default, desktopPanClass: "md:object-[center_60%]" },
    { title: "Environment Rendering", desc: "Integration with surroundings", img: galleryModules['/public/assets/gallery/InShot_20250701_001016010.jpg.webp']?.default }
  ];
}
