import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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

{title === "PSP SPARTA" && (
  <section className="px-5 md:px-10 py-16">

    <h2 className="text-5xl font-bold text-center text-yellow-500 mb-20">
      PEMBINA & PELATIH PSP SPARTA
    </h2>

    <div className="grid md:grid-cols-2 gap-16 mb-24">
      <div className="flex flex-col items-center group">
        <div className="h-96 flex items-end justify-center">
          <img
            src="/pengurus90/desi-indah-kurniasari.png"
            alt="Desi Indah Kurniasari"
            className="max-h-full object-contain transition duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-bold mt-4">Desi Indah Kurniasari</h3>
        <p className="text-yellow-500">Pembina</p>
      </div>

      <div className="flex flex-col items-center group">
        <div className="h-96 flex items-end justify-center">
          <img
            src="/pengurus90/fitra-akbar.png"
            alt="Fitra Akbar"
            className="max-h-full object-contain transition duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="text-2xl font-bold mt-4">Fitra Akbar</h3>
        <p className="text-yellow-500">Pelatih</p>
      </div>
    </div>

<h2 className="text-5xl font-bold text-center text-yellow-500 mb-20">
  BADAN PENGURUS HARIAN PSP SPARTA
</h2>

<div className="grid md:grid-cols-2 gap-16 mb-24">

  <div className="flex flex-col items-center group">
    <div className="h-[500] flex items-end justify-center">
      <img
        src="/pengurus90/alif-pratama-alghifari.png"
        alt="Alif Pratama Alghifari"
        className="max-h-full object-contain transition duration-500 group-hover:scale-110"
      />
    </div>

    <h3 className="text-2xl font-bold mt-4">
      Alif Pratama Alghifari
    </h3>

    <p className="text-yellow-500">
      Ketua
    </p>
  </div>

  <div className="flex flex-col items-center group">
    <div className="h-[500] flex items-end justify-center">
      <img
        src="/pengurus90/nazzah-sisilia-shafa.png"
        alt="Nazzah Sisilia Shafa"
        className="max-h-full object-contain transition duration-500 group-hover:scale-110"
      />
    </div>

    <h3 className="text-2xl font-bold mt-4">
      Nazzah Sisilia Shafa
    </h3>

    <p className="text-yellow-500">
      Wakil
    </p>
  </div>

</div>

<div className="grid md:grid-cols-2 gap-16 mb-24">

  <div className="flex flex-col items-center group">
    <div className="h-96 flex items-end justify-center">
      <img
        src="/pengurus90/rizka-farisha.png"
        alt="Rizka Farisha"
        className="max-h-full object-contain transition duration-500 group-hover:scale-110"
      />
    </div>

    <h3 className="text-2xl font-bold mt-4">
      Rizka Farisha
    </h3>

    <p className="text-yellow-500">
      Koor. Sekretaris
    </p>

    <div className="mt-6 border-t border-yellow-500/20 pt-6 flex flex-col items-center">
  <div className="h-72 flex items-end justify-center">
    <img
      src="/pengurus90/lanika-rianti-putri.png"
      alt="Lanika Rianti Putri"
      className="max-h-full object-contain transition duration-500 group-hover:scale-110"
    />
  </div>

  <h4 className="text-lg font-semibold mt-3">
    Lanika Rianti Putri
  </h4>

  <p className="text-gray-400 text-sm">
    Sekretaris
  </p>
</div>
  </div>

  <div className="flex flex-col items-center group">
    <div className="h-96 flex items-end justify-center">
      <img
        src="/pengurus90/dyah-putri-ramadhani.png"
        alt="Dyah Putri Ramadhani"
        className="max-h-full object-contain transition duration-500 group-hover:scale-110"
      />
    </div>

    <h3 className="text-2xl font-bold mt-4">
      Dyah Putri Ramadhani
    </h3>

    <p className="text-yellow-500">
      Koor. Bendahara
    </p>

    <div className="mt-6 border-t border-yellow-500/20 pt-6 flex flex-col items-center">
  <div className="h-72 flex items-end justify-center">
    <img
      src="/pengurus90/jihan-halwa-raisah.png"
      alt="Jihan Halwa Raisah"
      className="max-h-full object-contain transition duration-500 group-hover:scale-110"
    />
  </div>

  <h4 className="text-lg font-semibold mt-3">
    Jihan Halwa Raisah
  </h4>

  <p className="text-gray-400 text-sm">
    Bendahara
  </p>
</div>
  </div>

</div>
<div className="w-64 h-px bg-yellow-500/30 mx-auto my-20">
</div>
    <h2 className="text-5xl font-bold text-center text-yellow-500 mb-20">
      KOORDINATOR BIDANG PSP SPARTA
    </h2>

    <div className="grid md:grid-cols-2 gap-10 mb-24">
      <div className="bg-zinc-950/70 border border-yellow-500/20 rounded-3xl p-8 flex flex-col items-center transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/60">

  <h3 className="text-3xl font-bold text-yellow-500 mb-8 drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]">
    HUBUNGAN MASYARAKAT
  </h3>

  <div className="flex flex-col items-center group">
    <div className="h-96 flex items-end justify-center">
      <img
        src="/pengurus90/rahmalia-arunita.png"
        alt="Rahmalia Arunita"
        className="max-h-full object-contain transition duration-500 group-hover:scale-105"
      />
    </div>

    <h4 className="text-xl font-bold mt-4">
      Rahmalia Arunita
    </h4>

    <p className="text-yellow-500">
      Koor. Hubungan Masyarakat
    </p>
  </div>

  <div className="w-full border-t border-yellow-500/20 my-8"></div>

  <div className="grid grid-cols-2 gap-6">

    <div className="flex flex-col items-center">
      <img src="/pengurus90/zharoh-cantika-lestari.png" alt="Zharoh Cantika Lestari" className="h-52 object-contain" />
      <h5 className="text-sm font-semibold mt-2 text-center">Zharoh Cantika Lestari</h5>
      <p className="text-xs text-gray-400">Sie. Hubungan Masyarakat</p>
    </div>

    <div className="flex flex-col items-center">
      <img src="/pengurus90/andrea-gloria-utomo.png" alt="Andrea Gloria Utomo" className="h-52 object-contain" />
      <h5 className="text-sm font-semibold mt-2 text-center">Andrea Gloria Utomo</h5>
      <p className="text-xs text-gray-400">Sie. Hubungan Masyarakat</p>
    </div>

    <div className="flex flex-col items-center">
      <img src="/pengurus90/callysta-agni-dzakiyyah.png" alt="Callysta Agni Dzakiyyah" className="h-52 object-contain" />
      <h5 className="text-sm font-semibold mt-2 text-center">Callysta Agni Dzakiyyah</h5>
      <p className="text-xs text-gray-400">Sie. Hubungan Masyarakat</p>
    </div>

    <div className="flex flex-col items-center">
      <img src="/pengurus90/aqeela-putri-arisy.png" alt="Aqeela Putri Arisy" className="h-52 object-contain" />
      <h5 className="text-sm font-semibold mt-2 text-center">Aqeela Putri Arisy</h5>
      <p className="text-xs text-gray-400">Sie. Hubungan Masyarakat</p>
    </div>

  </div>

</div>

      <div className="bg-zinc-950/70 border border-yellow-500/20 rounded-3xl p-8 flex flex-col items-center transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/60">

  <h3 className="text-3xl font-bold text-yellow-500 mb-8 drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]">
    BINA LATIHAN
  </h3>

  <div className="flex flex-col items-center group">
    <div className="h-96 flex items-end justify-center">
      <img
        src="/pengurus90/morend-decca-raya.png"
        alt="Morend Decca Raya"
        className="max-h-full object-contain transition duration-500 group-hover:scale-105"
      />
    </div>

    <h4 className="text-xl font-bold mt-4">
      Morend Decca Raya
    </h4>

    <p className="text-yellow-500">
      Koor. Bina Latihan
    </p>
  </div>

  <div className="w-full border-t border-yellow-500/20 my-8"></div>

  <div className="grid grid-cols-2 gap-6">

    <div className="flex flex-col items-center">
      <img src="/pengurus90/ladzi-jaya-syuhada.png" alt="Ladzi Jaya Syuhada" className="h-52 object-contain" />
      <h5 className="text-sm font-semibold mt-2 text-center">Ladzi Jaya Syuhada</h5>
      <p className="text-xs text-gray-400">Sie. Bina Latihan</p>
    </div>

    <div className="flex flex-col items-center">
      <img src="/pengurus90/nindya-pratiwi.png" alt="Nindya Pratiwi" className="h-52 object-contain" />
      <h5 className="text-sm font-semibold mt-2 text-center">Nindya Pratiwi</h5>
      <p className="text-xs text-gray-400">Sie. Bina Latihan</p>
    </div>

    <div className="flex flex-col items-center col-span-2">
      <img src="/pengurus90/ridho-firdaus.png" alt="Ridho Firdaus" className="h-52 object-contain" />
      <h5 className="text-sm font-semibold mt-2 text-center">Ridho Firdaus</h5>
      <p className="text-xs text-gray-400">Sie. Bina Latihan</p>
    </div>

  </div>

</div>

      <div className="bg-zinc-950/70 border border-yellow-500/20 rounded-3xl p-8 flex flex-col items-center transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/60">

  <h3 className="text-3xl font-bold text-yellow-500 mb-8 drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]">
    PERLENGKAPAN
  </h3>

  <div className="flex flex-col items-center group">
    <div className="h-96 flex items-end justify-center">
      <img
        src="/pengurus90/marsha-novalianti.png"
        alt="Marsha Novalianti"
        className="max-h-full object-contain transition duration-500 group-hover:scale-105"
      />
    </div>

    <h4 className="text-xl font-bold mt-4">
      Marsha Novalianti
    </h4>

    <p className="text-yellow-500">
      Koor. Perlengkapan
    </p>
  </div>

  <div className="w-full border-t border-yellow-500/20 my-8"></div>

  <div className="grid grid-cols-2 gap-6">

    <div className="flex flex-col items-center">
      <img src="/pengurus90/dinda-aristi.png" alt="Dinda Aristi" className="h-52 object-contain" />
      <h5 className="text-sm font-semibold mt-2 text-center">Dinda Aristi</h5>
      <p className="text-xs text-gray-400">Sie. Perlengkapan</p>
    </div>

    <div className="flex flex-col items-center">
      <img src="/pengurus90/rizky-aditya-pratama.png" alt="Rizky Aditya Pratama" className="h-52 object-contain" />
      <h5 className="text-sm font-semibold mt-2 text-center">Rizky Aditya Pratama</h5>
      <p className="text-xs text-gray-400">Sie. Perlengkapan</p>
    </div>

  </div>

</div>

      <div className="bg-zinc-950/70 border border-yellow-500/20 rounded-3xl p-8 flex flex-col items-center transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500/60">

  <h3 className="text-3xl font-bold text-yellow-500 mb-8 drop-shadow-[0_0_12px_rgba(234,179,8,0.7)]">
    PERLOMBAAN
  </h3>

  <div className="flex flex-col items-center group">
    <div className="h-96 flex items-end justify-center">
      <img
        src="/pengurus90/putri-violla-ramadhani.png"
        alt="Putri Violla Ramadhani"
        className="max-h-full object-contain transition duration-500 group-hover:scale-105"
      />
    </div>

    <h4 className="text-xl font-bold mt-4">
      Putri Violla Ramadhani
    </h4>

    <p className="text-yellow-500">
      Koor. Perlombaan
    </p>
  </div>

  <div className="w-full border-t border-yellow-500/20 my-8"></div>

  <div className="grid grid-cols-2 gap-6">

    <div className="flex flex-col items-center">
      <img src="/pengurus90/daffa-nur-ramadhan.png" alt="Daffa Nur Ramadhan" className="h-52 object-contain" />
      <h5 className="text-sm font-semibold mt-2 text-center">Daffa Nur Ramadhan</h5>
      <p className="text-xs text-gray-400">Sie. Perlombaan</p>
    </div>

    <div className="flex flex-col items-center">
      <img src="/pengurus90/ayatusi-nur-syifa.png" alt="Ayatusi Nur Syifa" className="h-52 object-contain" />
      <h5 className="text-sm font-semibold mt-2 text-center">Ayatusi Nur Syifa</h5>
      <p className="text-xs text-gray-400">Sie. Perlombaan</p>
    </div>

    <div className="flex flex-col items-center col-span-2">
      <img src="/pengurus90/muhammad-nuruz-zulrafif.png" alt="Muhammad Nuruz Zulrafif" className="h-52 object-contain" />
      <h5 className="text-sm font-semibold mt-2 text-center">Muhammad Nuruz Zulrafif</h5>
      <p className="text-xs text-gray-400">Sie. Perlombaan</p>
    </div>

  </div>

</div>
    </div>

  </section>
)}

{title === "SPARTA 31" && (
  <section className="px-5 md:px-10 py-16">
<h2 className="text-5xl font-bold text-center text-yellow-500 mb-16">
  PEMBINA & PELATIH SPARTA 31
</h2>

<div className="grid md:grid-cols-2 gap-16 mb-24">

  <div className="flex flex-col items-center group">
    <div className="h-96 flex items-end justify-center">
      <img
        src="/pengurus31/martini.png"
        alt="Martini"
        className="max-h-full object-contain transition duration-500 group-hover:scale-110"
      />
    </div>

```
<h3 className="text-2xl font-bold mt-4">
  Martini
</h3>

<p className="text-yellow-500">
  Pembina
</p>
```

  </div>

  <div className="flex flex-col items-center group">
    <div className="h-96 flex items-end justify-center">
      <img
        src="/pengurus31/fitra-akbar.png"
        alt="Fitra Akbar"
        className="max-h-full object-contain transition duration-500 group-hover:scale-110"
      />
    </div>

```
<h3 className="text-2xl font-bold mt-4">
  Fitra Akbar
</h3>

<p className="text-yellow-500">
  Pelatih
</p>
```

  </div>

</div>

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
<div className="mt-6 border-t border-yellow-500/20 pt-6 flex flex-col items-center">

  <div className="h-64 flex items-end justify-center">
    <img
      src="/pengurus31/nazwa-fauziyah.png"
      alt="Nazwa Fauziyah"
      className="max-h-full object-contain"
    />
  </div>

  <h4 className="text-lg font-semibold mt-3">
    Nazwa Fauziyah
  </h4>

  <p className="text-gray-400 text-sm">
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
        <div className="mt-6 border-t border-yellow-500/20 pt-6 flex flex-col items-center">

  <div className="h-64 flex items-end justify-center">
    <img
      src="/pengurus31/feenezia-malilah.png"
      alt="Feenezia Malilah"
      className="max-h-full object-contain"
    />
  </div>

  <h4 className="text-lg font-semibold mt-3">
    Feenezia Malilah
  </h4>

  <p className="text-gray-400 text-sm">
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

<div className="mt-6 border-t border-yellow-500/20 pt-6">

  <div className="grid grid-cols-2 gap-4">

    <div className="flex flex-col items-center">
      <div className="h-48 flex items-end justify-center">
        <img
          src="/pengurus31/annisa-isna-kusuma.png"
          alt="Annisa Isna Kusuma"
          className="max-h-full object-contain"
        />
      </div>

      <h4 className="text-sm font-semibold mt-2 text-center">
        Annisa Isna Kusuma
      </h4>

      <p className="text-gray-400 text-xs">
        Sie. Logistik
      </p>
    </div>

    <div className="flex flex-col items-center">
      <div className="h-48 flex items-end justify-center">
        <img
          src="/pengurus31/cahaya-khayla-putri.png"
          alt="Cahaya Khayla Putri"
          className="max-h-full object-contain"
        />
      </div>

      <h4 className="text-sm font-semibold mt-2 text-center">
        Cahaya Khayla Putri
      </h4>

      <p className="text-gray-400 text-xs">
        Sie. Logistik
      </p>
    </div>

  </div>

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

<div className="mt-6 border-t border-yellow-500/20 pt-6 flex flex-col items-center">

  <div className="h-56 flex items-end justify-center">
    <img
      src="/pengurus31/syakeela-lyvia.png"
      alt="Syakeela Lyvia"
      className="max-h-full object-contain scale-110"
    />
  </div>

  <h4 className="text-lg font-semibold mt-2">
    Syakeela Lyvia
  </h4>

  <p className="text-gray-400 text-sm">
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

<div className="mt-6 border-t border-yellow-500/20 pt-6 flex flex-col items-center">

  <div className="h-56 flex items-end justify-center">
    <img
      src="/pengurus31/yuanita-kristin.png"
      alt="Yuanita Kristin"
      className="max-h-full object-contain scale-110"
    />
  </div>

  <h4 className="text-lg font-semibold mt-2">
    Yuanita Kristin
  </h4>

  <p className="text-gray-400 text-sm">
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
const anggota90 = [
  { nama: "Alif Pratama Alghifari", kelas: "11", jk: "Laki-laki", ttl: "-" },
  { nama: "Cut Aura Vivian Hajar", kelas: "11", jk: "Perempuan", ttl: "-" },
  { nama: "Daffa Nur Ramadhan", kelas: "11", jk: "Laki-laki", ttl: "-" },
  { nama: "Dyah Putri Ramadhani", kelas: "11", jk: "Perempuan", ttl: "-" },
  { nama: "Ladzi Jaya Syuhada", kelas: "11", jk: "Laki-laki", ttl: "-" },
  { nama: "Marsha Novalianti", kelas: "11", jk: "Perempuan", ttl: "-" },
  { nama: "Morend Decca Raya Kurniawan", kelas: "11", jk: "Laki-laki", ttl: "-" },
  { nama: "Muhammad Siddik Febriyan", kelas: "11", jk: "Laki-laki", ttl: "-" },
  { nama: "Nazah Sisilia Shafa", kelas: "11", jk: "Perempuan", ttl: "-" },
  { nama: "Nindya Pratiwi", kelas: "11", jk: "Perempuan", ttl: "-" },
  { nama: "Putri Violla Ramadhani", kelas: "11", jk: "Perempuan", ttl: "-" },
  { nama: "Rahmalia Arunita", kelas: "11", jk: "Perempuan", ttl: "-" },
  { nama: "Rizka Farisha", kelas: "11", jk: "Perempuan", ttl: "-" },

  { nama: "Afifah Zahra Widiari", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Agni Faustin Hafifa", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Andrea Gloria Utomo", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Aqeela Putri Arisy", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Ayatusi Nur Syifa", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Callysta Agni Dzakiyyah", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Diaz Latifah", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Dinda Aristi", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Fina Khairunnisa", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Jihan Halwa Raisah", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Khoirun Nisa Nur Azizah", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Lanika Rianti Putri", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Muhammad Nuruz Zulrafif", kelas: "10", jk: "Laki-laki", ttl: "-" },
  { nama: "Nazwa Novendria Azzahra", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Neysha Arnellita Prinadika", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Raisyah Aulia", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Ridho Firdaus", kelas: "10", jk: "Laki-laki", ttl: "-" },
  { nama: "Rizky Aditya Pratama", kelas: "10", jk: "Laki-laki", ttl: "-" },
  { nama: "Sekar Ayu Rahmanullah", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Syifa Nurhusna", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Syifa Syafitri Newal", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Zazkia Mega", kelas: "10", jk: "Perempuan", ttl: "-" },
  { nama: "Zharoh Cantika Lestari", kelas: "10", jk: "Perempuan", ttl: "-" },
]
const anggota31 = [
  {
    nama: "Anisa Isna Kusuma",
    kelas: "8B",
    jk: "Perempuan",
    ttl: "-",
  },
  {
    nama: "Annisa Azzahra",
    kelas: "8B",
    jk: "Perempuan",
    ttl: "-",
  },
  {
    nama: "Farhan Ardiansyah",
    kelas: "8H",
    jk: "Laki-laki",
    ttl: "-",
  },
  {
    nama: "Galang Fajaru Sya'baan",
    kelas: "8B",
    jk: "Laki-laki",
    ttl: "-",
  },
  {
    nama: "Hayyu Rofifah Kanesha Humaira",
    kelas: "8A",
    jk: "Perempuan",
    ttl: "-",
  },
  {
    nama: "Iffa Dwi Ramadhani",
    kelas: "8D",
    jk: "Perempuan",
    ttl: "-",
  },
  {
    nama: "Karla Aleena Ramadhani",
    kelas: "8G",
    jk: "Perempuan",
    ttl: "-",
  },
  {
    nama: "Nadine Felisya",
    kelas: "8D",
    jk: "Perempuan",
    ttl: "-",
  },
  {
    nama: "Nazwa Fauziyah",
    kelas: "8E",
    jk: "Perempuan",
    ttl: "-",
  },
  {
    nama: "Putri Sekar Ayu",
    kelas: "8H",
    jk: "Perempuan",
    ttl: "-",
  },
  {
    nama: "Rafael Al Fariji",
    kelas: "8G",
    jk: "Laki-laki",
    ttl: "-",
  },
  {
    nama: "Rafli Affanka",
    kelas: "8D",
    jk: "Laki-laki",
    ttl: "-",
  },
  {
    nama: "Rajib Maula Asyfa",
    kelas: "8D",
    jk: "Laki-laki",
    ttl: "-",
  },
  {
    nama: "Safattamim Efendi",
    kelas: "8D",
    jk: "Laki-laki",
    ttl: "-",
  },
  {
    nama: "Salsa Safitry",
    kelas: "8A",
    jk: "Perempuan",
    ttl: "-",
  },
  {
    nama: "Syakeela Lyvia Azzalea Shagufta",
    kelas: "8H",
    jk: "Perempuan",
    ttl: "-",
  },
  {
    nama: "Tiara Putri",
    kelas: "8C",
    jk: "Perempuan",
    ttl: "-",
  },
  {
    nama: "Tsabit Fadhlan Arrazin",
    kelas: "8G",
    jk: "Laki-laki",
    ttl: "-",
  },
  {
    nama: "Tsabita Zanzabila",
    kelas: "8H",
    jk: "Perempuan",
    ttl: "-",
  },
  ,
{
  nama: "Ashillah Zahwa Wijanarko",
  kelas: "7F",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Assyifa Nazhirra",
  kelas: "7D",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Azzahra Kinar Setiawan",
  kelas: "7F",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Cahaya Khayla Putri",
  kelas: "7B",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Dita Indah Sari",
  kelas: "7B",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Feenezia Malilah Annabelle",
  kelas: "7D",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Gisella Putri Christianti",
  kelas: "7F",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Indah Jazylah",
  kelas: "7B",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Jihan Dwi N.",
  kelas: "7C",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Kayla Putri Achmad",
  kelas: "7D",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Khanza Kadhitya Sabrien",
  kelas: "7G",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Khanzzanah Khanza",
  kelas: "7G",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Maira Cherly Chantika",
  kelas: "7G",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Melia Putri Sabiya",
  kelas: "7F",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Muzahira",
  kelas: "7D",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Nayla Antin Damasari",
  kelas: "7B",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Quinta Cikal Anjani",
  kelas: "7B",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Raissa Isnaini Salsabila",
  kelas: "7D",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Rasyah Maulana Bilqhis",
  kelas: "7",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Regina Anastasya",
  kelas: "7D",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Rhaniaqyla Ramadhaselly",
  kelas: "7C",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Safa Malikha",
  kelas: "7B",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Saskia Kharisma Putri",
  kelas: "7A",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Shafira Putri J.",
  kelas: "7C",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Silvi Karina Dewi",
  kelas: "7E",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Yuanita Kristin",
  kelas: "7C",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Zahra Adiba Sabilla",
  kelas: "7A",
  jk: "Perempuan",
  ttl: "-",
},
{
  nama: "Zahra Aisyah Putrie",
  kelas: "7E",
  jk: "Perempuan",
  ttl: "-",
}
]
export default function App() {
  const [page, setPage] = useState("home")
  const [loading, setLoading] = useState(true)
  const [searchAnggota, setSearchAnggota] = useState("")
  const [filterKelas, setFilterKelas] = useState("Semua")

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 1800)

  return () => clearTimeout(timer)
}, [])

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
if (loading) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center">
      <motion.img
  src="/sparta-logo.png"
  alt="SPARTA"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.8 }}
  className="w-32 h-32 object-contain mb-6"
/>


      <h1 className="text-7xl font-bold tracking-[12px] text-yellow-500 drop-shadow-[0_0_30px_rgba(234,179,8,0.8)]">
        SPARTA
      </h1>

      <p className="mt-4 text-gray-300 tracking-[6px] text-sm md:text-base">
        MOLON LABE
        SPARTA NEVER FALLS
      </p>
      <motion.p
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.8 }}
>
 MOLON LABE • SPARTA NEVER FALLS
</motion.p>

      <div className="w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
  <motion.div
    className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 shadow-[0_0_15px_rgba(234,179,8,0.9)]"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 2 }}
  />
</div>
      </div>
  )
}
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
  if (page === "anggota31") {
    const filteredAnggota31 = anggota31
    .filter((anggota) =>
      anggota.nama.toLowerCase().includes(searchAnggota.toLowerCase())
  )
    .filter((anggota) =>
      filterKelas === "Semua" ? true : anggota.kelas.startsWith(filterKelas)
  )
  return (
    <div className="bg-black text-white min-h-screen px-5 md:px-10 py-10">
      <button
        onClick={() => setPage("home")}
        className="text-yellow-500 hover:text-white transition mb-10"
      >
        ← Kembali ke SPARTA Center
      </button>

      <h1
        className="text-4xl md:text-6xl font-bold text-yellow-500 text-center mb-12">
        DATA ANGGOTA SPARTA 31
      </h1>
      <input
        type="text"
        placeholder="Cari nama anggota..."
        onChange={(e) => setSearchAnggota(e.target.value)}
        className="w-full max-w-xl mx-auto block mb-10 px-5 py-4 rounded-xl bg-zinc-900 border border-yellow-500/30 text-white outline-none focus:border-yellow-500"
/>
<div className="grid grid-cols-3 gap-4 mb-8">
  <div className="bg-zinc-950 border border-yellow-500/20 rounded-2xl p-4 text-center">
    <h3 className="text-3xl font-bold text-yellow-500">
      {filteredAnggota31.length}
    </h3>
    <p className="text-sm text-gray-300">Total</p>
  </div>

  <div className="bg-zinc-950 border border-yellow-500/20 rounded-2xl p-4 text-center">
    <h3 className="text-3xl font-bold text-yellow-500">
      {filteredAnggota31.filter(a => a.jk === "Laki-laki").length}
    </h3>
    <p className="text-sm text-gray-300">Laki-laki</p>
  </div>

  <div className="bg-zinc-950 border border-yellow-500/20 rounded-2xl p-4 text-center">
    <h3 className="text-3xl font-bold text-yellow-500">
      {filteredAnggota31.filter(a => a.jk === "Perempuan").length}
    </h3>
    <p className="text-sm text-gray-300">Perempuan</p>
  </div>
</div>

<div className="flex justify-center gap-3 mb-10 flex-wrap">
  <button
   onClick={() => setFilterKelas("Semua")}
   className={`px-4 py-2 rounded-lg ${
    filterKelas === "Semua"
    ? "bg-yellow-500 text-black"
        : "bg-zinc-900 border border-yellow-500/30 text-white"
    }`}
  >
    Semua
  </button>

  <button
    onClick={() => setFilterKelas("7")}
    className={`px-4 py-2 rounded-lg ${
      filterKelas === "7"
        ? "bg-yellow-500 text-black"
        : "bg-zinc-900 border border-yellow-500/30 text-white"
    }`}
  >
    Kelas 7
  </button>

  <button
    onClick={() => setFilterKelas("8")}
    className={`px-4 py-2 rounded-lg ${
      filterKelas === "8"
        ? "bg-yellow-500 text-black"
        : "bg-zinc-900 border border-yellow-500/30 text-white"
    }`}
  >
    Kelas 8
  </button>
</div>

      <div className="grid md:grid-cols-3 gap-6">
        {anggota31
       .filter((anggota) =>
        anggota.nama.toLowerCase().includes(searchAnggota.toLowerCase())
)
       .filter((anggota) =>
        filterKelas === "Semua" ? true : anggota.kelas.startsWith(filterKelas)
)
       .map((anggota, index) => (
          <div
            key={index}
            className="bg-zinc-950 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/60 transition"
          >
            <h3 className="text-xl font-bold text-yellow-500">
              {anggota.nama}
            </h3>

            <p className="text-gray-300 mt-3">
              Kelas: {anggota.kelas}
            </p>

            <p className="text-gray-300">
              Jenis Kelamin: {anggota.jk}
            </p>

            <p className="text-gray-400 text-sm mt-3">
              TTL: {anggota.ttl}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
if (page === "anggota90") {
  const filteredAnggota90 = anggota90
  .filter((anggota) =>
      anggota.nama.toLowerCase().includes(searchAnggota.toLowerCase())
    )
    .filter((anggota) =>
      filterKelas === "Semua" ? true : anggota.kelas.startsWith(filterKelas)
    )
  return (
    <div className="bg-black text-white min-h-screen px-5 md:px-10 py-10">
      <button
        onClick={() => setPage("home")}
        className="text-yellow-500 hover:text-white transition mb-10"
      >
        ← Kembali ke SPARTA Center
      </button>

      <h1
        className="text-4xl md:text-6xl font-bold text-yellow-500 text-center mb-12">
        DATA ANGGOTA PSP SPARTA
      </h1>
      <input
        type="text"
        placeholder="Cari nama anggota..."

        onChange={(e) => setSearchAnggota(e.target.value)}
        className="w-full max-w-xl mx-auto block mb-10 px-5 py-4 rounded-xl bg-zinc-900 border border-yellow-500/30 text-white outline-none focus:border-yellow-500"
/>
<div className="grid grid-cols-3 gap-4 mb-8">
  <div className="bg-zinc-950 border border-yellow-500/20 rounded-2xl p-4 text-center">
    <h3 className="text-3xl font-bold text-yellow-500">
      {filteredAnggota90.length}
    </h3>
    <p className="text-sm text-gray-300">
      Total
    </p>
  </div>

  <div className="bg-zinc-950 border border-yellow-500/20 rounded-2xl p-4 text-center">
    <h3 className="text-3xl font-bold text-yellow-500">
      {filteredAnggota90.filter(a => a.jk === "Laki-laki").length}
    </h3>
    <p className="text-sm text-gray-300">
      Laki-laki
    </p>
  </div>

  <div className="bg-zinc-950 border border-yellow-500/20 rounded-2xl p-4 text-center">
    <h3 className="text-3xl font-bold text-yellow-500">
      {filteredAnggota90.filter(a => a.jk === "Perempuan").length}
    </h3>
    <p className="text-sm text-gray-300">
      Perempuan
    </p>
  </div>
</div>
<div className="flex justify-center gap-3 mb-10 flex-wrap">
  <button
   onClick={() => setFilterKelas("Semua")}
   className={`px-4 py-2 rounded-lg ${
    filterKelas === "Semua"
    ? "bg-yellow-500 text-black"
        : "bg-zinc-900 border border-yellow-500/30 text-white"
    }`}
  >
    Semua
  </button>

  <button
    onClick={() => setFilterKelas("10")}
    className={`px-4 py-2 rounded-lg ${
      filterKelas === "7"
        ? "bg-yellow-500 text-black"
        : "bg-zinc-900 border border-yellow-500/30 text-white"
    }`}
  >
    Kelas 10
  </button>

  <button
    onClick={() => setFilterKelas("11")}
    className={`px-4 py-2 rounded-lg ${
      filterKelas === "8"
        ? "bg-yellow-500 text-black"
        : "bg-zinc-900 border border-yellow-500/30 text-white"
    }`}
  >
    Kelas 11
  </button>
</div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredAnggota90.map((anggota, index) => (
          <div
            key={index}
            className="bg-zinc-950 border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/60 transition"
          >
            <h3 className="text-xl font-bold text-yellow-500">
              {anggota.nama}
            </h3>

            <p className="text-gray-300 mt-3">
              Kelas: {anggota.kelas}
            </p>

            <p className="text-gray-300">
              Jenis Kelamin: {anggota.jk}
            </p>

            <p className="text-gray-400 text-sm mt-3">
              TTL: {anggota.ttl}
            </p>
          </div>
        ))}
      </div>
    </div>
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
           whileHover={{
           scale: 1.05,
           y: -10,
           }}
            className="bg-gradient-to-br from-red-950 to-black border border-yellow-500/30 rounded-3xl p-7 md:p-10 shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500"
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

    <button
      onClick={() => setPage("anggota90")}
      className="mt-4 px-6 py-3 border border-yellow-500/30 text-yellow-500 rounded-xl font-semibold hover:bg-yellow-500 hover:text-black transition"
>
    DATA ANGGOTA 90
    </button>

      </motion.div>

          <motion.div
           whileHover={{
           scale: 1.05,
           y: -10,
           }}
            className="bg-gradient-to-br from-zinc-900 to-black border border-white/20 rounded-3xl p-7 md:p-10 shadow-2xl hover:shadow-white/30 transition-all duration-500"
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
              className="mt-8 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition">

              MASUK RUANG 31
             </button>

             <button
             onClick={() => setPage("anggota31")}
             className="mt-4 px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white hover:text-black transition"
>
  DATA ANGGOTA 31
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

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-yellow-500 text-black w-12 h-12 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        ↑
      </button>

    </div>
  )
}