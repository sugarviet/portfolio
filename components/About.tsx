"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="section-num reveal mb-4">01 — About</div>
            <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-tight mb-8 reveal reveal-delay-1">
              I build things that{" "}
              <span className="gradient-text">ship to production.</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed reveal reveal-delay-2">
              <p>
                Fullstack Developer with 2+ years building and shipping
                production SaaS applications — owning both frontend (React.js,
                Next.js) and backend (Node.js, NestJS, PostgreSQL, MongoDB)
                ends of the stack.
              </p>
              <p>
                Comfortable going from API design to UI implementation within
                the same sprint. I apply Claude & LLM tooling daily to
                accelerate delivery without sacrificing code quality.
              </p>
              <p>
                Currently at{" "}
                <span className="text-primary font-medium">Kegmil</span> — a
                B2B Field Service SaaS — where I own full frontend delivery for
                3+ core modules and ship every 2-week sprint without senior
                oversight.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 reveal reveal-delay-3">
              <a
                href="https://github.com/sugarviet"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !py-2.5 !px-5 !text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                github.com/sugarviet
              </a>
              <a
                href="mailto:vietdanghoang1705@gmail.com"
                className="btn-outline !py-2.5 !px-5 !text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Email me
              </a>
            </div>
          </div>

          {/* Right — cards */}
          <div className="grid grid-cols-2 gap-4 reveal reveal-delay-2">
            {[
              {
                icon: "⚡",
                title: "Fast Delivery",
                desc: "Ship every 2-week sprint. LLM-assisted workflow = 30% faster delivery.",
              },
              {
                icon: "🔗",
                title: "Full Stack",
                desc: "API design to UI implementation — same sprint, same engineer.",
              },
              {
                icon: "🏗️",
                title: "Production-grade",
                desc: "12+ months data integrity on production with 15+ integrated endpoints.",
              },
              {
                icon: "📐",
                title: "Design Systems",
                desc: "20+ component library reducing new-feature UI setup by ~40%.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="gradient-border bg-card p-5 rounded-xl hover:bg-surface transition-colors group"
              >
                <div className="text-2xl mb-3">{card.icon}</div>
                <div className="text-sm font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {card.title}
                </div>
                <div className="text-xs text-muted leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
