import { useState } from "react";
import "../App.css";
import circuitImage from "../assets/circuit.png";

export default function Home() {
  const [isOutlineOpen, setIsOutlineOpen] = useState(false);

  return (
    <div className="bg-background text-on-surface font-body antialiased min-h-screen flex flex-col md:flex-row">
      <button
        aria-hidden={!isOutlineOpen}
        aria-label="Close outline"
        className={`md:hidden fixed inset-0 bg-slate-900/40 z-40 transition-opacity ${
          isOutlineOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOutlineOpen(false)}
        type="button"
      />

      <nav
        aria-hidden={!isOutlineOpen}
        id="mobile-outline"
        className={`md:hidden fixed top-0 right-0 h-screen w-64 p-6 bg-slate-50 text-slate-700 font-mono text-xs tracking-tight border-l border-slate-200 z-50 transition-transform duration-300 ${
          isOutlineOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
          <div className="font-serif text-2xl">OUTLINE</div>
          <button
            aria-label="Close outline"
            className="text-slate-600 hover:bg-slate-100 p-2"
            onClick={() => setIsOutlineOpen(false)}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <ul className="flex flex-col gap-1 mt-8">
          <li>
            <a
              className="flex items-center gap-3 px-4 py-3 bg-slate-200 text-slate-900 font-bold hover:bg-slate-100 w-full text-left"
              href="#"
              onClick={() => setIsOutlineOpen(false)}
            >
              <span className="material-symbols-outlined text-[18px]">analytics</span>
              Top page
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 w-full text-left"
              href="#research"
              onClick={() => setIsOutlineOpen(false)}
            >
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
              Publications
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 w-full text-left"
              href="#works"
              onClick={() => setIsOutlineOpen(false)}
            >
              <span className="material-symbols-outlined text-[18px]">
                precision_manufacturing
              </span>
              Works
            </a>
          </li>
        </ul>
      </nav>

      <nav className="hidden md:flex flex-col h-screen w-64 p-6 bg-slate-50 text-slate-700 font-mono text-xs tracking-tight border-r border-slate-200 sticky top-0 shrink-0 z-40">
        <div className="font-serif text-2xl border-b border-slate-200 pb-4 mb-4">
          OUTLINE
        </div>
        <ul className="flex flex-col gap-1 mt-8">
          <li>
            <a
              className="flex items-center gap-3 px-4 py-3 bg-slate-200 text-slate-900 font-bold hover:bg-slate-100 w-full text-left"
              href="#"
            >
              <span className="material-symbols-outlined text-[18px]">analytics</span>
              Top page
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 w-full text-left"
              href="#research"
            >
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
              Publications
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-100 w-full text-left"
              href="#works"
            >
              <span className="material-symbols-outlined text-[18px]">
                precision_manufacturing
              </span>
              Works
            </a>
          </li>
        </ul>
      </nav>

      <main className="flex-1 flex flex-col min-h-screen relative w-full overflow-x-hidden">
        <header className="md:hidden fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-slate-50/80 backdrop-blur-md border-b border-slate-200 font-serif text-slate-800 uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <a className="font-serif italic text-xl text-slate-900 font-extrabold tracking-tight" href="#">
              Hogehoge's Homepage
            </a>
          </div>
          <button
              aria-controls="mobile-outline"
              aria-expanded={isOutlineOpen}
              aria-label="Toggle outline"
              className="text-slate-600 hover:bg-slate-100 p-2 -ml-2 transition-transform hover:-translate-y-[2px]"
              onClick={() => setIsOutlineOpen((prev) => !prev)}
              type="button"
            >
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </header>

        <div className="h-20 md:hidden" />

        <section className="relative min-h-[751px] flex items-center pt-12 pb-24 px-6 md:px-16 lg:px-24">
          <div className="absolute inset-0 pointer-events-none grid grid-cols-12 gap-6 px-6 md:px-16 lg:px-24 h-full">
            <div className="col-start-4 technical-axis-y" />
            <div className="col-start-9 technical-axis-y opacity-50" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-start-2 md:col-span-7 flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-primary" />
              </div>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-background leading-[0.9] tracking-tighter">
                Hogehoge&apos;s <br /> Homepage
              </h1>
              <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mt-4">
                Theoretical physics approach to engineering-distilling complex
                problems into elegant, simple code. Bridging the gap between
                abstract mathematics and tangible infrastructure.
              </p>
            </div>

            <div className="md:col-start-9 md:col-span-4 relative h-[400px] w-full">
              <div className="absolute inset-0 bg-surface-container-high technical-rule overflow-hidden">
                <img
                  alt="Quantum Circuit Diagram"
                  className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale contrast-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcQLP5aZQxan7Nc2trdJZKc_WV_lyMSx_CSg6WOCFATt68M_BzP-BgctV2wMTBSjMA-4E4htvK8rADXP9igAxpKiHQR_xkkRaKyJ06xZoq-pvwPUYVlSxQdt4TDTQxokpXZEHAquCaNawLb1XtyPiZBHIyLnjJgnSSGejISfKmqPUtAMU9gNbkKg5RuRRSRdDhtmCoT_qxpIOglBoS0UMs60pQYbhBzYzRoAvXUKO5F4olNw4vnObPWaYpPZQmCaGf8rjpK7iFk21_"
                />
                <div className="absolute top-4 left-4 font-label text-[10px] text-on-background bg-surface-container-lowest px-2 py-1">
                  FIG_01: STATE_VECTOR
                </div>
                <div className="absolute bottom-4 right-4 flex gap-1">
                  <div className="w-2 h-2 bg-primary" />
                  <div className="w-2 h-2 bg-on-background" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-16 lg:px-24 relative" id="about">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 flex gap-4 items-baseline">
              <span className="font-label text-sm text-primary tracking-widest">
                PROFILE
              </span>
              <h2 className="font-label text-xs uppercase tracking-[0.2em] text-outline">
                About Me
              </h2>
            </div>
            <div className="border-l-[0.5px] border-outline-variant/30 pl-8 md:pl-16">
              <h3 className="font-headline text-3xl md:text-5xl leading-tight mb-8 text-on-background">
                Master&apos;s student in theoretical physics and software engineer.
              </h3>
              <p className="font-headline text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-3xl italic">
                My foundation lies in blending rigorous academic research with
                agile development methodologies. I specialize in translating
                complex mathematical abstractions into scalable, highly
                optimized production systems.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 md:px-16 lg:px-24 bg-surface-container-low relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-16 border-b border-outline-variant/20 pb-4">
              <h2 className="font-label text-xl tracking-widest uppercase">
                My feature
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 relative">
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 technical-axis-y" />

              <div className="md:pr-16 flex flex-col items-start text-right md:text-left">
                <span className="font-headline text-3xl italic text-primary mb-6">
                  Quantum information
                </span>
                <p className="font-body text-base text-on-surface-variant mb-8 leading-relaxed">
                  Rigorous mathematical modeling and foundational physics
                  research. Identifying structural patterns in chaotic systems to
                  predict macroscopic behaviors from microscopic rules.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-surface-container-high px-3 py-1 font-label text-xs">
                    QUANTUM_CIRCUITS
                  </span>
                  <span className="bg-surface-container-high px-3 py-1 font-label text-xs">
                    STATISTICAL_PHYSICS
                  </span>
                  <span className="bg-surface-container-high px-3 py-1 font-label text-xs">
                    ENTANGLEMENT
                  </span>
                </div>
              </div>

              <div className="md:pl-16 flex flex-col items-start md:items-end text-left md:text-right">
                <span className="font-headline text-3xl italic text-on-background mb-6">
                  Software engineering
                </span>
                <p className="font-body text-base text-on-surface-variant mb-8 leading-relaxed md:text-right">
                  Agile implementation of algorithms into scalable software
                  architectures. Translating theoretical proofs into highly
                  optimized, production-ready code blocks.
                </p>
                <div className="flex flex-wrap justify-end gap-2 mt-auto">
                  <span className="bg-surface-container-high px-3 py-1 font-label text-xs">
                    SYSTEMS_ARCHITECTURE
                  </span>
                  <span className="bg-surface-container-high px-3 py-1 font-label text-xs">
                    ALGORITHM_OPTIMIZATION
                  </span>
                  <span className="bg-surface-container-high px-3 py-1 font-label text-xs">
                    FULL_STACK_DEV
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 md:px-16 lg:px-24 relative bg-surface" id="research">
          <div className="absolute top-0 left-16 right-16 technical-axis-x" />
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 flex gap-4 items-baseline">
              <h2 className="font-label text-xs uppercase tracking-[0.2em] text-outline">
                Publications
              </h2>
            </div>

            <article className="bg-surface-container-lowest p-8 md:p-12 ambient-shadow relative group hover:-translate-y-[2px] transition-transform duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
              <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                <div className="flex-1">
                  <span className="font-label text-xs mb-4 block text-on-surface-variant">
                    Phys. Rev. B 113, 014111 (2026)
                  </span>
                  <h3 className="font-headline text-3xl md:text-4xl leading-tight mb-6 pr-8">
                    Disordered purification phase transition in hybrid random circuits
                  </h3>
                  <p className="font-body text-on-surface-variant leading-relaxed max-w-2xl mb-8">
                    In cases of initially mixed states, purification transition appears in stead of the entanglement transition in MIPT, and the nature of the transition is measured by using purity. The measurement purifies the state, and there exists a critical rate of the measurement for the purification transition.
                    We investigate the entanglement and purification dynamics of a one-dimensional
                    quantum circuit subjected to modulated-projective measurements.
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-primary hover:text-primary-dim transition-colors border-b border-primary/30 pb-1"
                      href="https://journals.aps.org/prb/abstract/10.1103/mb36-pc91"
                    >
                      Read_Abstract
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </div>
                <div className="w-full max-w-[400px] sm:max-w-[350px] md:w-[480px] md:h-[500px] md:max-w-none aspect-[4/5] md:aspect-auto shrink-0 mx-auto md:mx-0">
                  <img
                    src={circuitImage}
                    alt="Publication Image"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="py-24 px-6 md:px-16 lg:px-24 bg-surface-container-highest relative" id="works">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <span className="material-symbols-outlined text-primary text-3xl">
                precision_manufacturing
              </span>
              <h2 className="font-label text-2xl tracking-widest uppercase">
                Works
              </h2>
              <div className="h-[0.5px] flex-1 bg-outline-variant/30 ml-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-surface-container-lowest p-8 technical-rule flex flex-col group hover:-translate-y-[2px] transition-transform duration-300">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <span className="font-label text-[10px] uppercase text-outline tracking-widest mb-2 block">
                      Hackathon_Winner_2023
                    </span>
                    <h3 className="font-body font-bold text-2xl text-on-background">
                      Linguist.io // Vocab Engine
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                    code
                  </span>
                </div>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-12 max-w-xl">
                  A high-performance English vocabulary management application
                  utilizing spaced repetition algorithms derived from cognitive
                  science models. Built with a focus on ultra-low latency data
                  syncing across devices.
                </p>
                <div className="mt-auto flex flex-col gap-4">
                  <div className="h-[0.5px] w-full bg-surface-variant" />
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex gap-2">
                      <span className="font-label text-[10px] bg-surface px-2 py-1 technical-rule">
                        React
                      </span>
                      <span className="font-label text-[10px] bg-surface px-2 py-1 technical-rule">
                        TypeScript
                      </span>
                      <span className="font-label text-[10px] bg-surface px-2 py-1 technical-rule">
                        PostgreSQL
                      </span>
                    </div>
                    <a
                      className="font-label text-xs uppercase text-primary flex items-center gap-1 hover:underline"
                      href="#"
                    >
                      View_Source
                      <span className="material-symbols-outlined text-[12px]">
                        arrow_outward
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-surface-container-lowest p-6 technical-rule flex flex-col group hover:-translate-y-[2px] transition-transform duration-300">
                <div className="mb-6">
                  <span className="font-label text-[10px] uppercase text-outline tracking-widest mb-2 block">
                    Simulation_Tool
                  </span>
                  <h3 className="font-body font-bold text-lg text-on-background">
                    Q-Simulacrum
                  </h3>
                </div>
                <p className="font-body text-on-surface-variant text-xs leading-relaxed mb-8">
                  Python-based wrapper for QuSpin designed to automate
                  large-scale cluster deployments for exactly diagonalizing
                  many-body Hamiltonians.
                </p>
                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex gap-2 flex-wrap">
                    <span className="font-label text-[10px] bg-surface px-2 py-1 technical-rule">
                      Python
                    </span>
                    <span className="font-label text-[10px] bg-surface px-2 py-1 technical-rule">
                      QuSpin
                    </span>
                    <span className="font-label text-[10px] bg-surface px-2 py-1 technical-rule">
                      Docker
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-surface-container p-6 technical-rule flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-center relative z-10">
                  <span className="material-symbols-outlined text-4xl text-outline mb-2">
                    deployed_code
                  </span>
                  <span className="font-label text-xs uppercase block tracking-widest">
                    Access_Archive
                  </span>
                  <span className="font-label text-[10px] text-on-surface-variant mt-2 block">
                    14+ Repositories
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-100 text-slate-600 font-mono text-[10px] uppercase tracking-tighter border-t border-slate-200 mt-auto shrink-0 relative z-10">
          <div className="font-mono font-bold text-slate-700">
            &copy;2026 ~-portfolio. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              className="opacity-100 hover:opacity-100 hover:text-slate-900 transition-opacity"
              href="#"
            >
              arXiv
            </a>
            <a
              className="opacity-100 hover:opacity-100 hover:text-slate-900 transition-opacity"
              href="#"
            >
              GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
