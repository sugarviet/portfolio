"use client";

import { useEffect, useRef } from "react";

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: "Email",
    value: "vietdanghoang1705@gmail.com",
    href: "mailto:vietdanghoang1705@gmail.com",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12 19.79 19.79 0 0 1 1.15 3.42 2 2 0 0 1 3.12 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
      </svg>
    ),
    label: "Phone",
    value: "0905 124 585",
    href: "tel:+84905124585",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: "GitHub",
    value: "github.com/sugarviet",
    href: "https://github.com/sugarviet",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
    href: null,
  },
];

export default function Contact() {
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
    <section id="contact" ref={ref} className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="section-num reveal mb-4">05 — Contact</div>
          <h2 className="text-[clamp(36px,5vw,56px)] font-black leading-tight reveal reveal-delay-1">
            Let&apos;s{" "}
            <span className="gradient-text">work together.</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg leading-relaxed reveal reveal-delay-2">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind or just want to chat — my inbox is always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-4 reveal reveal-delay-2">
            {contactItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-5 gradient-border bg-card rounded-xl hover:bg-surface transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-muted mb-0.5 font-mono uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-text-primary font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                    </div>
                    <svg
                      className="ml-auto text-muted group-hover:text-primary transition-colors"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 bg-card/50 border border-border rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-muted">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-muted mb-0.5 font-mono uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="text-text-secondary font-medium">{item.value}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="reveal reveal-delay-3">
            <div className="relative gradient-border bg-card rounded-2xl p-10 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

              <div className="relative">
                <div className="text-4xl mb-6">👋</div>
                <h3 className="text-2xl font-bold mb-4">
                  Ready to build something great?
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  I&apos;m available for freelance projects, full-time positions,
                  and consulting. Let&apos;s discuss how I can help bring your
                  product to life.
                </p>

                <div className="space-y-3">
                  <a
                    href="mailto:vietdanghoang1705@gmail.com"
                    className="btn-primary w-full justify-center"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    Send me an email
                  </a>
                  <a
                    href="https://github.com/sugarviet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full justify-center"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View my GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
