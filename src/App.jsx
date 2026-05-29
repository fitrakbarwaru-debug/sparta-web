import { motion } from "framer-motion"
import { useState } from "react"

const pspSparta = [
  ["Pembina", ["Desi Indah Kurniasari"]],
  ["Pelatih", ["Fitra Akbar"]],
  ["Ketua", ["Alif Pratama Alghifari"]],
  ["Wakil", ["Nazah Sisilia Shafa"]],
  ["Sekretaris", ["Rizka Farisha — Koor. Sekretaris", "Lanika Rianti Putri — Sekretaris"]],
  ["Humas", ["Rahmalia Arunita — Koor. Humas", "Zharoh Cantika Lestari", "Andrea Gloria Utomo", "Callysta Agni Dzakiyyah", "Aqeela Putri Arisy"]],
  ["Bendahara", ["Dyah Putri Ramadhani — Koor. Bendahara", "Jihan Halwa Raisah — Bendahara"]],
  ["Binlat", ["Muhammad Siddik Febriyan — Koor. Bina Latihan", "Morend Decca Raya", "Ladzy Jaya Syuhada", "Nindya Pratiwi", "Ridho Firdaus"]],
  ["Perlap", ["Marsha Novalianti — Koor. Perlengkapan", "Dinda Aristi", "Rizky Aditya Pratama"]],
  ["Perlombaan", ["Putri Violla Ramadhani — Koor. Perlombaan", "Daffa Nur Ramadhan", "Ayatusi Nur Syifa", "Muhammad Nuruz Zulrafif"]],
]

const sparta31 = [
  ["Pembina", ["Martini"]],
  ["Pelatih", ["Fitra Akbar"]],
  ["Ketua", ["Putri Sekar Ayu"]],
  ["Wakil", ["Tiara Putri — Wakil Senior", "Rhaniaqyla — Wakil Junior"]],
  ["Sekretaris", ["Iffa Dwi — Koor. Sekretaris", "Nazwa Fauziyah — Sekretaris"]],
  ["Bendahara", ["Tsabita Zanzabila — Koor. Bendahara", "Feenezia Malilah — Sie Bendahara"]],
  ["Humas", ["Karla Aleena — Koor. Humas", "Melia Putri Sabiyan — Sie Humas"]],
  ["Logistik", ["Rafael Al Fariji — Koor. Logistik", "Annisa Isna Kusuma — Sie Logistik", "Cahaya Khayla Putri — Sie Logistik"]],
  ["Binlat", ["Farhan Ardiansyah — Koor. Bina Latihan", "Syakeela Lyvia — Sie Bina Latihan"]],
  ["Bina Lomba", ["Annisa Azzahra — Koor. Bina Lomba", "Yuanita Kristin — Sie Bina Lomba"]],
]

function StrukturCard({ title, names }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-yellow-500/20 bg-black/60 p-6"
    >
      <h4 className="text-xl font-bold text-yellow-500 mb-4">{title}</h4>
      <div className="space-y-2">
        {names.map((name, index) => (
          <p key={index} className="text-gray-300 text-sm md:text-base">
            {name}
          </p>
        ))}
      </div>
    </motion.div>
  )
}

function UnitPage({ logo, title, school, data, onBack }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="flex justify-between items-center px-5 md:px-10 py-6 border-b border-red-900/60 bg-black">
        <button onClick={onBack} className="text-yellow-500 hover:text-white transition">
          ← Kembali ke SPARTA Center
        </button>

        <h1 className="text-xl md:text-2xl font-bold tracking-[4px] text-yellow-500">
          SPARTA
        </h1>
      </nav>
{title === "SPARTA 31" && (
  <section className="px-5 md:px-10 py-16">

    <h2 className="text-5xl font-bold text-center text-yellow-500 mb-16">
      BADAN PENGURUS HARIAN SPARTA 31
    </h2>

    <div className="grid md:grid-cols-3 gap-16">

      <div className="flex flex-col items-center group">
        <div className="h-96 flex items-end justify-center">
          <img
            src="/pengurus31/putri-sekar.png"
            alt="Putri Sekar Ayu"
            className="max-h-full object-contain transition duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-bold mt-4">Putri Sekar Ayu</h3>
        <p className="text-yellow-500">Ketua</p>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-96 flex items-end justify-center">
          <img
            src="/pengurus31/tiara-putri.png"
            alt="Tiara Putri"
            className="max-h-full object-contain transition duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-bold mt-4">Tiara Putri</h3>
        <p className="text-yellow-500">Wakil Senior</p>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-96 flex items-end justify-center">
          <img
            src="/pengurus31/rhaniaqyla.png"
            alt="Rhaniaqyla"
            className="max-h-full object-contain transition duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-bold mt-4">Rhaniaqyla</h3>
        <p className="text-yellow-500">Wakil Junior</p>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-96 flex items-end justify-center">
          <img
            src="/pengurus31/iffa-dwi.png"
            alt="Iffa Dwi"
            className="max-h-full object-contain transition duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-bold mt-4">Iffa Dwi</h3>
        <p className="text-yellow-500">Sekretaris</p>
        <div className="mt-4 border-t border-yellow-500/20 pt-3">
  <p className="text-sm text-gray-300">
    Nazwa Fauziyah
  </p>

  <p className="text-xs text-gray-500">
    Sie. Sekretaris
  </p>
</div>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-96 flex items-end justify-center">
          <img
            src="/pengurus31/tsabita-zanzabila.png"
            alt="Tsabita Zanzabila"
            className="max-h-full object-contain transition duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-bold mt-4">Tsabita Zanzabila</h3>
        <p className="text-yellow-500">Bendahara</p>
        <div className="mt-4 border-t border-yellow-500/20 pt-3">
  <p className="text-sm text-gray-300">
    Feenezia Malilah
  </p>

  <p className="text-xs text-gray-500">
    Sie. Bendahara
  </p>
</div>
      </div>

    </div>
<div className="mt-24">

<h2 className="text-5xl font-bold text-center text-yellow-500 mb-16">
  KOORDINATOR BIDANG
</h2>

<div className="grid md:grid-cols-4 gap-16">

  <div className="flex flex-col items-center group">

    <div className="h-80 flex items-end justify-center">
      <img
        src="/pengurus31/karla-aleena.png"
        alt="Karla Aleena"
        className="max-h-full object-contain"
      />
    </div>

    <h3 className="text-xl font-bold mt-4">
      Karla Aleena
    </h3>

    <p className="text-yellow-500">
      Koor. Humas
    </p>

    <div className="mt-4 flex flex-col items-center">
      <img
        src="/pengurus31/melia-putri-sabiyan.png"
        alt="Melia Putri Sabiyan"
        className="h-64 object-contain"
      />

      <h4 className="text-lg font-semibold">
        Melia Putri Sabiyan
      </h4>

      <p className="text-gray-400 text-sm">
        Sie. Humas
      </p>
    </div>

  </div>

    <div className="flex flex-col items-center group">
      <div className="h-80 flex items-end justify-center">
        <img
          src="/pengurus31/rafael-al-fariji.png"
          alt="Rafael Al Fariji"
          className="max-h-full object-contain transition duration-500 group-hover:scale-110"
        />
      </div>
<h3 className="text-xl font-bold mt-4">
  Rafael Al Fariji
</h3>

<p className="text-yellow-500">
  Koor. Logistik
</p>

<div className="mt-4 border-t border-yellow-500/20 pt-3">

  <p className="text-sm text-gray-300">
    Annisa Isna Kusuma
  </p>

  <p className="text-xs text-gray-500">
    Sie. Logistik
  </p>

  <p className="text-sm text-gray-300 mt-2">
    Cahaya Khayla Putri
  </p>

  <p className="text-xs text-gray-500">
    Sie. Logistik
  </p>

</div>
    </div>

    <div className="flex flex-col items-center group">
      <div className="h-80 flex items-end justify-center">
        <img
          src="/pengurus31/farhan-ardiansyah.png"
          alt="Farhan Ardiansyah"
          className="max-h-full object-contain transition duration-500 group-hover:scale-110"
        />
      </div>
<h3 className="text-xl font-bold mt-4">
  Farhan Ardiansyah
</h3>

<p className="text-yellow-500">
  Koor. Binlat
</p>

<div className="mt-4 border-t border-yellow-500/20 pt-3">

  <p className="text-sm text-gray-300">
    Syakeela Lyvia
  </p>

  <p className="text-xs text-gray-500">
    Sie. Binlat
  </p>

</div>
    </div>

    <div className="flex flex-col items-center group">
      <div className="h-80 flex items-end justify-center">
        <img
          src="/pengurus31/annisa-azzahra.png"
          alt="Annisa Azzahra"
          className="max-h-full object-contain transition duration-500 group-hover:scale-110"
        />
      </div>
<h3 className="text-xl font-bold mt-4">
  Annisa Azzahra
</h3>

<p className="text-yellow-500">
  Koor. Bina Lomba
</p>

<div className="mt-4 border-t border-yellow-500/20 pt-3">

  <p className="text-sm text-gray-300">
    Yuanita Kristin
  </p>

  <p className="text-xs text-gray-500">
    Sie. Bina Lomba
  </p>

</div>
    </div>

  </div>

</div>
  </section>
)}
      <section className="px-5 md:px-10 py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="flex flex-col items-center text-center mb-14">
          <img src={logo} alt={title} className="w-28 h-28 object-contain mb-5" />

          <h2 className="text-3xl md:text-5xl font-bold text-yellow-500">
            {title}
          </h2>

          <p className="text-gray-300 mt-3">{school}</p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#struktur" className="px-5 py-3 rounded-xl bg-yellow-500 text-black font-semibold">
              Struktur
            </a>
            <a href="#absensi-unit" className="px-5 py-3 rounded-xl bg-red-900 text-white font-semibold">
              Absensi
            </a>
            <a href="#galeri-unit" className="px-5 py-3 rounded-xl bg-zinc-800 text-white font-semibold">
              Galeri
            </a>
          </div>
        </div>

        <section id="struktur" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(([jabatan, names], index) => (
            <StrukturCard key={index} title={jabatan} names={names} />
          ))}
        </section>
      </section>

      <section id="absensi-unit" className="px-5 md:px-10 py-20 bg-black">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 text-center mb-4">
          ABSENSI {title}
        </h2>
        <p className="text-center text-gray-300">
          Nanti area ini jadi tempat input dan dashboard absensi khusus {school}.
        </p>
      </section>

      <section id="galeri-unit" className="px-5 md:px-10 py-20 bg-zinc-950">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 text-center mb-4">
          GALERI {title}
        </h2>
        <p className="text-center text-gray-300">
          Nanti galeri ini khusus dokumentasi {school}.
        </p>
      </section>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState("home")

  if (page === "psp") {
    return (
      <UnitPage
        logo="/psp-sparta.png"
        title="PSP SPARTA"
        school="SMA Negeri 90 Jakarta"
        data={pspSparta}
        onBack={() => setPage("home")}
      />
    )
  }

  if (page === "sparta31") {
    return (
      <UnitPage
        logo="/sparta31.png"
        title="SPARTA 31"
        school="SMP Negeri 31 Jakarta"
        data={sparta31}
        onBack={() => setPage("home")}
      />
    )
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/sparta-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        <div className="relative z-10">
          <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center px-5 md:px-10 py-6 border-b border-red-900/60 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <img src="/sparta-logo.png" alt="SPARTA Logo" className="w-12 h-12 object-contain" />
              <h1 className="text-2xl md:text-3xl font-bold tracking-[6px] text-yellow-500">
                SPARTA
              </h1>
            </div>

            <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-lg">
              <li><a href="#" className="hover:text-yellow-500 transition">Home</a></li>
              <li><a href="#unit" className="hover:text-yellow-500 transition">Unit</a></li>
              <li><a href="#galeri" className="hover:text-yellow-500 transition">Galeri</a></li>
              <li><a href="#absensi" className="hover:text-yellow-500 transition">Absensi</a></li>
            </ul>
          </motion.nav>

          <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-5">
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-[6px] md:tracking-[12px] text-yellow-500 drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]"
            >
              SPARTA
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-2xl mt-6"
            >
              Satuan Paskibra Jakarta
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-4 italic text-gray-200 text-base md:text-lg"
            >
              “Sparta untuk Indonesia”
            </motion.p>

            <motion.a
              href="#unit"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-7 md:px-10 py-3 md:py-4 bg-red-900 hover:bg-red-700 transition rounded-xl text-base md:text-lg shadow-lg shadow-red-900/40"
            >
              ENTER SPARTA
            </motion.a>
          </section>
        </div>
      </section>

      <section id="unit" className="px-5 md:px-10 py-20 md:py-24 bg-gradient-to-b from-black to-zinc-950">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-center text-yellow-500 mb-4"
        >
          SPARTA CENTER
        </motion.h2>

        <p className="text-center text-gray-300 mb-12">
          Pilih ruang unit untuk melihat struktur, absensi, dan galeri masing-masing sekolah.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-red-950 to-black border border-yellow-500/30 rounded-3xl p-7 md:p-10 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <img src="/psp-sparta.png" alt="PSP SPARTA" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-yellow-500">PSP SPARTA</h3>
                <p className="text-gray-300">SMA Negeri 90 Jakarta</p>
              </div>
            </div>

            <button
              onClick={() => setPage("psp")}
              className="mt-8 px-6 py-3 bg-yellow-500 text-black rounded-xl font-semibold hover:scale-105 transition"
            >
              MASUK RUANG 90
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-zinc-900 to-black border border-white/20 rounded-3xl p-7 md:p-10 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <img src="/sparta31.png" alt="SPARTA 31" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">SPARTA 31</h3>
                <p className="text-gray-300">SMP Negeri 31 Jakarta</p>
              </div>
            </div>

            <button
              onClick={() => setPage("sparta31")}
              className="mt-8 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
            >
              MASUK RUANG 31
            </button>
          </motion.div>
        </div>
      </section>

      <section id="galeri" className="px-5 md:px-10 py-20 md:py-24 bg-black">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-yellow-500 mb-4">
          GALERI SPARTA
        </h2>
        <p className="text-center text-gray-300">
          Galeri utama SPARTA. Galeri khusus sekolah ada di ruang masing-masing.
        </p>
      </section>

      <section id="absensi" className="px-5 md:px-10 py-20 md:py-24 bg-zinc-950">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-yellow-500 mb-4">
          ABSENSI SPARTA
        </h2>
        <p className="text-center text-gray-300">
          Sistem absensi pusat. Nanti datanya dipisah antara PSP SPARTA dan SPARTA 31.
        </p>
      </section>
    </div>
  )
}