'use client';

export default function TentangPenulisPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-3xl mx-auto p-6 rounded-xl bg-[rgba(0,10,30,0.7)] backdrop-blur-lg border border-white/10 text-center">
        <h1 className="text-4xl font-bold mb-6">Tentang Penulis</h1>

        <div className="profile-image w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 mb-6">
          <img
            src="/texture/profile.jpg"
            alt="Foto Penulis Almaa"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold">Almaa</h2>
        <p className="mb-6">Mahasiswa Pendidikan Fisika</p>

        <div className="bio max-w-xl mx-auto text-left leading-relaxed space-y-4 mb-8">
          <h3 className="text-xl font-semibold mb-2">Biodata</h3>
          <p>
            Saya adalah mahasiswa Pendidikan Fisika yang memiliki ketertarikan khusus pada astronomi
            dan pembelajaran interaktif. Website ini merupakan hasil dari proyek pembelajaran yang
            bertujuan untuk membantu siswa memahami konsep Hukum Newton tentang Gravitasi dengan cara
            yang lebih menarik dan interaktif.
          </p>
          <p>
            Melalui website ini, saya berharap dapat membantu teman-teman siswa dalam memahami konsep
            gravitasi universal dan hukum-hukum Kepler dengan lebih mudah melalui visualisasi interaktif
            dan penjelasan yang mudah dipahami.
          </p>
        </div>

        <div className="contact-info inline-block bg-white/10 rounded-lg p-5 text-left max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4">Kontak</h3>
          <p className="mb-2">Email: almaa@email.com</p>
          <p className="mb-2">Institusi: Universitas Pendidikan Indonesia</p>
          <p>Jurusan: Pendidikan Fisika</p>
        </div>
      </div>
    </main>
  );
}
