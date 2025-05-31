export default function KeplerLawsPage() {
    function initFirstLawViz() {
        const viz = createMiniScene("first-law-viz");
        const starGeom = new THREE.SphereGeometry(0.4, 32, 32);
        const starMat = new THREE.MeshStandardMaterial({ color: 0xffdd00 });
        const star = new THREE.Mesh(starGeom, starMat);
        star.position.set(-1, 0, 0);
        viz.miniScene.add(star);
        const planetGeom = new THREE.SphereGeometry(0.2, 16, 16);
        const planetMat = new THREE.MeshStandardMaterial({ color: 0x00aaff });
        const planet = new THREE.Mesh(planetGeom, planetMat);
        viz.miniScene.add(planet);
        const a = 2,
          e = 0.6,
          b = a * Math.sqrt(1 - e * e);
        const points = [];
        for (let i = 0; i <= 100; i++) {
          const theta = (i / 100) * Math.PI * 2;
          points.push(new THREE.Vector3(a * (Math.cos(theta) - e), b * Math.sin(theta), 0));
        }
        const ellipse = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(points),
          new THREE.LineBasicMaterial({ color: 0xffffff })
        );
        viz.miniScene.add(ellipse);
        const paramsSprite = createTextSprite("a = 2, e = 0.6");
        paramsSprite.scale.set(3, 1, 1);
        paramsSprite.position.set(0, -2.5, 0);
        viz.miniScene.add(paramsSprite);
        let angle = 0;
        let freeze = false;
        viz.miniRenderer.domElement.style.cursor = "pointer";
        viz.miniRenderer.domElement.addEventListener("click", function () {
          freeze = !freeze;
          if (freeze) {
            const x = a * (Math.cos(angle) - e).toFixed(2);
            const y = (b * Math.sin(angle)).toFixed(2);
            const ctx = paramsSprite.material.map.image.getContext("2d");
            ctx.clearRect(0, 0, 256, 64);
            ctx.fillStyle = "white";
            ctx.font = "24px Arial";
            ctx.fillText(`a=2, e=0.6, pos: (${x}, ${y})`, 10, 40);
            paramsSprite.material.map.needsUpdate = true;
          }
        });
        viz.update = function () {
          if (!freeze) {
            angle += 0.01;
          }
          planet.position.set(a * (Math.cos(angle) - e), b * Math.sin(angle), 0);
        };
      }
    return (
      <main className="max-w-4xl mx-auto p-6 space-y-12">
        <section className="law-container" aria-labelledby="newton-title">
          <h2 id="newton-title" className="text-2xl font-semibold mb-4">
            Hukum Newton tentang Gravitasi Universal
          </h2>
          <div className="law-content space-y-4">
            <article className="law-text text-base leading-relaxed">
              <p>
                Newton menemukan bahwa setiap massa menarik setiap massa lainnya.
                Gaya gravitasi ini diberikan oleh:
              </p>
              <p
                style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.2rem" }}
              >
                F = G (m₁ m₂) / r²
              </p>
              <p>Klik pada kanvas untuk menghentikan/melanjutkan adegan dan melihat relasi gaya.</p>
            </article>
            <div
              className="law-viz border border-gray-400 rounded p-8 text-center text-gray-500"
              id="newton-law-viz"
              tabIndex={0}
              aria-label="Visualisasi hukum Newton tentang gravitasi"
            >
              Memuat visualisasi...
            </div>
          </div>
        </section>
  
        <section className="law-container" aria-labelledby="kepler1-title">
          <h2 id="kepler1-title" className="text-2xl font-semibold mb-4">
            Hukum Pertama Kepler: Orbit Elips
          </h2>
          <div className="law-content space-y-4">
            <article className="law-text text-base leading-relaxed">
              <p>
                Planet bergerak dalam orbit elips dengan Matahari pada salah satu fokusnya.
                Elips didefinisikan oleh sumbu semi-mayor (a) dan eksentrisitas (e).
              </p>
              <p>Klik untuk menghentikan gerakan dan melihat parameter saat ini.</p>
            </article>
            <div
              className="law-viz border border-gray-400 rounded p-8 text-center text-gray-500"
              id="first-law-viz"
              tabIndex={0}
              aria-label="Visualisasi hukum pertama Kepler"
            >
              Memuat visualisasi...
            </div>
          </div>
        </section>
  
        <section className="law-container" aria-labelledby="kepler2-title">
          <h2 id="kepler2-title" className="text-2xl font-semibold mb-4">
            Hukum Kedua Kepler: Area yang Sama
          </h2>
          <div className="law-content space-y-4">
            <article className="law-text text-base leading-relaxed">
              <p>
                Garis yang menghubungkan planet dan Matahari menyapu area yang sama dalam interval waktu yang sama.
              </p>
              <p>Klik pada sektor merah untuk menghentikan sapuan dan menampilkan area.</p>
            </article>
            <div
              className="law-viz border border-gray-400 rounded p-8 text-center text-gray-500"
              id="second-law-viz"
              tabIndex={0}
              aria-label="Visualisasi hukum kedua Kepler"
            >
              Memuat visualisasi...
            </div>
          </div>
        </section>
  
        <section className="law-container" aria-labelledby="kepler3-title">
          <h2 id="kepler3-title" className="text-2xl font-semibold mb-4">
            Hukum Ketiga Kepler: Harmoni
          </h2>
          <div className="law-content space-y-4">
            <article className="law-text text-base leading-relaxed">
              <p>T² ∝ a³: Kuadrat periode orbit sebanding dengan pangkat tiga sumbu semi-mayornya.</p>
              <p>Klik untuk menghentikan gerakan dua planet dan melihat rasio periode.</p>
            </article>
            <div
              className="law-viz border border-gray-400 rounded p-8 text-center text-gray-500"
              id="third-law-viz"
              tabIndex={0}
              aria-label="Visualisasi hukum ketiga Kepler"
            >
              Memuat visualisasi...
            </div>
          </div>
        </section>
  
        <section className="law-container" aria-labelledby="example-title">
          <h2 id="example-title" className="text-2xl font-semibold mb-4">
            Contoh: Periode Orbit Merkurius
          </h2>
          <div className="law-content space-y-4">
            <article className="law-text text-base leading-relaxed">
              <p>
                Untuk Merkurius (jarak 0,4 SA) dibandingkan dengan Bumi (1 tahun), Hukum Ketiga Kepler memberikan:
              </p>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                Tₑ² / 1³ = Tₘ² / (0,4)³
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>(0,4)³ = 0,064</li>
                <li>Tₘ² = 0,064, sehingga Tₘ ≈ 0,253 tahun (≈92,3 hari)</li>
              </ul>
              <p>Klik untuk menghentikan orbit Merkurius dan menampilkan periodenya.</p>
            </article>
            <div
              className="law-viz border border-gray-400 rounded p-8 text-center text-gray-500"
              id="kepler-example-viz"
              tabIndex={0}
              aria-label="Visualisasi contoh periode orbit Merkurius"
            >
              Memuat visualisasi...
            </div>
          </div>
        </section>
      </main>
    );
  }
  