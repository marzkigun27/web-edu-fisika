'use client';

export default function PetunjukPage() {
  return (
    <main
      role="main"
      className="max-w-3xl mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-lg mt-12"
    >
      <h1 className="text-4xl font-bold mb-8 border-b border-blue-600 pb-3">
        Petunjuk Penggunaan Website
      </h1>

      <section
        className="mb-8"
        aria-labelledby="nav-title"
      >
        <h2
          id="nav-title"
          className="text-2xl font-semibold mb-4 text-blue-400"
        >
          Navigasi
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Gunakan menu navigasi di bagian atas untuk berpindah antar halaman.</li>
            <li>Tombol {'"Home"'} akan membawa Anda ke halaman utama.</li>
            <li>Tombol {'"Materi Pembelajaran"'} berisi visualisasi interaktif tentang Hukum Newton.</li>
        </ul>

      </section>

      <section
        className="mb-8"
        aria-labelledby="viz-title"
      >
        <h2
          id="viz-title"
          className="text-2xl font-semibold mb-4 text-blue-400"
        >
          Visualisasi Interaktif
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Gunakan mouse untuk merotasi dan memperbesar tampilan.</li>
          <li>Klik pada planet untuk melihat informasi detailnya.</li>
          <li>Gunakan slider untuk mengatur kecepatan simulasi.</li>
          <li>Pada perangkat mobile, gunakan gesture dua jari untuk zoom.</li>
        </ul>
      </section>

      <section
        aria-labelledby="materi-title"
      >
        <h2
          id="materi-title"
          className="text-2xl font-semibold mb-4 text-blue-400"
        >
          Materi Pembelajaran
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Materi disajikan secara berurutan dari dasar hingga lanjutan.</li>
          <li>Setiap bagian dilengkapi dengan visualisasi interaktif.</li>
          <li>Klik pada visualisasi untuk melihat penjelasan lebih detail.</li>
        </ul>
      </section>
    </main>
  );
}
