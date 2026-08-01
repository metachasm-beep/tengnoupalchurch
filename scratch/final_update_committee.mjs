import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const rawDir = 'F:\\Gigin\\Raw\\Building Project\\Church Building Committee';
const outDir = 'F:\\Gigin\\kuki-christian-church\\public\\assets\\timeline\\event_6';
const dataPath = 'F:\\Gigin\\kuki-christian-church\\src\\data.json';

const images = fs.readdirSync(rawDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

let data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

function simplifyString(str) {
  return str.replace(/[^a-zA-Z]/g, '').toLowerCase();
}

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

    const memberNameMatches = {
      'Chairman': 'Mr. Lh. Haokholen Mate',
      'Secretary': 'Mr. Ph. Lunkhogin Mate',
      'Ch Ngamshon Mate': 'Mr. Ch Ngamson Mate',
      'Upa T Seikholet Baite': 'Upa T Thangjang Baite'
    };

    const targetName = memberNameMatches[baseName] || baseName;
    const targetSimple = simplifyString(targetName);
    
    // Find in committee
    let committeeMember = data.project.committee.find(c => simplifyString(c.name).includes(targetSimple) || targetSimple.includes(simplifyString(c.name)));
    
    if (committeeMember) {
      committeeMember.img = `/assets/timeline/event_6/${outName}`;
      console.log(`Updated committee member: ${committeeMember.name}`);
    } else {
      // Find in houbong leaders
      let houbongLeader = data.houbong.leaders.find(l => simplifyString(l.name).includes(targetSimple) || targetSimple.includes(simplifyString(l.name)));
      
      if (houbongLeader) {
        houbongLeader.img = `/assets/timeline/event_6/${outName}`;
        console.log(`Updated houbong leader: ${houbongLeader.name}`);
      } else {
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
