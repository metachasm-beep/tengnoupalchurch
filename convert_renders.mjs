import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'F:/Gigin/kuki-christian-church/public/assets/renders';

async function convertImages() {
  const files = fs.readdirSync(inputDir);
  let count = 0;

  for (const file of files) {
    if (file.endsWith('.webp')) continue; // skip already converted
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;

    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(inputDir, `${file}.webp`);

    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`Converted ${file} to WebP`);
      
      // Optionally delete the original file to save space
      fs.unlinkSync(inputPath);
      count++;
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }

  console.log(`Successfully converted ${count} images to WebP in ${inputDir}`);
}

convertImages();
