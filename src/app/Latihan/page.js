'use client';

import React from 'react';

export default function LatihanSoalPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">


      {/* Content */}
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b border-blue-500 pb-2">
          Latihan Soal
        </h1>

        <div
          className="soal-container bg-[rgba(0,10,30,0.7)] backdrop-blur-lg rounded-xl p-5 text-white max-w-xl mx-auto"
          style={{ WebkitBackdropFilter: 'blur(10px)' }} // for Safari
        >
          {/* Soal 1 */}
          <article className="soal mb-8 p-5 border border-white/10 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Soal 1</h3>
            <p>
              Menurut hukum gravitasi Newton, gaya gravitasi antara dua benda:
            </p>
            <div className="options mt-4 flex flex-col gap-3">
              {[
                'a) Berbanding lurus dengan massa masing-masing benda',
                'b) Berbanding terbalik dengan kuadrat jarak antara kedua benda',
                'c) Tidak bergantung pada konstanta gravitasi universal',
                'd) Berbanding lurus dengan jarak antara kedua benda',
              ].map((option, i) => (
                <div
                  key={i}
                  className="option cursor-pointer rounded-md bg-white/10 p-3 transition hover:bg-white/20"
                >
                  {option}
                </div>
              ))}
            </div>
          </article>

          {/* Soal 2 */}
          <article className="soal mb-8 p-5 border border-white/10 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Soal 2</h3>
            <p>Hukum Kepler pertama menyatakan bahwa:</p>
            <div className="options mt-4 flex flex-col gap-3">
              {[
                'a) Planet bergerak dalam orbit berbentuk lingkaran',
                'b) Planet bergerak dalam orbit berbentuk elips dengan Matahari di pusat',
                'c) Planet bergerak dalam orbit berbentuk elips dengan Matahari di salah satu fokus',
                'd) Planet bergerak dengan kecepatan konstan',
              ].map((option, i) => (
                <div
                  key={i}
                  className="option cursor-pointer rounded-md bg-white/10 p-3 transition hover:bg-white/20"
                >
                  {option}
                </div>
              ))}
            </div>
          </article>

          {/* Soal 3 */}
          <article className="soal p-5 border border-white/10 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Soal 3</h3>
            <p>
              Jika periode orbit sebuah planet adalah T dan jarak rata-rata ke
              Matahari adalah R, maka menurut hukum Kepler ketiga:
            </p>
            <div className="options mt-4 flex flex-col gap-3">
              {[
                'a) T² ∝ R³',
                'b) T ∝ R²',
                'c) T³ ∝ R²',
                'd) T ∝ R³',
              ].map((option, i) => (
                <div
                  key={i}
                  className="option cursor-pointer rounded-md bg-white/10 p-3 transition hover:bg-white/20"
                >
                  {option}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
