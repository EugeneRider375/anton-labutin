'use client';
import { motion } from 'framer-motion';
import { fadeUp } from '../lib/variants';

const services = [
  {
    icon: '🎮',
    title: 'Game Characters',
    subtitle: 'Heroes, Monsters & Fantasy Creatures',
    description:
      'From concept to delivery — fully rigged, game-ready 3D characters with PBR textures. Stylized or realistic. Optimized for Unreal Engine and Unity.',
    items: [
      'Hero & NPC characters',
      'Monsters & fantasy creatures',
      'Stylized & realistic styles',
      'Full rig + animations',
      'UE5 / Unity ready',
    ],
    gradient: 'from-violet-600/20 to-purple-900/10',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    accent: 'text-violet-400',
    tag: 'bg-violet-500/10 text-violet-300',
  },
  {
    icon: '🏰',
    title: '3D Buildings',
    subtitle: 'Houses, Castles & Modern Architecture',
    description:
      'Detailed architectural 3D models from medieval castles to contemporary buildings. Modular systems, realistic materials, ready for real-time engines.',
    items: [
      'Castles & medieval structures',
      'Modern buildings & cityscapes',
      'Interior & exterior detail',
      'Modular kit systems',
      'Architectural visualization',
    ],
    gradient: 'from-cyan-600/20 to-blue-900/10',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    accent: 'text-cyan-400',
    tag: 'bg-cyan-500/10 text-cyan-300',
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 font-[family-name:var(--font-space)]">
            Services
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            End-to-end 3D production for game studios, indie developers and
            digital productions.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className={`relative rounded-2xl border ${s.border} bg-gradient-to-br ${s.gradient} bg-[#0f0f1a] p-8 transition-all duration-300 group overflow-hidden`}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${s.gradient}`}
              />

              <div className="relative z-10">
                <span className="text-4xl mb-5 block">{s.icon}</span>

                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${s.tag}`}
                >
                  {s.subtitle}
                </span>

                <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-space)]">
                  {s.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {s.description}
                </p>

                <ul className="space-y-2.5">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-current ${s.accent} shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#portfolio"
                  className={`inline-flex items-center gap-2 mt-7 text-sm font-medium ${s.accent} hover:gap-3 transition-all duration-200`}
                >
                  See in Portfolio
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
