"use client";

import { useEffect, useRef, useState } from "react";
import { EditorialHighlight } from "@/components/ui/EditorialHighlight";
import styles from "./TreatmentIntro.module.css";

export function TreatmentIntro() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-labelledby="intro-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>01 / Treatment philosophy</div>
          <h2 id="intro-title" className={styles.title}>
            Comprehensive Dental Care, <span>Planned Around You</span>
          </h2>
        </header>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            Different dental conditions require different approaches. Some patients may need{" "}
            <EditorialHighlight tone="primary">
              treatment focused on a single tooth
            </EditorialHighlight>
            , while others may benefit from a more comprehensive plan addressing{" "}
            <EditorialHighlight tone="secondary">
              multiple areas of concern
            </EditorialHighlight>
            . At NeoDent, treatment begins with understanding the patient's condition, their{" "}
            <EditorialHighlight tone="quiet">
              functional requirements and aesthetic goals
            </EditorialHighlight>
            .
          </p>

          <p className={styles.paragraph}>
            Our approach considers{" "}
            <EditorialHighlight tone="primary">
              oral health, function and aesthetics
            </EditorialHighlight>
            {" "}together. Whether addressing missing teeth through implant-based solutions, 
            improving alignment through orthodontic care, restoring compromised teeth or planning{" "}
            <EditorialHighlight tone="secondary">
              comprehensive full mouth rehabilitation
            </EditorialHighlight>
            , the treatment plan is shaped by the{" "}
            <EditorialHighlight tone="quiet">
              individual patient's needs
            </EditorialHighlight>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
