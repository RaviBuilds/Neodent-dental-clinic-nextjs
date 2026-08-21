"use client";

import { useEffect, useRef, useState } from "react";
import {
  legacyAwardImage,
  legacyInterviewImage,
  legacyPressImage,
} from "@/lib/site-data";

const trustData = [
  { value: "1994", label: "Established" },
  { value: "5,000+", label: "Patients treated" },
  { value: "2", label: "Hyderabad locations" },
];

export function LegacyStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.16 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`legacy-story ${isVisible ? "legacy-story-visible" : ""}`}
      id="legacy"
      aria-labelledby="legacy-title"
    >
      <div className="container legacy-story-inner">
        <div className="legacy-story-copy">
          <p className="legacy-eyebrow">NeoDent Dental Hospitals</p>
          <h2 id="legacy-title" className="legacy-title">
            Decades of <span>changing smiles.</span>
          </h2>
          <p className="legacy-description">
            Established in 1994, NeoDent has grown through decades of clinical
            practice, specialist care and a commitment to changing smiles.
          </p>
          <div className="legacy-trust" aria-label="NeoDent facts">
            {trustData.map((item) => (
              <div className="legacy-trust-item" key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="legacy-archive" aria-label="NeoDent legacy archive">
          <span className="legacy-spine" aria-hidden="true" />
          <figure className="legacy-plate legacy-plate-primary">
            <img src={legacyPressImage} alt="NeoDent feature in The Siasat Daily" loading="lazy" />
            <figcaption><b>Press</b><span>The Siasat Daily · Hyderabad</span></figcaption>
          </figure>
          <figure className="legacy-plate legacy-plate-interview">
            <img src={legacyInterviewImage} alt="NeoDent doctor during a News18 Urdu television interview" loading="lazy" />
            <figcaption><b>Television</b><span>News18 Urdu · Hello Parwaz</span></figcaption>
          </figure>
          <figure className="legacy-plate legacy-plate-award">
            <img src={legacyAwardImage} alt="NeoDent recognition archive" loading="lazy" />
            <figcaption><b>Recognition</b></figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
