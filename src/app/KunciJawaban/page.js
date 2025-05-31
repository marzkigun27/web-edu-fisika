'use client';

export default function KunciJawabanPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b border-blue-500 pb-2">Kunci Jawaban</h1>

        <div className="space-y-10">
          {/* Soal 1 */}
          <article className="bg-[rgba(0,10,30,0.7)] p-6 rounded-xl border border-white/10 shadow-lg backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-3">Jawaban Soal 1</h3>
            <p className="mb-4">Pertanyaan: Menurut hukum gravitasi Newton, gaya gravitasi antara dua benda:</p>
            <div className="bg-blue-600 bg-opacity-50 p-4 rounded-md mb-4">
              <strong>Jawaban yang benar: a) Berbanding lurus dengan massa masing-masing benda</strong>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Penjelasan:</h4>
              <p className="mb-3">
                Menurut hukum gravitasi Newton, gaya gravitasi (F) antara dua benda dinyatakan dalam rumus:
              </p>
              <p className="text-center font-mono text-lg mb-4">F = G(m₁m₂)/r²</p>
              <ul className="list-disc list-inside mb-4 space-y-1 text-gray-300">
                <li>F adalah gaya gravitasi</li>
                <li>G adalah konstanta gravitasi universal</li>
                <li>m₁ dan m₂ adalah massa kedua benda</li>
                <li>r adalah jarak antara pusat massa kedua benda</li>
              </ul>
              <p>
                Dari rumus ini, dapat dilihat bahwa gaya gravitasi berbanding lurus dengan massa masing-masing benda.
              </p>
            </div>
          </article>

          {/* Soal 2 */}
          <article className="bg-[rgba(0,10,30,0.7)] p-6 rounded-xl border border-white/10 shadow-lg backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-3">Jawaban Soal 2</h3>
            <p className="mb-4">Pertanyaan: Hukum Kepler pertama menyatakan bahwa:</p>
            <div className="bg-blue-600 bg-opacity-50 p-4 rounded-md mb-4">
              <strong>Jawaban yang benar: c) Planet bergerak dalam orbit berbentuk elips dengan Matahari di salah satu fokus</strong>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Penjelasan:</h4>
              <p>
                Hukum pertama Kepler menyatakan bahwa planet bergerak dalam orbit elips dengan Matahari di salah satu fokus. Ini menjelaskan variasi jarak planet ke Matahari selama orbitnya.
              </p>
            </div>
          </article>

          {/* Soal 3 */}
          <article className="bg-[rgba(0,10,30,0.7)] p-6 rounded-xl border border-white/10 shadow-lg backdrop-blur-md">
            <h3 className="text-2xl font-semibold mb-3">Jawaban Soal 3</h3>
            <p className="mb-4">
              Pertanyaan: Jika periode orbit sebuah planet adalah T dan jarak rata-rata ke Matahari adalah R, maka menurut hukum Kepler ketiga:
            </p>
            <div className="bg-blue-600 bg-opacity-50 p-4 rounded-md mb-4">
              <strong>Jawaban yang benar: a) T² ∝ R³</strong>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Penjelasan:</h4>
              <p className="mb-3">
                Hukum ketiga Kepler menyatakan bahwa kuadrat periode orbit (T²) sebanding dengan pangkat tiga jarak rata-rata (R³). Dinyatakan sebagai:
              </p>
              <p className="text-center font-mono text-lg mb-4">T² = k × R³</p>
              <p>Dengan k sebagai konstanta. Hukum ini berlaku untuk seluruh planet dalam sistem tata surya.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
