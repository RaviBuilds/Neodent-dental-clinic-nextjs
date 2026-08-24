"use client";

import { useEffect, useRef, useState } from "react";
import { EditorialHighlight } from "@/components/ui/EditorialHighlight";
import {
  mehdipatnamExteriorImage,
  mehdipatnamInteriorImage,
  nampallyExteriorImage,
  nampallyInteriorImage,
} from "@/lib/site-data";
import styles from "./InsideNeoDent.module.css";

/* ------------------------------------------------------------------
   Clinic page — Section 03 — "Inside NeoDent".

   Warm ivory editorial surface. Design language inherits from the
   About page's LegacyAndPeople and the homepage's LegacyStory
   canonical reference (Section 02). Echoes the homepage's
   "Spaces designed around care" heading, but is a distinct
   composition — not a duplicate.

   Composition: heading + single paragraph on the left, a cinematic
   editorial image assembly on the right and below:
     - PRIMARY (large): Nampally interior — the double-height
       reception, the strongest interior of all four frames
     - SECONDARY (offset): Mehdipatnam interior
     - SUPPORTING A (small): Mehdipatnam exterior
     - SUPPORTING B (small): Nampally exterior

   Not a masonry grid. Not equal cards. The images are visual
   architecture used to tell a spatial story.

   Closes with a quiet geographic signature line:
   MEHDIPATNAM · NAMPALLY · HYDERABAD
   ------------------------------------------------------------------ */

function useReveal<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

export function InsideNeoDent() {
  const [sectionRef, sectionVisible] = useReveal<HTMLElement>(0.05);
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>(0.1);
  const [mediaRef, mediaVisible] = useReveal<HTMLDivElement>(0.07);
  const [sigRef, sigVisible] = useReveal<HTMLDivElement>(0.1);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${sectionVisible ? styles.visible : ""}`}
      id="inside-neodent"
      aria-labelledby="inside-title"
    >
      {/* Chapter-start seam — constrained to container width */}
      <span className={styles.seam} aria-hidden="true" />

      {/* Atmosphere geometry */}
      <div className={styles.atmosphere} aria-hidden="true">
        <span className={styles.draftHorizontal} />
        <span className={styles.draftVertical} />
        <span className={styles.registrationDot} />
        <span className={styles.registrationDotSmall} />
      </div>

      <div className={styles.container}>
        {/* ---- Top composition — header / copy beside media assembly ---- */}
        <div className={styles.composition}>
          {/* ---- LEFT — header + copy ---- */}
          <div
            ref={headerRef}
            className={`${styles.copyCol} ${headerVisible ? styles.blockVisible : ""}`}
          >
            <header className={styles.header}>
              <span className={styles.numeral} aria-hidden="true">
                03
              </span>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowRule} aria-hidden="true" />
                03 / Inside NeoDent
              </div>
              <h2 id="inside-title" className={styles.title}>
                Spaces designed
                <br />
                <span>around care.</span>
              </h2>
            </header>

            <p className={styles.paragraph}>
              Across{" "}
              <EditorialHighlight tone="secondary">
                Mehdipatnam and Nampally
              </EditorialHighlight>
              , NeoDent&apos;s clinical spaces are shaped around the practical
              needs of dental care — from{" "}
              <EditorialHighlight tone="primary">
                consultation and treatment
              </EditorialHighlight>{" "}
              to follow-up. The surroundings differ between the two locations,
              but both reflect the same focus on clear, comfortable and{" "}
              <EditorialHighlight tone="quiet">
                clinically focused patient care
              </EditorialHighlight>
              .
            </p>
          </div>

          {/* ---- RIGHT — primary + secondary plates ---- */}
          <div
            ref={mediaRef}
            className={`${styles.mediaCol} ${mediaVisible ? styles.blockVisible : ""}`}
          >
            {/* Primary dominant plate — Nampally interior */}
            <figure className={styles.primaryPlate} aria-label="NeoDent Nampally interior — reception and consultation wing">
              <span className={styles.primaryOffsetFrame} aria-hidden="true" />
              <div className={styles.primaryFrame}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={nampallyInteriorImage}
                  alt="NeoDent Dental Hospital Nampally — the double-height reception and consultation wing"
                  loading="lazy"
                  style={{ objectPosition: "50% 24%" }}
                />
                <span className={styles.primaryShade} aria-hidden="true" />
                <span className={styles.primaryRegistration} aria-hidden="true" />
                <div className={styles.primaryMeta}>
                  <span>NAMPALLY</span>
                  <span>Interior</span>
                </div>
              </div>
              {/* Secondary offset plate — Mehdipatnam interior */}
              <div className={styles.secondaryPlate}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={mehdipatnamInteriorImage}
                  alt="NeoDent Dental Hospital Mehdipatnam — patient waiting lounge"
                  loading="lazy"
                  style={{ objectPosition: "68% 42%" }}
                />
                <div className={styles.secondaryPlateMeta}>
                  <span>Mehdipatnam</span>
                </div>
              </div>
            </figure>
          </div>
        </div>

        {/* ---- Supporting image row — two exterior plates ---- */}
        <div
          className={`${styles.supportingRow} ${mediaVisible ? styles.blockVisible : ""}`}
          aria-hidden="false"
        >
          <figure className={styles.supportingPlateA}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mehdipatnamExteriorImage}
              alt="NeoDent Dental Hospital Mehdipatnam — exterior entrance"
              loading="lazy"
              style={{ objectPosition: "50% 36%" }}
            />
            <figcaption className={styles.supportingCaption}>Mehdipatnam</figcaption>
          </figure>
          <figure className={styles.supportingPlateB}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={nampallyExteriorImage}
              alt="NeoDent Dental Hospital Nampally — street frontage and signage"
              loading="lazy"
              style={{ objectPosition: "50% 40%" }}
            />
            <figcaption className={styles.supportingCaption}>Nampally</figcaption>
          </figure>
        </div>

        {/* ---- Closing geographic signature ---- */}
        <div
          ref={sigRef}
          className={`${styles.signature} ${sigVisible ? styles.blockVisible : ""}`}
          aria-label="NeoDent clinic locations"
        >
          <span className={styles.signatureTick} aria-hidden="true" />
          <span className={styles.signatureText}>
            Mehdipatnam
            <span className={styles.signatureDot} aria-hidden="true">·</span>
            Nampally
            <span className={styles.signatureDot} aria-hidden="true">·</span>
            Hyderabad
          </span>
        </div>
      </div>
    </section>
  );
}
