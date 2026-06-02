"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "primary",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Redux-Saga", level: 85 },
      { name: "React Query / SWR", level: 85 },
      { name: "Ant Design", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "SSR / SSG", level: 82 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "accent",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "NestJS", level: 80 },
      { name: "Express", level: 85 },
      { name: "REST API Design", level: 90 },
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 75 },
      { name: "AWS EC2", level: 72 },
    ],
  },
  {
    category: "Tools & Process",
    icon: "🛠️",
    color: "violet",
    skills: [
      { name: "Git", level: 92 },
      { name: "Agile / Scrum", level: 88 },
      { name: "Figma", level: 78 },
      { name: "Swagger", level: 85 },
      { name: "Lighthouse", level: 80 },
      { name: "Claude / LLM", level: 90 },
      { name: "Jira", level: 85 },
    ],
  },
];

const colorMap: Record<string, string> = {
  primary: "#6366f1",
  accent: "#06b6d4",
  violet: "#a78bfa",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            e.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
              const el = bar as HTMLElement;
              const width = el.dataset.width ?? "0";
              el.style.width = width + "%";
            });
          }
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
    <section id="skills" ref={ref} className="py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="section-num reveal mb-4">04 — Skills</div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-tight reveal reveal-delay-1">
            My{" "}
            <span className="gradient-text">toolkit.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="reveal gradient-border bg-card rounded-xl p-6"
              style={{ animationDelay: `${gi * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-bold text-text-primary">{group.category}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-text-secondary">{skill.name}</span>
                      <span
                        className="text-xs font-mono"
                        style={{ color: colorMap[group.color] }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full rounded-full transition-all duration-1000 ease-out"
                        data-width={skill.level}
                        style={{
                          width: "0%",
                          background: `linear-gradient(90deg, ${colorMap[group.color]}, ${colorMap[group.color]}99)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra badges */}
        <div className="mt-12 reveal">
          <div className="text-sm font-mono text-muted mb-4 uppercase tracking-widest">
            Also familiar with
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "UmiJS", "Refine", "Frappe", "Docker", "Nginx",
              "Webpack", "Vite", "ESLint", "Prettier",
              "Zustand", "Context API", "GraphQL basics",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-xs font-mono text-muted border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
