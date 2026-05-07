'use client';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Radial glow */}
      <div className="absolute inset-0 radial-glow" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="inline-block text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            3D Character &amp; Environment Artist
          </motion.span>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6 font-[family-name:var(--font-space)]">
            Anton{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              LABUTIN
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting game-ready{' '}
            <span className="text-slate-200 font-medium">
              characters &amp; creatures
            </span>{' '}
            and immersive{' '}
            <span className="text-slate-200 font-medium">
              architectural 3D models
            </span>{' '}
            for video games and digital productions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-violet-900/30"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-[#2a2a4a] hover:border-violet-500/60 hover:bg-violet-950/30 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-24 grid grid-cols-3 gap-6 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {[
            { value: '50+', label: 'Characters Made' },
            { value: '30+', label: '3D Buildings' },
            { value: '5+', label: 'Years of XP' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white font-[family-name:var(--font-space)]">
                {s.value}
              </div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-5 h-9 border-2 border-slate-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-violet-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
