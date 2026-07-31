import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const KCN_RAW_DIR = 'F:/Gigin/Raw/KCN';
const CONSTRUCTION_RAW_DIR = 'F:/Gigin/Raw/Building Project/Construction';
const ASSETS_DIR = 'F:/Gigin/kuki-christian-church/public/assets';
const CONSTRUCTION_ASSETS_DIR = path.join(ASSETS_DIR, 'construction');

async function processImages() {
  if (!fs.existsSync(CONSTRUCTION_ASSETS_DIR)) {
    fs.mkdirSync(CONSTRUCTION_ASSETS_DIR, { recursive: true });
  }

  // 1. Process KCN images
  const kcnFiles = ['1.jpeg', '2.jpeg'];
  for (let i = 0; i < kcnFiles.length; i++) {
    const file = kcnFiles[i];
    const src = path.join(KCN_RAW_DIR, file);
    if (fs.existsSync(src)) {
      const dest = path.join(ASSETS_DIR, `kcn_${i+1}.webp`);
      await sharp(src).webp({ quality: 80 }).toFile(dest);
      console.log(`Converted ${src} to ${dest}`);
    }
  }

  // 2. Process Construction images
  if (fs.existsSync(CONSTRUCTION_RAW_DIR)) {
    const files = fs.readdirSync(CONSTRUCTION_RAW_DIR);
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const src = path.join(CONSTRUCTION_RAW_DIR, file);
        // Clean up the filename: remove extension, replace spaces with underscores
        const baseName = path.parse(file).name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
        const dest = path.join(CONSTRUCTION_ASSETS_DIR, `${baseName}.webp`);
        await sharp(src).webp({ quality: 80 }).toFile(dest);
        console.log(`Converted ${src} to ${dest}`);
      }
    }
  }
}

processImages().catch(console.error);
