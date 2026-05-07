export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080810] border-t border-[#1a1a2e] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <span className="font-bold text-lg font-[family-name:var(--font-space)] tracking-tight">
          Anton{' '}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            LABUTIN
          </span>
        </span>

        <p className="text-slate-600 text-sm">
          © {year} Anton LABUTIN. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.artstation.com/anton_labutin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-violet-400 text-sm transition-colors"
          >
            ArtStation
          </a>
          <a
            href="https://t.me/Sidney_69"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
          >
            Telegram
          </a>
          <a
            href="#contact"
            className="text-slate-500 hover:text-white text-sm transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
