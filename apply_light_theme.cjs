const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  // Skip Navbar and Loader as they are already handled manually
  if (file === 'Navbar.jsx' || file === 'Loader.jsx' || file === 'ParticlesBackground.jsx') return;

  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // We add dark: variants and transition classes.
  // First, we need to make sure we don't double replace. We'll use word boundaries.

  // 1. text-white -> text-slate-900 dark:text-white transition-colors duration-500
  content = content.replace(/\btext-white\b(?! transition-colors)/g, 'text-slate-900 dark:text-white transition-colors duration-500');
  
  // 2. text-slate-300 -> text-slate-600 dark:text-slate-300 transition-colors duration-500
  content = content.replace(/\btext-slate-300\b(?! transition-colors)/g, 'text-slate-600 dark:text-slate-300 transition-colors duration-500');

  // 3. text-slate-400 -> text-slate-500 dark:text-slate-400 transition-colors duration-500
  content = content.replace(/\btext-slate-400\b(?! transition-colors)/g, 'text-slate-500 dark:text-slate-400 transition-colors duration-500');

  // 4. border-slate-800/50 -> border-slate-200 dark:border-slate-800/50 transition-colors duration-500
  // Note: .glass already handles borders for cards, but section dividers use border-t
  content = content.replace(/\bborder-slate-800\/50\b(?! transition-colors)/g, 'border-slate-200 dark:border-slate-800/50 transition-colors duration-500');
  
  // 5. border-slate-800 -> border-slate-200 dark:border-slate-800 transition-colors duration-500
  content = content.replace(/\bborder-slate-800\b(?! transition-colors)/g, 'border-slate-200 dark:border-slate-800 transition-colors duration-500');

  // 6. bg-slate-900 -> bg-slate-100 dark:bg-slate-900 transition-colors duration-500
  content = content.replace(/\bbg-slate-900\b(?! transition-colors|\/50)/g, 'bg-slate-100 dark:bg-slate-900 transition-colors duration-500');

  // 7. bg-slate-950 -> bg-slate-50 dark:bg-slate-950 transition-colors duration-500
  content = content.replace(/\bbg-slate-950\b(?! transition-colors)/g, 'bg-slate-50 dark:bg-slate-950 transition-colors duration-500');

  fs.writeFileSync(filePath, content);
});

console.log('Light theme applied to components.');
