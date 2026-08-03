'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArtStationIcon, TelegramIcon, WhatsAppIcon } from './icons/SocialIcons';
import { BrandLogo } from './BrandLogo';

const NAV = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'ArtStation',
    href: 'https://www.artstation.com/anton_labutin',
    icon: ArtStationIcon,
    hoverColor: 'hover:text-violet-400',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/Sidney_69',
    icon: TelegramIcon,
    hoverColor: 'hover:text-cyan-400',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/qr/SEKVX6U5V4U7J1',
    icon: WhatsAppIcon,
    hoverColor: 'hover:text-green-400',
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[#1a1a2e]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="select-none">
          <BrandLogo />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-slate-500 ${hoverColor} transition-colors duration-200`}
            >
              <Icon />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-[5px]">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0f0f1a] border-t border-[#1a1a2e] overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1">
              {NAV.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-slate-300 hover:text-white font-medium border-b border-[#1a1a2e] last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-5 pt-4">
                {socialLinks.map(({ label, href, icon: Icon, hoverColor }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`text-slate-500 ${hoverColor} transition-colors`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
