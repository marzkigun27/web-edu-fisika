'use client';
import { useEffect, useState } from 'react';
export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10); // delay to trigger animation
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full h-screen bg-[#0a0f1c] flex flex-col justify-center items-center">
      {/* Sun */}
      <div
        id="splash-logo"
        className="w-[150px] h-[150px] rounded-full shadow-[0_0_60px_rgba(255,94,0,0.6)]"
        style={{
          background: 'radial-gradient(circle, #ff9500, #ff5e00)',
          animation: 'pulse 2s infinite',
        }}
      ></div>
      <p
        className={`font-medium text-3xl tracking-[0.4em]  text-white mt-24 transition-opacity duration-[1500ms] ease-in-out ${visible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        HUKUM NEWTON TENTANG GRAVITASI</p>
    </div>
  )
}
