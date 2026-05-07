'use client';
import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import {
  portfolioItems,
  categories,
  type PortfolioItem,
  type Category,
} from '../data/portfolio';

// ── Modal ────────────────────────────────────────────────────────────────────

function Modal({
  item,
  items,
  onClose,
  onPrev,
  onNext,
}: {
  item: PortfolioItem;
  items: PortfolioItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const idx = items.findIndex((i) => i.id === item.id);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const categoryLabel =
    item.category.charAt(0).toUpperCase() + item.category.slice(1);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 w-full max-w-5xl bg-[#0f0f1a] rounded-2xl border border-[#1a1a2e] overflow-hidden shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1a2e] hover:bg-[#2a2a4a] text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-[1fr_320px]">
          {/* Media */}
          <div className="relative bg-[#080810] aspect-video flex items-center justify-center">
            {item.type === 'video' ? (
              <video
                src={item.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
                poster={item.thumbnail}
              />
            ) : (
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 65vw"
              />
            )}

            {/* Nav arrows */}
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
              aria-label="Next"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Info panel */}
          <div className="p-7 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-violet-500/10 text-violet-300">
                {categoryLabel}
              </span>
              <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-space)]">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#1a1a2e] text-slate-300 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#1a1a2e]">
              <p className="text-slate-500 text-xs mb-3">
                {idx + 1} / {items.length}
              </p>
              <a
                href="#contact"
                onClick={onClose}
                className="w-full block text-center py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Order Similar
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Card ─────────────────────────────────────────────────────────────────────

function Card({
  item,
  onClick,
}: {
  item: PortfolioItem;
  onClick: () => void;
}) {
  return (
    <motion.button
      layout
      onClick={onClick}
      className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0f0f1a] border border-[#1a1a2e] cursor-pointer text-left"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Thumbnail */}
      <Image
        src={item.thumbnail}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Video badge */}
      {item.type === 'video' && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 rounded-full px-2.5 py-1">
          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="text-white text-xs font-medium">Video</span>
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <span className="text-white font-semibold text-sm">{item.title}</span>
        <span className="text-slate-300 text-xs mt-0.5 capitalize">{item.category}</span>
      </div>

      {/* View icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === activeCategory);

  const selectedItem = portfolioItems.find((i) => i.id === selectedId) ?? null;

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (!selectedId) return;
      const idx = filtered.findIndex((i) => i.id === selectedId);
      const next = filtered[(idx + dir + filtered.length) % filtered.length];
      setSelectedId(next.id);
    },
    [selectedId, filtered]
  );

  return (
    <section id="portfolio" className="py-28 bg-[#080810]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 font-[family-name:var(--font-space)]">
            Portfolio
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Click any work to view details. Use arrow keys to navigate.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.value
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/40'
                  : 'bg-[#0f0f1a] border border-[#1a1a2e] text-slate-400 hover:border-violet-500/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <Card item={item} onClick={() => setSelectedId(item.id)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ArtStation link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://www.artstation.com/anton_labutin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-violet-400 font-medium transition-colors text-sm"
          >
            View full portfolio on ArtStation
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <Modal
            item={selectedItem}
            items={filtered}
            onClose={() => setSelectedId(null)}
            onPrev={() => navigate(-1)}
            onNext={() => navigate(1)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
