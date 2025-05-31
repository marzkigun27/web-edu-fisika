'use client';

import { useEffect, useState } from 'react';

export default function Kompetensi() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="kompetensi"
      className="mt-16 px-5"
    >
      <div
        className={`max-w-3xl mx-auto p-8 bg-[rgba(0,10,30,0.7)] rounded-xl border border-white/10 shadow-lg
          backdrop-blur-lg
          animate-fadeIn
          ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
           duration-500 ease-out
        `}
      >
        <h2 className="text-[#4a90e2] text-2xl mb-5 pb-2 border-b border-[#4a90e266]">Kompetensi Inti</h2>
        <div className="bg-white/5 rounded-lg p-5 mb-5">
          <div className="leading-relaxed text-base space-y-4 text-white">
            <p>
              KI 3 : Memahami, menerapkan, menganalisis pengetahuan faktual, konseptual, prosedural
              berdasarkan rasa ingin tahunya tentang ilmu pengetahuan, teknologi, seni, budaya, dan
              humaniora dengan wawasan kemanusiaan, kebangsaan, kenegaraan, dan peradaban terkait fenomena
              dan kejadian, serta menerapkan pengetahuan prosedural pada bidang kajian yang spesifik sesuai
              dengan bakat dan minatnya untuk memecahkan masalah.
            </p>
            <p>
              KI 4 : Mengolah, menalar, dan menyaji dalam ranah konkret dan ranah abstrak terkait dengan
              pengembangan dari yang dipelajarinya di sekolah secara mandiri, dan mampu menggunakan metoda
              sesuai kaidah keilmuan.
            </p>
          </div>
        </div>

        <h2 className="text-[#4a90e2] text-2xl mb-5 pb-2 border-b border-[#4a90e266]">Kompetensi Dasar</h2>
        <div className="bg-white/5 rounded-lg p-5">
          <div className="leading-relaxed text-base space-y-4 text-white">
            <p>3.8 Menganalisis keteraturan gerak planet dan satelit dalam tatasurya berdasarkan hukum-hukum Newton</p>
            <p>4.8 Menyajikan karya mengenai gerak satelit buatan yang mengorbit bumi, pemanfaatan dan dampak yang ditimbulkannya dari penelusuran berbagai sumber informasi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
