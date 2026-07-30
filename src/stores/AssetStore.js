// This module abstracts Vite's asset globbing away from the application logic.
// It provides a clean interface to fetch project renders and gallery images.

const galleryModules = import.meta.glob('/public/assets/gallery/*.{webp,jpeg,jpg,png}', { eager: true });

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
  const fundDriveRenders = Array.from({ length: 15 }, (_, i) => ({
    title: "Fund Drive",
    desc: "Church Building Fund Drive",
    img: `/assets/fund_drive_${i + 1}.jpeg`
  }));

  return [
    { title: "Front View", desc: "Main entrance and facade", img: galleryModules['/public/assets/gallery/InShot_20250701_000923921.jpg.webp']?.default },
    { title: "Axiometric View", desc: "Overall structural perspective", img: galleryModules['/public/assets/gallery/InShot_20250630_231103059.jpg.webp']?.default },
    { title: "Sectional & Interior View", desc: "Inner sanctum layout", img: galleryModules['/public/assets/gallery/InShot_20250701_191653072.jpg.webp']?.default },
    { title: "Environment Rendering", desc: "Integration with surroundings", img: galleryModules['/public/assets/gallery/InShot_20250701_001016010.jpg.webp']?.default },
    ...fundDriveRenders
  ];
}
