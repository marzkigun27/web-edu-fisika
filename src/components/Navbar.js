'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Kompetensi', path: '/Kompetensi' },
  { name: 'Petunjuk Penggunaan Website', path: '/Petunjuk' },
  { name: 'Materi Pembelajaran', path: '/Materi' },
  { name: 'Latihan Soal', path: '/Latihan' },
  { name: 'Kunci Jawaban', path: '/KunciJawaban' },
  { name: 'Glosarium', path: '/Glosarium' },
  { name: 'Tentang Penulis', path: '/Tentang' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`
        flex flex-wrap justify-center gap-2 p-4 bg-[#0a0f1c]  w-full
        transition-opacity duration-[1500ms] ease-in-out
        ${visible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{ top: 0 }}
    >
      {navItems.map(({ name, path }) => {
        const isActive = pathname === path;
        return (
            <Link
            key={path}
            href={path}
            className={`px-4 py-2 rounded-md border border-white/10 transition glow-blue ${
                isActive ? 'text-blue-500 border-blue-500' : 'text-white'
            } hover:border-white/30`}
            >
            {name}
            </Link>

          
        );
      })}
    </nav>
  );
}
