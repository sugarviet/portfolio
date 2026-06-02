"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    num: "01",
    title: "eFurniture",
    subtitle: "3D E-Commerce Platform",
    description:
      "Full-stack 3D furniture shopping experience. Contributed across the entire stack — React.js frontend with Roomle 3D SDK integration, Node.js/Express backend APIs, MongoDB data layer, and Redis caching. Implemented React Query with stale-while-revalidate strategy, improving LCP on product listing pages.",
    tech: ["React.js", "React Query", "Roomle SDK", "Node.js", "Express", "MongoDB", "Redis"],
    github: "https://github.com/sugarviet/efurniture-user",
    team: "Team of 5",
    featured: true,
    gradient: "from-violet-500/20 to-indigo-500/20",
  },
  {
    num: "02",
    title: "Learning Hub",
    subtitle: "Online Course Marketplace",
    description:
      "End-to-end online learning platform. Delivered both frontend (Next.js SSR, SWR, mentor/learner dashboards) and backend (Node.js REST APIs, MongoDB schemas) — consistent design system maintained across all surfaces.",
    tech: ["Next.js", "TypeScript", "SWR", "Node.js", "MongoDB"],
    github: "https://github.com/sugarviet/emate-user",
    team: "Team of 3",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-num reveal mb-4">03 — Projects</div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-tight reveal reveal-delay-1">
            Things I&apos;ve{" "}
            <span className="gradient-text">built.</span>
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.num}
              className="reveal"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className={`relative bg-card rounded-2xl border border-border overflow-hidden group hover:border-primary/30 transition-all duration-500`}>
                {/* Gradient top */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.gradient} opacity-60`} />

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative p-8 md:p-10">
                  <div className="grid md:grid-cols-[1fr,auto] gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl font-black text-border group-hover:text-primary/20 transition-colors font-mono">
                          {project.num}
                        </span>
                        <div>
                          <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <div className="text-text-secondary text-sm font-medium mt-0.5">
                            {project.subtitle}
                          </div>
                        </div>
                      </div>

                      <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline !py-2.5 !px-5 !text-sm"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View Source
                        </a>
                        <span className="text-xs font-mono text-muted">{project.team}</span>
                      </div>
                    </div>

                    {/* Arrow icon */}
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border group-hover:border-primary group-hover:text-primary text-muted transition-all duration-300 flex-shrink-0 mt-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <a
            href="https://github.com/sugarviet"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            See all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
