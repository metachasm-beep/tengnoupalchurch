import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function processLogo() {
  const inputPath = 'F:/Gigin/Logo.png';
  const outputPath = 'F:/Gigin/kuki-christian-church/public/assets/logo.webp';
  const svgPath = 'F:/Gigin/kuki-christian-church/public/assets/logo.svg';

  // We will read the image, replace near-white background with transparent
  try {
    const { data, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
      
    // Iterate over pixels to remove white background
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // If it's near white
      if (r > 230 && g > 230 && b > 230) {
        data[i + 3] = 0; // set alpha to 0
      }
    }

    // Save as transparent WebP
    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .webp({ quality: 100, lossless: true })
      .toFile(outputPath);
      
    console.log('Logo processed into transparent WebP');
  } catch (err) {
    console.error('Error processing logo:', err);
  }
}

processLogo();
