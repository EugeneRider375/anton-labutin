'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Brief & Concept',
    description:
      'We discuss your vision, style references, technical requirements and timeline. Clear scope means no surprises.',
    icon: '💬',
    color: 'from-violet-500/20',
  },
  {
    number: '02',
    title: 'Modeling',
    description:
      'High-poly sculpt followed by retopology to production-ready mesh. Every vertex placed with purpose.',
    icon: '⬡',
    color: 'from-purple-500/20',
  },
  {
    number: '03',
    title: 'Texturing & Rigging',
    description:
      'PBR textures baked from the high-poly. Characters get a clean, animator-friendly rig with proper weight paint.',
    icon: '🎨',
    color: 'from-blue-500/20',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'Final assets in your format of choice — FBX, GLB, OBJ. Full scene setup or dropped straight into your engine.',
    icon: '📦',
    color: 'from-cyan-500/20',
  },
];

export function Process() {
  return (
    <section className="py-28 bg-[#080810]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 font-[family-name:var(--font-space)]">
            The Process
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            A straightforward workflow designed for clear communication and
            on-time delivery.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative"
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+1px)] w-6 h-px bg-gradient-to-r from-[#2a2a4a] to-transparent" />
              )}

              <div
                className={`h-full bg-[#0f0f1a] rounded-2xl border border-[#1a1a2e] p-6 bg-gradient-to-b ${step.color} to-transparent hover:border-violet-500/30 transition-colors`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{step.icon}</span>
                  <span className="text-slate-700 text-3xl font-black font-[family-name:var(--font-space)]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 font-[family-name:var(--font-space)]">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-violet-900/30"
          >
            Start a Project
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
