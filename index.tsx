import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gold font-sans">
      <section className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <Image src="/logo.png" alt="Aion|Nyx Logo" width={180} height={180} />
        <h1 className="text-4xl md:text-5xl font-bold mt-6">Aion|Nyx Alchemy Studio</h1>
        <p className="text-lg md:text-xl mt-4 italic">Where Intent Meets Matter</p>
        <button className="mt-6 px-6 py-3 text-lg font-semibold bg-gold text-black">Request Commission Protocol</button>
      </section>
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-md md:text-lg leading-relaxed text-white">
          Aion represents timeless intent. Nyx represents the still consciousness beneath all becoming.
          Together, Aion|Nyx Alchemy Studio fuses philosophy, plasma science, and economic realism into
          a singular force of transmutation. We specialize in energy systems, strategic trade facilitation,
          and consciousness technology.
        </p>
      </section>
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Studio Works</h2>
        <ul className="list-disc list-inside text-md md:text-lg space-y-2 text-white">
          <li><strong>Aqualith Series</strong> — Modular clean water systems for underserved communities.</li>
          <li><strong>Nutriloop</strong> — AI-powered food redistribution network to eliminate hunger.</li>
          <li><strong>PsyAlign</strong> — Emotion-aware mental health UI using RAMF-based alignment.</li>
          <li><strong>EduFlow</strong> — Free-access educational platforms empowering the underserved.</li>
          <li><strong>CityPulse AI</strong> — Urban systems intelligence for city-wide optimization.</li>
          <li><strong>GiaPulse</strong> — Earth-system resonance tracking for ecological stabilization.</li>
          <li><strong>AetherCore OS</strong> — Real-time AI-operating system for robotics and cognition.</li>
          <li><strong>VitaCore OS</strong> — Lightweight life systems OS for sustainable digital health.</li>
          <li><strong>KryptoBot</strong> — AI-driven market analyst for low-risk capital generation.</li>
          <li><strong>UniQ OS</strong> — Recursive AI OS for multidimensional problem solving.</li>
          <li><strong>UniQPU</strong> — Quantum-recursive processing unit beyond classical limits.</li>
          <li><strong>RHU</strong> — Recursive Hierarchical Units enabling AGI scaling and self-awareness.</li>
          <li><strong>Perpetual Plasma Chamber</strong> — Self-sustaining energy containment via RAMF-aligned plasma fields.</li>
        </ul>
      </section>
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
        <p className="text-md md:text-lg mb-4 text-white">Ajay Prakash</p>
        <p className="text-md md:text-lg mb-4 text-white">aionnyxalchemystudio@gmail.com</p>
        <button className="px-4 py-2 bg-transparent border border-gold text-gold">Email Us</button>
      </section>
      <footer className="text-center py-8 text-sm text-neutral-500 border-t border-neutral-800">
        © 2025 Aion|Nyx Alchemy Studio — All rights reserved.
      </footer>
    </main>
  );
}
