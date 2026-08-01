import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dataPath = 'F:\\Gigin\\kuki-christian-church\\src\\data.json';
let data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

async function processCE() {
  const ceRaw = 'F:\\Gigin\\Raw\\CE';
  const ceStaffRaw = 'F:\\Gigin\\Raw\\CE\\Teaching Staff';
  const outDirCE = 'F:\\Gigin\\kuki-christian-church\\public\\assets\\ce';
  
  if (!fs.existsSync(outDirCE)) fs.mkdirSync(outDirCE, { recursive: true });
  
  // General photos
  const generalPhotos = ['1.jpeg', '2.jpeg'];
  data.ce.images = [];
  for (const file of generalPhotos) {
    if (fs.existsSync(path.join(ceRaw, file))) {
      const outName = `${path.parse(file).name}.webp`;
      await sharp(path.join(ceRaw, file))
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(outDirCE, outName));
      data.ce.images.push(`/assets/ce/${outName}`);
    }
  }

  // Staff photos
  const staffFiles = fs.readdirSync(ceStaffRaw).filter(f => f.endsWith('.jpeg'));
  
  // Convert existing strings to objects if they are strings
  if (typeof data.ce.staff.superintendent === 'string') {
    data.ce.staff.superintendent = { name: data.ce.staff.superintendent };
  }
  if (typeof data.ce.staff.secretary === 'string') {
    data.ce.staff.secretary = { name: data.ce.staff.secretary };
  }
  data.ce.staff.teachers = data.ce.staff.teachers.map(t => typeof t === 'string' ? { name: t } : t);

  function simplify(str) {
    return str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  }

  for (const file of staffFiles) {
    const baseName = path.parse(file).name;
    const outName = `${baseName}.webp`;
    await sharp(path.join(ceStaffRaw, file))
      .resize({ width: 400, height: 400, fit: 'cover', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outDirCE, outName));
    
    const targetUrl = `/assets/ce/${outName}`;
    const simpleBaseName = simplify(baseName);
    
    // Check Superintendent
    if (simplify(data.ce.staff.superintendent.name).includes(simpleBaseName) || simpleBaseName.includes(simplify(data.ce.staff.superintendent.name))) {
      data.ce.staff.superintendent.img = targetUrl;
    }
    // Check Secretary
    else if (simplify(data.ce.staff.secretary.name).includes(simpleBaseName) || simpleBaseName.includes(simplify(data.ce.staff.secretary.name))) {
      data.ce.staff.secretary.img = targetUrl;
    }
    // Check Teachers
    else {
      const teacher = data.ce.staff.teachers.find(t => simplify(t.name).includes(simpleBaseName) || simpleBaseName.includes(simplify(t.name)));
      if (teacher) {
        teacher.img = targetUrl;
      }
    }
  }
}

function processKCU() {
  const kcuRaw = 'F:\\Gigin\\Raw\\KCU\\2025-2026 KCU Committee.txt';
  const text = fs.readFileSync(kcuRaw, 'utf-8');
  
  // We can just add it as a new property in data.kcu
  data.kcu.committeeText = text;
  
  // Alternatively, parse it nicely
  const lines = text.split('\n').map(l => l.trim()).filter(l => l);
  let committee = { leaders: [], members: [], lhacha: [] };
  
  let currentSection = 'leaders';
  for (const line of lines) {
    if (line.toLowerCase().includes('committee :')) {
      currentSection = 'members';
      continue;
    }
    if (line.toLowerCase().includes('lhacha')) {
      currentSection = 'lhacha';
      continue;
    }
    
    if (currentSection === 'leaders') {
      if (line.includes(',')) {
        const parts = line.split(',');
        committee.leaders.push({ name: parts[0].trim(), role: parts[1].trim() });
      } else if (line.includes('-')) {
        const parts = line.split('-');
        committee.leaders.push({ name: parts[0].trim(), role: parts[1].trim() });
      } else {
        committee.leaders.push({ name: line, role: 'Leader' });
      }
    } else if (currentSection === 'members') {
      committee.members.push({ name: line, role: 'Member' });
    } else if (currentSection === 'lhacha') {
      committee.lhacha.push({ name: line, role: 'Lhacha' });
    }
  }
  data.kcu.committee = committee;
}

async function main() {
  await processCE();
  processKCU();
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log('Processed CE and KCU');
}

main().catch(console.error);
