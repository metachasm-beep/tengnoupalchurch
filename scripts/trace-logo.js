import potrace from 'potrace';
import fs from 'fs';

const input = 'F:/Gigin/Logo.png';
const output = 'F:/Gigin/kuki-christian-church/public/assets/logo.svg';

potrace.trace(input, function(err, svg) {
  if (err) throw err;
  fs.writeFileSync(output, svg);
  console.log('Successfully traced logo to SVG!');
});
