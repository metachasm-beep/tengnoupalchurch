import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const rawDir = 'F:\\Gigin\\Raw\\Building Project\\Church Building Committee';
const outDir = 'F:\\Gigin\\kuki-christian-church\\public\\assets\\timeline\\event_6';
const dataPath = 'F:\\Gigin\\kuki-christian-church\\src\\data.json';

const images = fs.readdirSync(rawDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

let data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

async function processImages() {
  for (const file of images) {
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const outName = `${baseName}.webp`;
    const outPath = path.join(outDir, outName);
    const inPath = path.join(rawDir, file);

    console.log(`Processing ${file}...`);
    await sharp(inPath)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath);

    // Try to find the member in project.committee
    const memberNameMatches = {
      'Chairman': 'Mr. Lh. Haokholen Mate',
      'Secretary': 'Mr. Ph. Lunkhogin Mate',
      'Ch Ngamshon Mate': 'Mr. Ch Ngamson Mate',
      'Upa T Seikholet Baite': 'Upa T Thangjang Baite'
    };

    const targetName = memberNameMatches[baseName] || baseName;
    
    // Check if they are in project.committee
    let committeeMember = data.project.committee.find(c => c.name.includes(targetName) || targetName.includes(c.name));
    
    if (committeeMember) {
      committeeMember.img = `/assets/timeline/event_6/${outName}`;
      console.log(`Updated committee member: ${committeeMember.name}`);
    } else {
      // Check if they are in houbong leaders
      let houbongLeader = data.houbong.leaders.find(l => l.name.includes(targetName) || targetName.includes(l.name));
      
      if (houbongLeader) {
        houbongLeader.img = `/assets/timeline/event_6/${outName}`;
        console.log(`Updated houbong leader: ${houbongLeader.name}`);
      } else {
        // If not found in either, they are a new committee member
        // (Assuming "Mr. Ch Jamkhomang Mate" is a new committee member)
        console.log(`Adding NEW committee member: ${targetName}`);
        data.project.committee.push({
          name: targetName,
          role: 'Member',
          img: `/assets/timeline/event_6/${outName}`
        });
      }
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log('Done!');
}

processImages().catch(console.error);
