'use client';

export default function GlosariumPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <div
        className="max-w-3xl mx-auto p-6 rounded-xl bg-[rgba(0,10,30,0.7)] backdrop-blur-lg border border-white/10"
        style={{ WebkitBackdropFilter: 'blur(10px)' }}
      >
        {/* Kategori 1 */}
        <section className="kategori mb-8">
          <h2 className="border-b border-white/10 pb-2 mb-5 text-xl font-semibold">
            Konsep Dasar Gravitasi
          </h2>

          <div className="istilah mb-5 p-4 border border-white/10 rounded-lg">
            <h3 className="text-blue-400 mb-3 text-lg font-semibold">
              Gravitasi Universal
            </h3>
            <p className="leading-relaxed">
              Gaya tarik-menarik yang terjadi antara semua partikel yang memiliki massa di alam
              semesta. Gaya ini sebanding dengan hasil kali massa partikel dan berbanding terbalik
              dengan kuadrat jarak antara keduanya.
            </p>
          </div>

          <div className="istilah mb-5 p-4 border border-white/10 rounded-lg">
            <h3 className="text-blue-400 mb-3 text-lg font-semibold">
              Konstanta Gravitasi Universal (G)
            </h3>
            <p className="leading-relaxed">
              Konstanta fundamental yang menentukan kekuatan interaksi gravitasi. Nilainya adalah
              6,67430 × 10⁻¹¹ m³ kg⁻¹ s⁻².
            </p>
          </div>
        </section>

        {/* Kategori 2 */}
        <section className="kategori mb-8">
          <h2 className="border-b border-white/10 pb-2 mb-5 text-xl font-semibold">
            Hukum Kepler
          </h2>

          <div className="istilah mb-5 p-4 border border-white/10 rounded-lg">
            <h3 className="text-blue-400 mb-3 text-lg font-semibold">Orbit Elips</h3>
            <p className="leading-relaxed">
              Jalur berbentuk elips yang dilalui planet dalam pergerakannya mengelilingi Matahari,
              dengan Matahari berada di salah satu fokus elips tersebut.
            </p>
          </div>

          <div className="istilah mb-5 p-4 border border-white/10 rounded-lg">
            <h3 className="text-blue-400 mb-3 text-lg font-semibold">Sumbu Semi-mayor</h3>
            <p className="leading-relaxed">
              Setengah dari sumbu terpanjang elips. Dalam konteks orbit planet, ini merepresentasikan
              jarak rata-rata planet ke Matahari.
            </p>
          </div>

          <div className="istilah mb-5 p-4 border border-white/10 rounded-lg">
            <h3 className="text-blue-400 mb-3 text-lg font-semibold">Eksentrisitas</h3>
            <p className="leading-relaxed">
              Ukuran seberapa jauh bentuk elips menyimpang dari bentuk lingkaran. Nilai eksentrisitas
              berkisar dari 0 (lingkaran sempurna) hingga 1 (parabola).
            </p>
          </div>
        </section>

        {/* Kategori 3 */}
        <section className="kategori">
          <h2 className="border-b border-white/10 pb-2 mb-5 text-xl font-semibold">
            Istilah Astronomis
          </h2>

          <div className="istilah mb-5 p-4 border border-white/10 rounded-lg">
            <h3 className="text-blue-400 mb-3 text-lg font-semibold">Satuan Astronomi (SA)</h3>
            <p className="leading-relaxed">
              Satuan jarak yang digunakan dalam astronomi, setara dengan jarak rata-rata Bumi ke Matahari
              (sekitar 149,6 juta kilometer).
            </p>
          </div>

          <div className="istilah mb-5 p-4 border border-white/10 rounded-lg">
            <h3 className="text-blue-400 mb-3 text-lg font-semibold">Periode Orbit</h3>
            <p className="leading-relaxed">
              Waktu yang diperlukan sebuah planet untuk melakukan satu putaran lengkap mengelilingi Matahari.
            </p>
          </div>

          <div className="istilah mb-5 p-4 border border-white/10 rounded-lg">
            <h3 className="text-blue-400 mb-3 text-lg font-semibold">Perihelion</h3>
            <p className="leading-relaxed">Titik terdekat orbit planet dengan Matahari.</p>
          </div>

          <div className="istilah p-4 border border-white/10 rounded-lg">
            <h3 className="text-blue-400 mb-3 text-lg font-semibold">Aphelion</h3>
            <p className="leading-relaxed">Titik terjauh orbit planet dengan Matahari.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
