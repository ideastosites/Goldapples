export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-graphite/15 text-graphite inline-flex items-center rounded-[3px] border px-3 py-1.5 text-sm">
      {children}
    </span>
  );
}
