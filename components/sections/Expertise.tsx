"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const expertise: { number: string; title: string; description: string; icon: ReactNode }[] = [
  {
    number: "01",
    title: "Prosthodontics",
    description: "Focused care for restoring function, comfort and confidence.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C26.627 32 32 26.627 32 20C32 13.373 26.627 8 20 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 14V20L24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Implantology",
    description: "Thoughtful implant care guided by a considered clinical approach.",
    icon: <span className="expertise-icon-glyph" aria-hidden="true">+</span>,
  },
  {
    number: "03",
    title: "Restorative dentistry",
    description:
      "Practical restorative care that helps bring back everyday comfort and function.",
    icon: <span className="expertise-icon-glyph" aria-hidden="true">+</span>,
  },
  {
    number: "04",
    title: "Cosmetic dentistry",
    description: "Subtle, considered improvements designed around your natural smile.",
    icon: <span className="expertise-icon-glyph" aria-hidden="true">+</span>,
  },
];

export function Expertise() {
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / window.innerHeight),
      );
      const translateY = (scrollProgress - 0.5) * 40;
      setParallaxY(translateY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section expertise ${isVisible ? "expertise-visible" : ""}`}
      id="expertise"
      aria-labelledby="expertise-title"
      style={{ "--parallax-y": `${parallaxY}px` } as CSSProperties}
    >
      <div className="expertise-decorative-bg">
        <div className="expertise-glow expertise-glow-1" />
        <div className="expertise-glow expertise-glow-2" />
      </div>
      <div className="expertise-floating-accent expertise-floating-accent-1" />
      <div className="expertise-floating-accent expertise-floating-accent-2" />
      <div className="container expertise-grid">
        <div className="expertise-header">
          <div className="eyebrow">Focused care</div>
          <h2 id="expertise-title" className="section-heading">
            Our dental <span className="serif">expertise.</span>
          </h2>
          <p className="section-intro" style={{ marginTop: 26 }}>
            A focused range of care, brought together in one welcoming Hyderabad
            practice.
          </p>
        </div>
        <div className="expertise-list">
          {expertise.map((item, index) => (
            <div
              className="expertise-item"
              key={item.title}
              style={{
                animationDelay: `${0.2 + index * 0.25}s`,
              }}
            >
              <div className="expertise-icon-wrapper">
                <div className="expertise-icon">{item.icon}</div>
                <div className="expertise-number">{item.number}</div>
              </div>
              <div className="expertise-content">
                <span className="expertise-kicker">{item.number} / FOCUS</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
