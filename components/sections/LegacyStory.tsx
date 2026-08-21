"use client";

import { useEffect, useRef, useState } from "react";
import {
  legacyAwardImage,
  legacyInterviewImage,
  legacyPressImage,
  recognitionImage,
} from "@/lib/site-data";

/* ------------------------------------------------------------------
   Homepage Section 02 — "The NeoDent Archive".

   An art-directed editorial composition, not a text+image block:
   an oversized "1994" numeral bleeds behind the intro copy, a
   founder portrait is paired with its own oversized "35+" figure,
   three real archive artifacts (press / television / recognition)
   fan out across a single shared visual field, and the section
   closes on a right-aligned typographic climax rather than a CTA.

   Scoped entirely to `.archive-*` classes — no shared tokens or
   rules are redefined, and Section 01 (.exp-intro) is untouched.
   ------------------------------------------------------------------ */

export function LegacyStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.12 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`archive ${isVisible ? "archive-visible" : ""}`}
      id="legacy"
      aria-labelledby="archive-title"
    >
      <div className="container archive-grid">
        <div className="archive-atmosphere" aria-hidden="true">
          <span className="archive-arch archive-arch-main" />
          <span className="archive-arch archive-arch-inner" />
          <span className="archive-tooth-contour" />
          <span className="archive-draft archive-draft-horizontal" />
          <span className="archive-draft archive-draft-vertical" />
          <span className="archive-registration archive-registration-top" />
          <span className="archive-registration archive-registration-bottom" />
        </div>
        <div className="archive-route" aria-hidden="true">
          <span>01 / BEGINNING</span>
          <span>02 / PEOPLE</span>
          <span>03 / RECORD</span>
          <span>04 / IMPACT</span>
        </div>
        <p className="archive-year" aria-hidden="true">
          1994
        </p>

        <div className="archive-intro">
          <p className="archive-eyebrow">The NeoDent Legacy</p>
          <h2 id="archive-title" className="archive-title">
            Decades of <span>changing smiles.</span>
          </h2>
          <p className="archive-micro">Established in Hyderabad</p>
          <p className="archive-founder-line">
            Founded by Dr. Mohd. Siraj Ur Rahman.
          </p>
          <p className="archive-narrative">
            Established in 1994, NeoDent has grown through decades of clinical
            practice, specialist-led care and a commitment to making dentistry
            more reassuring, personal and precise.
          </p>
        </div>

        <figure className="archive-founder">
          <img
            src={recognitionImage}
            alt="Dr. Mohd. Siraj Ur Rahman, founder and director of NeoDent Dental Hospitals"
            loading="lazy"
          />
          <figcaption>
            <b>Dr. Mohd. Siraj Ur Rahman</b>
            <span>Founder · Director</span>
          </figcaption>
          <p className="archive-figure">
            <strong>35+</strong>
            <span>Years</span>
          </p>
        </figure>

        <figure className="archive-plate archive-plate-press">
          <img
            src={legacyPressImage}
            alt="NeoDent feature in The Siasat Daily, Hyderabad"
            loading="lazy"
          />
          <figcaption>
            <b>The Siasat Daily</b>
            <span>Hyderabad</span>
          </figcaption>
        </figure>

        <figure className="archive-plate archive-plate-tv">
          <img
            src={legacyInterviewImage}
            alt="NeoDent doctor during a News18 Urdu television interview"
            loading="lazy"
          />
          <figcaption>
            <b>Television</b>
            <span>News18 Urdu</span>
          </figcaption>
        </figure>

        <figure className="archive-plate archive-plate-award">
          <img
            src={legacyAwardImage}
            alt="NeoDent recognition archive"
            loading="lazy"
          />
          <figcaption>
            <b>Recognition</b>
          </figcaption>
        </figure>

        <p className="archive-impact archive-figure archive-figure-patients">
          <strong>5,000+</strong>
          <span>Patients treated</span>
        </p>

        <p className="archive-today" aria-hidden="true">
          <span className="archive-today-tick" />
          Today
        </p>

        <div className="archive-climax">
          <p>Different generations.</p>
          <p className="archive-climax-emphasis">One standard of care.</p>
        </div>

        <p className="archive-transition">
          <span className="archive-transition-line" aria-hidden="true" />
          The experience continues
        </p>
      </div>
    </section>
  );
}
