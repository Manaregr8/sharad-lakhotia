#!/usr/bin/env node
// This script generates placeholder PNG files for icons
// Run with: node scripts/generate-icons.js

const fs = require('fs');
const path = require('path');

// Minimal 1x1 transparent PNG (base64 encoded)
const minimalPng = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==', 'base64');

const iconSizes = ['16', '32', '192', '512'];
const publicDir = path.join(__dirname, '..', 'public');

iconSizes.forEach(size => {
  const filename = `icon-${size}.png`;
  const filepath = path.join(publicDir, filename);
  fs.writeFileSync(filepath, minimalPng);
  console.log(`✓ Created ${filename}`);
});

// Apple icon
fs.writeFileSync(path.join(publicDir, 'apple-icon.png'), minimalPng);
console.log('✓ Created apple-icon.png');

console.log('\nPlaceholder icons created. Replace with actual design assets later.');
