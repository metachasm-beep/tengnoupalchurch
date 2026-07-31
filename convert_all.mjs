import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const RAW_DIR = 'F:/Gigin/Raw';
const PUBLIC_DIR = 'F:/Gigin/kuki-christian-church/public';
const ASSETS_DIR = path.join(PUBLIC_DIR, 'assets');

const directories = {
  kck: path.join(ASSETS_DIR, 'kck'),
  gallery: path.join(ASSETS_DIR, 'gallery'),
  construction: path.join(ASSETS_DIR, 'construction'),
  videos: path.join(ASSETS_DIR, 'videos'),
};

// Ensure directories exist
Object.values(directories).forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function processAll() {
  // 1. Delete image
  const imgToDelete = path.join(directories.gallery, 'PHOTO-2026-07-28-16-25-41.jpg.webp');
  if (fs.existsSync(imgToDelete)) {
    fs.unlinkSync(imgToDelete);
    console.log(`Deleted ${imgToDelete}`);
  }

  // 2. Hero Background
  const heroRaw = path.join(RAW_DIR, 'Hero bg.jpeg');
  if (fs.existsSync(heroRaw)) {
    await sharp(heroRaw).webp({ quality: 80 }).toFile(path.join(ASSETS_DIR, 'hero_bg.webp'));
    console.log('Converted Hero background');
  }

  // Helper to convert folder of images
  const convertFolder = async (rawFolderPath, destDir, prefix = '') => {
    if (!fs.existsSync(rawFolderPath)) return;
    const files = fs.readdirSync(rawFolderPath);
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const src = path.join(rawFolderPath, file);
        const baseName = path.parse(file).name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
        const dest = path.join(destDir, `${prefix}${baseName}.webp`);
        await sharp(src).webp({ quality: 80 }).toFile(dest);
        console.log(`Converted ${src} to ${dest}`);
      }
    }
  };

  // 3. KCK Images
  await convertFolder(path.join(RAW_DIR, 'KCK'), directories.kck, 'kck_');

  // 4. New folder to Gallery
  await convertFolder(path.join(RAW_DIR, 'New'), directories.gallery, 'new_');

  // 5. Construction / Social Service to Construction
  await convertFolder(path.join(RAW_DIR, 'SOCIAL SERVICE REPORT Men Society KCU + Youth KCK for New Church Building Project'), directories.construction, 'ss_');
  await convertFolder(path.join(RAW_DIR, 'The New Church Building Construction Committee has undertaken the sale of calendars in the surrounding villages for the building fund.'), directories.construction, 'cal_');

  // 6. Videos
  const buildProjDir = path.join(RAW_DIR, 'Building Project');
  if (fs.existsSync(buildProjDir)) {
    const files = fs.readdirSync(buildProjDir);
    for (const file of files) {
      if (file.match(/\.(mp4|mov|avi)$/i)) {
        const src = path.join(buildProjDir, file);
        const baseName = path.parse(file).name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
        const ext = path.parse(file).ext;
        const dest = path.join(directories.videos, `${baseName}${ext}`);
        fs.copyFileSync(src, dest);
        console.log(`Copied video ${src} to ${dest}`);
      }
    }
  }
}

processAll().catch(console.error);
