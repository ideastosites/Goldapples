import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-graphite/12 group relative flex flex-col border bg-white p-8 transition-transform duration-150 ease-out hover:-translate-y-0.5 ${className}`}
    >
      <span className="from-gold-deep to-gold absolute inset-x-0 top-0 h-[3px] bg-linear-to-r opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
      {children}
    </div>
  );
}
