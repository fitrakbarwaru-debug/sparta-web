import { motion } from "framer-motion"

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

function StrukturSection({ id, logo, title, school, data }) {
  return (
    <section id={id} className="px-5 md:px-10 py-20 md:py-24 bg-black">
      <div className="flex flex-col items-center text-center mb-14">
        <img src={logo} alt={title} className="w-24 h-24 object-contain mb-5" />
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-500">
          {title}
        </h2>
        <p className="text-gray-300 mt-3">{school}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(([jabatan, names], index) => (
          <StrukturCard key={index} title={jabatan} names={names} />
        ))}
      </div>
    </section>
  )
}

export default function App() {
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
          className="text-3xl md:text-5xl font-bold text-center text-yellow-500 mb-12 md:mb-16"
        >
          UNIT SPARTA
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-red-950 to-black border border-yellow-500/30 rounded-3xl p-7 md:p-10 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <img src="/psp-sparta.png" alt="PSP SPARTA" className="w-16 h-16 object-contain" />
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-500">SMA NEGERI 90</h3>
            </div>

            <p className="mt-6 text-gray-300 leading-8 text-sm md:text-base">
              PSP SPARTA — SMA Negeri 90 Jakarta.
            </p>

            <a href="#pengurus90" className="inline-block mt-8 px-6 py-3 bg-yellow-500 text-black rounded-xl font-semibold hover:scale-105 transition">
              LIHAT STRUKTUR
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-zinc-900 to-black border border-white/20 rounded-3xl p-7 md:p-10 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <img src="/sparta31.png" alt="SPARTA 31" className="w-16 h-16 object-contain" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">SMP NEGERI 31</h3>
            </div>

            <p className="mt-6 text-gray-300 leading-8 text-sm md:text-base">
              SPARTA 31 — SMP Negeri 31 Jakarta.
            </p>

            <a href="#pengurus31" className="inline-block mt-8 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">
              LIHAT STRUKTUR
            </a>
          </motion.div>
        </div>
      </section>

      <StrukturSection
        id="pengurus90"
        logo="/psp-sparta.png"
        title="STRUKTUR PSP SPARTA"
        school="SMA Negeri 90 Jakarta"
        data={pspSparta}
      />

      <StrukturSection
        id="pengurus31"
        logo="/sparta31.png"
        title="STRUKTUR SPARTA 31"
        school="SMP Negeri 31 Jakarta"
        data={sparta31}
      />

      <section id="galeri" className="px-5 md:px-10 py-20 md:py-24 bg-zinc-950">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-center text-yellow-500 mb-4"
        >
          GALERI SPARTA
        </motion.h2>

        <p className="text-center text-gray-300 text-sm md:text-base">
          Dokumentasi latihan, lomba, formasi, dan momen kebersamaan SPARTA.
        </p>
      </section>

      <section id="absensi" className="px-5 md:px-10 py-20 md:py-24 bg-black">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-center text-yellow-500 mb-4"
        >
          ABSENSI SPARTA
        </motion.h2>

        <p className="text-center text-gray-300 text-sm md:text-base">
          Preview data absensi anggota SPARTA.
        </p>
      </section>

    </div>
  )
} 