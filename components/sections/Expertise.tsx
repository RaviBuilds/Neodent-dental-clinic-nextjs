"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, Play } from "lucide-react";
const treatmentVideo = "/assets/neodent clinic treatment video for homepage section3.mp4";

type Treatment = {
  number: string;
  title: string;
  description: string;
  proof?: string;
  visual: string;
  alt: string;
  before?: string;
  beforeAlt?: string;
  video?: boolean;
};

const treatments: Treatment[] = [
  {
    number: "01",
    title: "Dental implants",
    description: "Carefully planned restorative treatment for missing teeth, built around function and a natural-looking result.",
    visual: "/assets/Neodent dental hospital Nampally - Upper Arch Rehab with implants - after surgery.jpg",
    before: "/assets/Neodent dental hospital Nampally - Upper Arch Rehab with implants - before surgery.jpg",
    alt: "Upper arch rehabilitation with implants after surgery at Neodent Dental Hospitals",
    beforeAlt: "Upper arch rehabilitation before surgery at Neodent Dental Hospitals",
    proof: "REAL CASE / UPPER ARCH REHABILITATION",
  },
  {
    number: "02",
    title: "Root canal treatment",
    description: "Focused care to help preserve a natural tooth and bring comfort back to everyday life.",
    visual: "/assets/after treatment.jpg",
    before: "/assets/before treatment.jpg",
    alt: "Root canal treatment result at Neodent Dental Hospitals",
    beforeAlt: "Dental condition before treatment at Neodent Dental Hospitals",
    proof: "REAL CASE / RESTORATIVE CARE",
  },
  {
    number: "03",
    title: "Braces & orthodontics",
    description: "Measured orthodontic care for a healthier bite and a smile that feels like your own.",
    visual: "/assets/Neodent dental hospital Hyderabad - after treatment.jpg",
    before: "/assets/Neodent dental hospital Hyderabad - before treatment.jpg",
    alt: "Smile result after treatment at Neodent Dental Hospitals",
    beforeAlt: "Smile before treatment at Neodent Dental Hospitals",
    proof: "REAL CASE / SMILE ALIGNMENT",
  },
  {
    number: "04",
    title: "Smile design",
    description: "Subtle cosmetic planning that respects your features while refining the way your smile comes together.",
    proof: "REAL CASE / ZIRCONIA CROWNS",
    visual: "/assets/Neodent dental hospital Hyderabad - Anterior Smile design of an accident case with zirconia crowns -after treatment.jpg",
    before: "/assets/Neodent dental hospital Hyderabad - Anterior Smile design of an accident case with zirconia crowns -before treatment.jpg",
    alt: "Anterior smile design with zirconia crowns after treatment",
    beforeAlt: "Anterior smile before zirconia crown treatment",
  },
  {
    number: "05",
    title: "Full mouth rehabilitation",
    description: "Comprehensive restorative care when several parts of your smile need to work together again.",
    visual: "/assets/Neodent dental Hospital Mehdipatnam - full mouth rehab with implants - after surgery.jpg",
    before: "/assets/Neodent dental Hospital Mehdipatnam - full mouth rehab with implants - before surgery.jpg",
    alt: "Full mouth rehabilitation with implants after surgery",
    beforeAlt: "Full mouth condition before implant rehabilitation",
    proof: "REAL CASE / FULL MOUTH REHABILITATION",
  },
  {
    number: "06",
    title: "Scaling & polishing",
    description: "A considered clean that supports gum health and leaves your mouth feeling fresh and cared for.",
    visual: "/assets/neodent dental hospital mehdipatnam - scaling and polishing treatment after.jpg",
    before: "/assets/neodent dental hospital mehdipatnam - scaling and polishing treatment before.jpg",
    alt: "Scaling and polishing result at Neodent Dental Hospitals",
    beforeAlt: "Teeth before scaling and polishing at Neodent Dental Hospitals",
    proof: "REAL CASE / GUM HEALTH",
  },
  {
    number: "07",
    title: "Composite build-up",
    description: "Conservative restorative detail for small changes that can make a meaningful difference to a smile.",
    proof: "REAL CASE / COMPOSITE SMILE DESIGN",
    visual: "/assets/Neodent dental hospital Treatment - Composite build up smile design after.jpg",
    before: "/assets/Neodent dental hospital Treatment - Composite build up smile design  before.jpg",
    alt: "Composite build-up smile design after treatment",
    beforeAlt: "Smile before composite build-up treatment",
    video: true,
  },
];

export function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const active = treatments[activeIndex];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(node);
      }
    }, { threshold: 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section treatment-atlas ${isVisible ? "treatment-atlas-visible" : ""}`}
      id="expertise"
      aria-labelledby="treatment-atlas-title"
      style={{ "--atlas-stage-image": `url(${active.visual})` } as CSSProperties}
    >
      <div className="treatment-atlas-geometry" aria-hidden="true" />
      <div className="container treatment-atlas-shell">
        <div className="treatment-atlas-header">
          <div className="treatment-atlas-number" aria-hidden="true">03</div>
          <div className="treatment-atlas-copy">
            <div className="eyebrow">Dental care <span>/</span> Featured treatment atlas</div>
            <h2 id="treatment-atlas-title">What can we <span className="serif">help you with?</span></h2>
            <p>Focused care for the dental problems that bring patients to us.</p>
          </div>
        </div>

        <div className="treatment-atlas-grid">
          <nav className="treatment-atlas-index" aria-label="Featured treatment areas">
            {treatments.map((treatment, index) => (
              <button
                key={treatment.number}
                type="button"
                className={`treatment-atlas-item ${index === activeIndex ? "is-active" : ""}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span>{treatment.number}</span>
                <strong>{treatment.title}</strong>
                <ArrowRight aria-hidden="true" />
              </button>
            ))}
          </nav>

          <div className="treatment-atlas-stage" aria-live="polite">
            <div className="treatment-atlas-stage-backdrop" aria-hidden="true" />
            <div className="treatment-atlas-stage-media">
              {active.video ? (
                <video src={treatmentVideo} muted loop playsInline autoPlay preload="metadata" aria-label="Neodent clinical treatment film" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={active.visual} alt={active.alt} />
              )}
              <span className="treatment-atlas-stage-label">{active.video ? "Treatment film" : "In practice"}</span>
              {active.video && <span className="treatment-atlas-play"><Play fill="currentColor" aria-hidden="true" /></span>}
            </div>
            {active.before && (
              <div className="treatment-atlas-before-after" aria-label="Before and after treatment images">
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={active.before} alt={active.beforeAlt} />
                  <figcaption>Before</figcaption>
                </figure>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={active.visual} alt={active.alt} />
                  <figcaption>After</figcaption>
                </figure>
              </div>
            )}
            <div className="treatment-atlas-stage-meta">
              <span>NEODENT / CLINICAL CARE</span>
              <span>0{activeIndex + 1} / 07</span>
            </div>
            <div className="treatment-atlas-detail">
              <div>
                <span className="treatment-atlas-kicker">{active.number} / {active.video ? "TREATMENT FILM" : "FEATURED CARE"}</span>
                <h3>{active.title}</h3>
                <p>{active.description}</p>
              </div>
              {active.proof && <span className="treatment-atlas-proof">{active.proof}</span>}
              <a href="#contact" className="treatment-atlas-link">Explore treatment <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <a href="#contact" className="treatment-atlas-all">Explore all treatments <ArrowRight aria-hidden="true" /></a>
      </div>
    </section>
  );
}

export { treatments };
