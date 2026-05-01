const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/text-slate-800 dark:text-white/g, 'text-white');
  content = content.replace(/text-slate-600 dark:text-slate-400/g, 'text-slate-400');
  content = content.replace(/text-slate-700 dark:text-slate-300/g, 'text-slate-300');
  content = content.replace(/text-slate-500 dark:text-slate-400/g, 'text-slate-400');
  content = content.replace(/text-blue-500 dark:text-blue-400/g, 'text-blue-400');
  
  content = content.replace(/bg-white dark:bg-slate-900/g, 'bg-slate-900');
  content = content.replace(/bg-slate-100 dark:bg-slate-900/g, 'bg-slate-900');
  content = content.replace(/bg-slate-100 dark:bg-slate-800\/50/g, 'bg-slate-800/50');
  content = content.replace(/bg-slate-100 dark:bg-slate-800/g, 'bg-slate-800');
  content = content.replace(/bg-white dark:bg-slate-950/g, 'bg-slate-950');
  content = content.replace(/bg-slate-50 dark:bg-slate-900\/50/g, 'bg-slate-900/50');
  
  content = content.replace(/border-slate-200 dark:border-slate-800\/50/g, 'border-slate-800/50');
  content = content.replace(/border-slate-200 dark:border-slate-800/g, 'border-slate-800');
  
  content = content.replace(/hover:text-accent-cyan dark:hover:text-white/g, 'hover:text-white');
  content = content.replace(/hover:text-accent-purple dark:hover:text-white/g, 'hover:text-white');
  content = content.replace(/hover:text-slate-900 dark:hover:text-white/g, 'hover:text-white');
  content = content.replace(/hover:bg-slate-100 dark:hover:bg-slate-800/g, 'hover:bg-slate-800');
  content = content.replace(/group-hover:bg-slate-200 dark:group-hover:bg-slate-800/g, 'group-hover:bg-slate-800');

  content = content.replace(/ transition-colors duration-300/g, '');

  fs.writeFileSync(filePath, content);
});

// Revert App.jsx
let appContent = fs.readFileSync('src/App.jsx', 'utf8');
appContent = appContent.replace(/<div className={`relative min-h-screen font-sans selection:bg-accent-purple\/30 selection:text-white \${loading \? 'hidden' : ''}`}>\s*\{\/\* Dynamic Background Glow \*\/\}\s*<div \s*className="pointer-events-none fixed inset-0 z-0 dark:opacity-100 opacity-50"/g, 
`<div className={\`relative min-h-screen bg-slate-950 font-sans selection:bg-accent-purple/30 selection:text-white \${loading ? 'hidden' : ''}\`}>
        {/* Dynamic Background Glow */}
        <div 
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"`);
appContent = appContent.replace(/isDark=\{isDark\} toggleTheme=\{\(\) => setIsDark\(!isDark\)\}/, '');
fs.writeFileSync('src/App.jsx', appContent);

// Revert Navbar.jsx
let navContent = fs.readFileSync('src/components/Navbar.jsx', 'utf8');
navContent = navContent.replace(/import \{ Menu, X, Sun, Moon \} from 'lucide-react';/, `import { Menu, X } from 'lucide-react';`);
navContent = navContent.replace(/export default function Navbar\(\{ isDark, toggleTheme \}\)/, `export default function Navbar()`);
navContent = navContent.replace(/bg-white\/80 dark:bg-slate-950\/80 backdrop-blur-md shadow-lg shadow-slate-200\/50 dark:shadow-slate-900\/20/, `bg-slate-950/80 backdrop-blur-md shadow-lg shadow-slate-900/20`);
navContent = navContent.replace(/<button \s*onClick=\{toggleTheme\}\s*className="p-2 ml-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-accent-purple dark:hover:text-white"\s*>\s*\{isDark \? <Sun size=\{18\} \/> : <Moon size=\{18\} \/>\}\s*<\/button>/, '');
navContent = navContent.replace(/<button \s*onClick=\{toggleTheme\}\s*className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"\s*>\s*\{isDark \? <Sun size=\{18\} \/> : <Moon size=\{18\} \/>\}\s*<\/button>/, '');
fs.writeFileSync('src/components/Navbar.jsx', navContent);

// Revert index.css
let cssContent = fs.readFileSync('src/index.css', 'utf8');
cssContent = cssContent.replace(/body \{\s*@apply bg-slate-50 text-slate-700;\s*\}\s*\.dark body \{\s*@apply bg-slate-950 text-slate-300;\s*\}/, `body {\n    @apply bg-slate-950 text-slate-300;\n  }`);
cssContent = cssContent.replace(/\.glass \{\s*@apply bg-white\/70 backdrop-blur-md border border-slate-200 shadow-sm;\s*\}\s*\.dark \.glass \{\s*@apply bg-slate-900\/50 border-slate-800\/50 shadow-none;\s*\}/, `.glass {\n    @apply bg-slate-900/50 backdrop-blur-md border border-slate-800/50;\n  }`);
fs.writeFileSync('src/index.css', cssContent);

// Revert tailwind.config.js
let twContent = fs.readFileSync('tailwind.config.js', 'utf8');
twContent = twContent.replace(/darkMode: 'class',\s*/, '');
fs.writeFileSync('tailwind.config.js', twContent);

console.log('Reverted successfully');
