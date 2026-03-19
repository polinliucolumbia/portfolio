"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/",            label: "Home",        exact: true  },
  { href: "/engineering", label: "Engineering", exact: false },
  { href: "/art",         label: "Art",         exact: false },
  { href: "/about",       label: "About",       exact: false },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [menuOpen]);


  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <header
      ref={menuRef}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 transform-gpu",
        scrolled
          ? "bg-parchment"
          : "bg-transparent"
      )}
      style={{ willChange: "transform" }}
    >
   
      <nav className="mx-auto flex h-16 max-w-[var(--container-wide)] items-center justify-between px-[var(--container-gutter)]">

        {/* Logo */}
        <Link
          href="/"
          className="font-sans font-medium text-sm text-ink hover:text-muted transition-colors duration-200"
        >
          Polin Liu
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map(({ href, label, exact }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-sm transition-colors duration-200",
                  isActive(href, exact)
                    ? "text-ink font-medium"
                    : "text-muted hover:text-ink"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="mailto:hello@polinliu.com"
          className="hidden md:block"
          aria-label="Send an email"
        >
          <Button variant="outline" size="sm">Say hello</Button>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2.5 -mr-2.5 text-ink"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={cn(
              "block h-px w-5 bg-current origin-center transition-transform duration-300",
              menuOpen && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-current transition-opacity duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-current origin-center transition-transform duration-300",
              menuOpen && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="bg-parchment border-b border-border px-[var(--container-gutter)] pb-6 pt-3">
          <ul className="flex flex-col gap-1 mb-6" role="list">
            {navLinks.map(({ href, label, exact }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "block py-2 text-base transition-colors duration-200",
                    isActive(href, exact)
                      ? "text-ink font-medium"
                      : "text-muted hover:text-ink"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="mailto:hello@polinliu.com" aria-label="Send an email">
            <Button variant="outline" size="sm">Say hello</Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
