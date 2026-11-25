"use client";

import { usePathname } from "next/navigation";
import { footerContent } from "@/content/site";

export function WhatsAppFloat() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const href = `https://wa.me/${footerContent.whatsapp.number}?text=${encodeURIComponent(
    footerContent.whatsapp.prefillMessage,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Goldapples on WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex items-center justify-center gap-0 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] ring-1 ring-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d] hover:shadow-[0_12px_28px_rgba(0,0,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:right-7 sm:bottom-7 sm:group-hover:gap-2.5 sm:hover:gap-2.5 sm:hover:px-4"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
        className="h-6 w-6 shrink-0"
      >
        <path d="M16.004 2.667C8.648 2.667 2.667 8.648 2.667 16.004c0 2.352.617 4.648 1.789 6.667L2.667 29.333l6.829-1.789a13.28 13.28 0 0 0 6.508 1.693h.005c7.356 0 13.337-5.981 13.337-13.337 0-3.562-1.387-6.912-3.906-9.431a13.249 13.249 0 0 0-9.436-3.802Zm0 24.333h-.004a11.08 11.08 0 0 1-5.647-1.545l-.405-.24-4.053 1.061 1.082-3.951-.263-.42a11.052 11.052 0 0 1-1.696-5.901c0-6.115 4.974-11.089 11.091-11.089 2.961 0 5.744 1.154 7.839 3.249a11.019 11.019 0 0 1 3.246 7.84c0 6.116-4.974 11.096-11.09 11.096Zm6.085-8.308c-.333-.167-1.972-.973-2.278-1.084-.305-.111-.528-.167-.75.167-.223.333-.861 1.084-1.056 1.306-.194.222-.389.25-.722.083-.333-.167-1.407-.519-2.681-1.655-.991-.884-1.66-1.976-1.854-2.31-.194-.333-.021-.514.146-.68.15-.149.333-.389.5-.583.167-.195.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.75-1.806-1.028-2.473-.27-.65-.545-.562-.75-.572l-.639-.011c-.222 0-.583.083-.889.417-.305.333-1.167 1.139-1.167 2.778s1.195 3.223 1.361 3.445c.167.222 2.35 3.589 5.694 5.033.796.344 1.417.549 1.901.703.798.254 1.525.218 2.1.132.641-.096 1.972-.806 2.25-1.584.278-.778.278-1.445.194-1.584-.083-.139-.305-.222-.639-.389Z" />
      </svg>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap font-sans text-sm font-semibold transition-all duration-200 group-hover:max-w-[160px] group-hover:pr-1 sm:inline-block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
