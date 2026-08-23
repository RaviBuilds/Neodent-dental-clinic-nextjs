"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { AppButton } from "@/components/ui/AppButton";
import { whatsappConsultLink } from "@/lib/site-data";
import styles from "./TreatmentsHero.module.css";

interface TreatmentsHeroProps {
  onBook: () => void;
}

export function TreatmentsHero({ onBook }: TreatmentsHeroProps) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.hero} ${visible ? styles.visible : ""}`}
      aria-labelledby="hero-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>NEODENT DENTAL HOSPITALS · ESTABLISHED 1994</div>
          <h1 id="hero-title" className={styles.title}>
            Dental Expertise for Health, Function & <span>Confident Smiles</span>
          </h1>
          <p className={styles.lead}>
            At NeoDent Dental Hospitals, decades of clinical experience come together with 
            specialist-led dental care to help patients restore oral health, function and confidence. 
            From replacing missing teeth to comprehensive rehabilitation and smile-focused treatments, 
            every case begins with understanding the patient's individual needs.
          </p>
          <div className={styles.trustStrip}>
            <div className={styles.trustItem}>
              <strong>Since 1994</strong>
              <span>Established practice</span>
            </div>
            <div className={styles.trustItem}>
              <strong>5,000+ Patients</strong>
              <span>Treated with care</span>
            </div>
            <div className={styles.trustItem}>
              <strong>Two Locations</strong>
              <span>Mehdipatnam · Nampally</span>
            </div>
          </div>
          <div className={styles.actions}>
            <AppButton onClick={onBook} variant="primary">
              Book an Appointment <ArrowRight size={16} />
            </AppButton>
            <AppButton href={whatsappConsultLink} variant="ghost">
              WhatsApp NeoDent
            </AppButton>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.frame}>
            <Image
              src="/assets/Dr. Md. Miftah Ur Rahman - Neodent Dental Hospital.png"
              alt="Dr. Md. Miftah Ur Rahman at NeoDent Dental Hospital"
              width={600}
              height={800}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
