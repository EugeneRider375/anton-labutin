'use client';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/variants';

const tools = [
  { name: 'Blender', icon: '⬡' },
  { name: 'ZBrush', icon: '◈' },
  { name: 'Maya', icon: '◇' },
  { name: 'Substance Painter', icon: '◆' },
  { name: 'Unreal Engine 5', icon: '▲' },
  { name: 'Unity', icon: '◉' },
  { name: 'Marvelous Designer', icon: '◫' },
  { name: 'Photoshop', icon: '▣' },
];

export function About() {
  return (
    <section id="about" className="py-28 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className="text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase"
            >
              About Me
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black mt-3 mb-6 font-[family-name:var(--font-space)]"
            >
              3D Artist with a{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                gamer&apos;s eye
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-5">
              I&apos;m Anton — a freelance 3D artist with 5+ years of experience
              building characters and environments for video games. I grew up
              playing games, which means I build every asset with the player
              experience in mind: optimized topology, expressive silhouettes,
              and materials that hold up at every distance.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-8">
              Whether you need a hero character for your next RPG, a terrifying
              boss monster, or a detailed architectural set — I deliver clean,
              game-ready assets on time.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors text-sm"
              >
                Let&apos;s Work Together
              </a>
              <a
                href="https://www.artstation.com/anton_labutin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#2a2a4a] hover:border-violet-500/50 text-slate-300 hover:text-white font-semibold rounded-xl transition-all text-sm gap-2"
              >
                ArtStation Profile
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-[#0f0f1a] rounded-2xl border border-[#1a1a2e] p-8">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
                Tools &amp; Software
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className="flex items-center gap-3 bg-[#141428] rounded-xl p-3.5 border border-[#1a1a2e] hover:border-violet-500/30 transition-colors group"
                  >
                    <span className="text-violet-400 text-lg group-hover:scale-110 transition-transform">
                      {tool.icon}
                    </span>
                    <span className="text-slate-300 text-sm font-medium">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#1a1a2e]">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Delivery Formats
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['FBX', 'OBJ', 'GLB / GLTF', 'USD', 'Blend', 'MAX'].map(
                    (fmt) => (
                      <span
                        key={fmt}
                        className="px-3 py-1 bg-violet-500/10 text-violet-300 text-xs font-medium rounded-full"
                      >
                        {fmt}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
