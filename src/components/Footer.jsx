import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-200 dark:border-slate-800 transition-colors duration-500/50 transition-colors duration-500 py-8 text-center bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Rohith Kumar P. All rights reserved.
      </p>
    </footer>
  );
}
