"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["about", "experience", "projects", "skills", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-sm font-medium tracking-wider text-text-primary hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-primary">{"<"}</span>
            DHV
            <span className="text-primary">{" />"}</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-colors ${
                  active === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted hover:text-text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:vietdanghoang1705@gmail.com"
              className="btn-primary !py-2 !px-5 !text-sm"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-muted hover:text-text-primary transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-[72px] left-0 right-0 bg-surface border-b border-border p-6 flex flex-col gap-4">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-base font-medium text-text-secondary hover:text-primary transition-colors py-2 border-b border-border last:border-0"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:vietdanghoang1705@gmail.com"
              className="btn-primary mt-2 justify-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  );
}
