"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { primaryNav, bookConsultationCta } from "@/content/nav";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 64);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ease-out ${
        scrolled
          ? "border-graphite/10 border-b bg-white/90 backdrop-blur-md"
          : "bg-white/0"
      }`}
      onMouseLeave={() => setOpenGroup(null)}
    >
      <nav className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="relative z-10 flex h-9 w-[180px] shrink-0 items-center">
          <Image
            src="/assets/logo/goldapples-logo.png"
            alt="Goldapples Media Associates"
            width={600}
            height={133}
            priority
            className="h-full w-auto object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((group) => (
            <li
              key={group.label}
              className="relative"
              onMouseEnter={() => group.items.length > 0 && setOpenGroup(group.label)}
            >
              <Link
                href={group.href}
                className="group text-graphite hover:text-ink flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors"
                aria-expanded={
                  group.items.length > 0 ? openGroup === group.label : undefined
                }
              >
                {group.label}
                <span
                  aria-hidden="true"
                  className="bg-gold-deep h-1 w-1 rounded-full opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 lg:block">
          <Button href={bookConsultationCta.href} variant="gold">
            {bookConsultationCta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`bg-ink h-px w-6 transition-transform duration-200 ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`bg-ink h-px w-6 transition-transform duration-200 ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Desktop mega-menu panel */}
      <AnimatePresence>
        {openGroup &&
          primaryNav
            .filter((g) => g.label === openGroup && g.items.length > 0)
            .map((group) => (
              <motion.div
                key={group.label}
                initial={reducedMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="border-graphite/10 absolute inset-x-0 top-full hidden border-b bg-white shadow-[0_16px_32px_-24px_rgba(18,16,13,0.25)] lg:block"
              >
                <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-12 px-10 py-10">
                  {group.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group border-graphite/10 flex flex-col gap-1 border-b py-4 last:border-b-0"
                    >
                      <span className="text-ink group-hover:text-gold-deep font-serif text-lg transition-colors">
                        {item.label}
                      </span>
                      {item.description && (
                        <span className="text-steel text-sm leading-relaxed">
                          {item.description}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
      </AnimatePresence>

      {/* Mobile accordion drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-graphite/10 overflow-hidden border-t bg-white lg:hidden"
          >
            <ul className="divide-graphite/10 flex flex-col divide-y px-6">
              {primaryNav.map((group) => (
                <li key={group.label}>
                  {group.items.length === 0 ? (
                    <Link
                      href={group.href}
                      className="text-ink flex min-h-11 items-center py-3 text-base font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {group.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        type="button"
                        className="text-ink flex min-h-11 w-full items-center justify-between py-3 text-left text-base font-medium"
                        onClick={() =>
                          setMobileExpanded((v) =>
                            v === group.label ? null : group.label,
                          )
                        }
                        aria-expanded={mobileExpanded === group.label}
                      >
                        {group.label}
                        <span
                          aria-hidden="true"
                          className={`text-gold-deep transition-transform duration-200 ${
                            mobileExpanded === group.label ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === group.label && (
                          <motion.ul
                            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="overflow-hidden pb-2"
                          >
                            {group.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="text-graphite flex min-h-11 flex-col justify-center py-2 text-sm"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </li>
              ))}
              <li className="py-4">
                <Button
                  href={bookConsultationCta.href}
                  variant="gold"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  {bookConsultationCta.label}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
