export function BrandLogo({ className = 'text-xl' }: { className?: string }) {
  return (
    <span className={`font-bold tracking-tight font-[family-name:var(--font-space)] ${className}`}>
      Anton{' '}
      <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
        LABUTIN
      </span>
    </span>
  );
}
