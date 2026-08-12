"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { primaryNav, serviceCategories, bookConsultationCta } from "@/content/nav";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 64);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeItems = serviceCategories.find((c) => c.id === activeCategory)?.items ?? [];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ease-out ${
        scrolled
          ? "border-graphite/10 border-b bg-white/90 backdrop-blur-md"
          : "bg-white/0"
      }`}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <nav className="mx-auto flex h-20 max-w-[1360px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          aria-label="Goldapples Media Associates — Home"
          className="relative z-10 flex h-9 w-[180px] shrink-0 items-center"
        >
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
          <li className="relative" onMouseEnter={() => setServicesOpen(true)}>
            <button
              type="button"
              className="group text-graphite hover:text-ink flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <span
                aria-hidden="true"
                className={`text-gold-deep text-[10px] transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
          </li>
          {primaryNav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="group text-graphite hover:text-ink flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
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

      {/* Desktop tabbed Services mega-menu */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="border-graphite/10 absolute inset-x-0 top-full hidden border-b bg-white shadow-[0_16px_32px_-24px_rgba(18,16,13,0.3)] lg:block"
          >
            <div className="mx-auto max-w-[1360px] px-10 pt-6">
              <div role="tablist" className="border-graphite/10 flex gap-1 border-b">
                {serviceCategories.map((cat) => (
                  <button
                    key={cat.id}
                    role="tab"
                    type="button"
                    aria-selected={activeCategory === cat.id}
                    onMouseEnter={() => setActiveCategory(cat.id)}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`min-h-11 border-b-2 px-4 text-sm font-semibold transition-colors duration-150 ${
                      activeCategory === cat.id
                        ? "border-gold-deep text-ink"
                        : "text-steel hover:text-ink border-transparent"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-x-12 py-8">
                {activeItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setServicesOpen(false)}
                    className="group border-graphite/10 flex flex-col gap-1 border-b py-4 last:border-b-0"
                  >
                    <span className="group-hover:text-gold-deep text-ink font-serif text-lg transition-colors">
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
            </div>
          </motion.div>
        )}
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
              <li>
                <button
                  type="button"
                  className="text-ink flex min-h-11 w-full items-center justify-between py-3 text-left text-base font-medium"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <span
                    aria-hidden="true"
                    className={`text-gold-deep transition-transform duration-200 ${mobileServicesOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.ul
                      initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="divide-graphite/10 divide-y overflow-hidden pb-2 pl-3"
                    >
                      {serviceCategories.map((cat) => (
                        <li key={cat.id}>
                          <button
                            type="button"
                            className="text-ink flex min-h-11 w-full items-center justify-between py-2.5 text-left text-[15px] font-medium"
                            onClick={() =>
                              setMobileCategory((v) => (v === cat.id ? null : cat.id))
                            }
                            aria-expanded={mobileCategory === cat.id}
                          >
                            {cat.label}
                            <span
                              aria-hidden="true"
                              className={`text-gold-deep text-xs transition-transform duration-200 ${
                                mobileCategory === cat.id ? "rotate-180" : ""
                              }`}
                            >
                              ▾
                            </span>
                          </button>
                          <AnimatePresence>
                            {mobileCategory === cat.id && (
                              <motion.ul
                                initial={
                                  reducedMotion ? false : { height: 0, opacity: 0 }
                                }
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="overflow-hidden pb-2"
                              >
                                {cat.items.map((item) => (
                                  <li key={item.label}>
                                    <Link
                                      href={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="text-steel flex min-h-11 flex-col justify-center py-1.5 text-sm"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              {primaryNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-ink flex min-h-11 items-center py-3 text-base font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
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
