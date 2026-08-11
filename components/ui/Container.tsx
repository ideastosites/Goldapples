import type { ElementType, ReactNode } from "react";

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag className={`mx-auto max-w-[1280px] px-6 lg:px-10 ${className}`}>{children}</Tag>
  );
}
