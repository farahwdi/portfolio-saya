// 1. IMPORT: tambah baris baru di sini bila buat bahagian baru
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Education from "./components/Education";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";

export default function Page() {
  return (
    // Warna latar belakang dan warna teks seluruh laman
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Bar menu di atas (edit di Navbar.js) */}
      <Navbar />
      {/* Lebar kandungan laman: tukar max-w-5xl untuk lebih sempit/luas */}
      <main className="mx-auto max-w-5xl px-4">
        {/* 2. BAHAGIAN: susunan di sini = susunan di laman */}
        <Hero />
        <About />
        <Experience />
        <Project />
        <Education />
        <Certificate />
        <Contact />
      </main>
    </div>
  );
}