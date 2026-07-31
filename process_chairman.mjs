import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function main() {
  // 1. Process Chairman.jpeg
  const rawChairman = 'F:/Gigin/Raw/Building Project/Church Building Committee/Chairman.jpeg';
  const destChairman = 'F:/Gigin/kuki-christian-church/public/assets/timeline/event_6/Chairman.webp';
  
  if (fs.existsSync(rawChairman)) {
    await sharp(rawChairman)
      .resize(800)
      .webp({ quality: 80 })
      .toFile(destChairman);
    console.log('Processed Chairman.jpeg');
  }

  // 2. Update data.json for Committee
  const dataPath = 'F:/Gigin/kuki-christian-church/src/data.json';
  let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  const committee = data.project.committee;
  const chairman = committee.find(c => c.role === 'Chairman');
  if (chairman) {
    chairman.img = '/assets/timeline/event_6/Chairman.webp';
  }

  // 3. Integrate videos into timeline (General Progress)
  const videoDir = 'F:/Gigin/kuki-christian-church/public/assets/videos';
  const files = fs.readdirSync(videoDir);
  const videoPaths = files.filter(f => f.match(/\.(mp4|mov|avi)$/i)).map(f => `/assets/videos/${f}`);
  
  const timeline = data.project.timeline;
  let generalEvent = timeline.find(t => t.date === 'General Progress');
  if (!generalEvent) {
    generalEvent = {
      date: 'General Progress',
      caption: 'General Construction Progress',
      images: [],
      videos: []
    };
    timeline.push(generalEvent);
  }
  
  if (!generalEvent.videos) {
    generalEvent.videos = [];
  }
  
  // Add videos if not already there
  for (const vid of videoPaths) {
    if (!generalEvent.videos.includes(vid)) {
      generalEvent.videos.push(vid);
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log('Updated data.json');
}

main().catch(console.error);
