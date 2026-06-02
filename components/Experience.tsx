"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Kegmil",
    type: "B2B Field Service SaaS",
    period: "May 2024 — Present",
    current: true,
    tech: ["React.js", "UmiJS", "Ant Design", "Redux-Saga", "REST API", "Frappe", "Agile/Scrum"],
    highlights: [
      "Owned full frontend delivery for 3+ core SaaS modules (scheduling, dispatch, real-time tracking) — shipped every 2-week sprint without senior oversight.",
      "Built shared component library (20+ components) serving as team design system baseline, reducing new-feature UI setup time by ~40%.",
      "Drove full REST API integration across 15+ endpoints — defined contracts via Swagger, owned error handling and edge cases end-to-end, maintaining data integrity on production for 12+ months.",
      "Refactored Redux-Saga async flows to eliminate race conditions; applied code splitting & lazy loading, reducing initial load time ~35%.",
      "Introduced Claude + LLM-assisted workflow — estimated 30% faster module delivery while maintaining quality standards.",
    ],
  },
  {
    role: "Intern Fullstack Developer",
    company: "GeekUp",
    type: "Tech Product Studio",
    period: "Feb 2023 — Jun 2023",
    current: false,
    tech: ["React.js", "Refine", "Ant Design", "NestJS", "PostgreSQL", "AWS EC2"],
    highlights: [
      "Sole developer on a 3-person team — built and deployed an internal L&D platform fully end-to-end: React.js frontend, NestJS REST APIs, PostgreSQL database, and AWS EC2 deployment.",
      "Designed and shipped T-Shape skill radar charts and workshop enrollment flow from scratch, iterating through 3+ rounds of user feedback within the internship timeline.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-num reveal mb-4">02 — Experience</div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-tight reveal reveal-delay-1">
            Where I&apos;ve{" "}
            <span className="gradient-text">shipped work.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-[11px] hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="reveal" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="md:flex gap-12">
                  {/* Dot */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-1">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        exp.current
                          ? "border-primary bg-primary/20"
                          : "border-border bg-card"
                      }`}
                    >
                      {exp.current && (
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 gradient-border bg-card rounded-xl p-8 hover:bg-surface transition-all duration-300 group">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-mono bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-primary font-semibold">
                          {exp.company}
                        </div>
                        <div className="text-xs text-muted mt-0.5">{exp.type}</div>
                      </div>
                      <div className="text-sm font-mono text-muted bg-surface px-3 py-1.5 rounded-lg border border-border">
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                          <span className="text-primary mt-1 flex-shrink-0">▸</span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: h.replace(
                                /~?\d+%|15\+|20\+|3\+|12\+/g,
                                (m) =>
                                  `<strong class="text-primary font-semibold">${m}</strong>`
                              ),
                            }}
                          />
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 reveal">
          <div className="gradient-border bg-card rounded-xl p-8 flex flex-wrap justify-between items-center gap-6">
            <div>
              <div className="text-xs font-mono text-muted mb-2 uppercase tracking-widest">Education</div>
              <h3 className="text-xl font-bold text-text-primary mb-1">
                FPT University
              </h3>
              <div className="text-text-secondary">
                Bachelor of Software Engineering
              </div>
            </div>
            <div className="text-sm font-mono text-muted bg-surface px-4 py-2 rounded-lg border border-border">
              2020 — 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
