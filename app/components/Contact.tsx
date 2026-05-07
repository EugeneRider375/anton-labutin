'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TelegramIcon, WhatsAppIcon } from './icons/SocialIcons';

type Status = 'idle' | 'loading' | 'success' | 'error';

const quickContact = [
  {
    label: 'Telegram',
    handle: '@Sidney_69',
    href: 'https://t.me/Sidney_69',
    icon: () => <TelegramIcon className="w-6 h-6" />,
    description: 'Usually replies within 1 hour',
    bg: 'bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border-[#229ED9]/20 hover:border-[#229ED9]/50',
    text: 'text-[#62bcf0]',
  },
  {
    label: 'WhatsApp',
    handle: 'Open Chat',
    href: 'https://wa.me/qr/SEKVX6U5V4U7J1',
    icon: () => <WhatsAppIcon className="w-6 h-6" />,
    description: 'Available on WhatsApp',
    bg: 'bg-[#25D366]/10 hover:bg-[#25D366]/20 border-[#25D366]/20 hover:border-[#25D366]/50',
    text: 'text-[#5be67e]',
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-[#0a0a0f] border border-[#1a1a2e] focus:border-violet-500 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 outline-none transition-colors text-sm';

  return (
    <section id="contact" className="py-28 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 font-[family-name:var(--font-space)]">
            Let&apos;s Build Something
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Have a project in mind? Send a message or reach out directly on
            Telegram or WhatsApp — I respond fast.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_340px] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-[#0f0f1a] rounded-2xl border border-[#1a1a2e]">
                <span className="text-5xl mb-4">✅</span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Message sent!
                </h3>
                <p className="text-slate-400 mb-6 text-sm">
                  I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#0f0f1a] rounded-2xl border border-[#1a1a2e] p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@studio.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your project — style, scope, deadline..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try Telegram or WhatsApp
                    instead.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
              Prefer direct chat?
            </p>

            {quickContact.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-200 ${c.bg}`}
              >
                <span className={c.text}>
                  <c.icon />
                </span>
                <div>
                  <div className={`font-bold ${c.text}`}>{c.label}</div>
                  <div className="text-slate-300 text-sm font-medium">
                    {c.handle}
                  </div>
                  <div className="text-slate-500 text-xs mt-0.5">
                    {c.description}
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-slate-600 ml-auto"
                  viewBox="0 0 24 24"
                  fill="none"
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
            ))}

            <div className="mt-4 p-5 rounded-2xl border border-[#1a1a2e] bg-[#0f0f1a]">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                Email
              </div>
              <a
                href="mailto:thevollga@gmail.com"
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors break-all"
              >
                thevollga@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
