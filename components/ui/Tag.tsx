export function Tag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`border-graphite/15 text-graphite inline-flex items-center rounded-[3px] border px-3 py-1.5 text-sm ${className}`.trim()}>
      {children}
    </span>
  );
}
