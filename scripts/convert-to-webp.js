import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dirs = [
  path.resolve('./public/assets'),
  path.resolve('./public/assets/gallery')
];

async function convertToWebP(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpeg' || ext === '.jpg' || ext === '.png') {
      const fullPath = path.join(dirPath, file);
      const outputName = path.basename(file, ext) + '.webp';
      const outputPath = path.join(dirPath, outputName);
      
      console.log(`Converting ${file} -> ${outputName}`);
      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      // Delete original
      fs.unlinkSync(fullPath);
      console.log(`Deleted original: ${file}`);
    }
  }
}

async function main() {
  for (const dir of dirs) {
    await convertToWebP(dir);
  }
  console.log('Done converting images.');
}

main().catch(console.error);
