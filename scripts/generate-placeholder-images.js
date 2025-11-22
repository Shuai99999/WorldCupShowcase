// Script to generate placeholder product images
// Run with: node scripts/generate-placeholder-images.js

const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, '../public/products');

// Create products directory if it doesn't exist
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

// Generate SVG images as placeholders
const images = [
  {
    name: 'jersey1.jpg',
    title: 'Official Jersey - Front',
    color: '#0066CC'
  },
  {
    name: 'jersey2.jpg',
    title: 'Official Jersey - Back',
    color: '#0066CC'
  },
  {
    name: 'ball1.jpg',
    title: 'Official Football - View 1',
    color: '#FFFFFF'
  },
  {
    name: 'ball2.jpg',
    title: 'Official Football - View 2',
    color: '#FFFFFF'
  },
  {
    name: 'keychain1.jpg',
    title: 'World Cup Keychain',
    color: '#FFD700'
  },
  {
    name: 'scarf1.jpg',
    title: 'World Cup Scarf - View 1',
    color: '#FF0000'
  },
  {
    name: 'scarf2.jpg',
    title: 'World Cup Scarf - View 2',
    color: '#0066CC'
  }
];

images.forEach(({ name, title, color }) => {
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color}dd;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#grad1)"/>
  <circle cx="400" cy="200" r="80" fill="white" opacity="0.3"/>
  <text x="400" y="320" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle">2026</text>
  <text x="400" y="360" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle">${title}</text>
  <text x="400" y="420" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" opacity="0.8">World Cup Showcase</text>
</svg>`;

  // Save as SVG (we'll use .svg extension but reference as .jpg in JSON)
  const svgPath = path.join(productsDir, name.replace('.jpg', '.svg'));
  fs.writeFileSync(svgPath, svgContent);
  
  console.log(`Generated: ${name.replace('.jpg', '.svg')}`);
});

console.log('Placeholder images generated successfully!');
console.log('Note: These are SVG files. You can replace them with actual JPG images later.');

