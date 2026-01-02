// This script rotates all JPG images in the media-1 folder 90 degrees anticlockwise using sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'public', 'media-1');

fs.readdir(folder, (err, files) => {
  if (err) throw err;
  files.filter(f => f.toLowerCase().endsWith('.jpg')).forEach(file => {
    const filePath = path.join(folder, file);
    sharp(filePath)
      .rotate(-90)
      .toBuffer()
      .then(data => {
        fs.writeFileSync(filePath, data);
        console.log(`Rotated: ${file}`);
      })
      .catch(e => console.error(`Error processing ${file}:`, e));
  });
});
