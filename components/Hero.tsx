"use client";

import { useEffect, useState } from "react";

const techStack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Redux-Saga",
  "React Query",
  "AWS EC2",
  "Tailwind CSS",
  "REST API",
  "Agile/Scrum",
];

const titles = [
  "Fullstack Developer",
  "Frontend Engineer",
  "React.js Specialist",
  "SaaS Builder",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Orbs */}
      <div
        className="orb w-[600px] h-[600px] bg-primary top-[-100px] left-[-200px]"
        style={{ position: "absolute" }}
      />
      <div
        className="orb w-[400px] h-[400px] bg-accent bottom-[100px] right-[-100px]"
        style={{ position: "absolute" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 w-full">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/80 backdrop-blur-sm mb-10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-text-secondary">
            Open to new opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-[clamp(48px,8vw,96px)] font-black leading-none tracking-tight mb-6 animate-fade-up">
          <span className="block text-text-primary">Đặng Hoàng</span>
          <span className="block gradient-text">Việt.</span>
        </h1>

        {/* Typewriter title */}
        <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <span className="text-[clamp(20px,3vw,28px)] font-semibold text-text-secondary">
            {displayed}
            <span className="inline-block w-0.5 h-[1em] bg-primary ml-0.5 animate-pulse align-middle" />
          </span>
        </div>

        {/* Summary */}
        <p
          className="text-text-secondary text-lg max-w-xl leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          2+ years building and shipping production SaaS applications — owning
          both frontend and backend ends of the stack. Based in{" "}
          <span className="text-text-primary font-medium">Ho Chi Minh City</span>.
        </p>

        {/* CTA */}
        <div
          className="flex flex-wrap gap-4 mb-20 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          <a href="#projects" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            View GitHub
          </a>
          <a href="#contact" className="btn-outline">
            Get in touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-6 max-w-sm animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            { value: "2+", label: "Years exp." },
            { value: "15+", label: "API endpoints" },
            { value: "20+", label: "Components" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs text-muted mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee tech stack */}
      <div className="relative border-t border-border py-4 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 mx-6 text-sm font-mono text-muted whitespace-nowrap"
              >
                <span className="text-primary">▸</span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-bounce">
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
