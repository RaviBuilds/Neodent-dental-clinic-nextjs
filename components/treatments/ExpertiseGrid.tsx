"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./ExpertiseGrid.module.css";

const treatments = [
  {
    id: "full-mouth-rehabilitation",
    number: "01",
    title: "Full Mouth Rehabilitation",
    description: "Comprehensive restoration for patients with multiple missing, damaged or compromised teeth.",
    image: "/assets/Neodent dental Hospital Mehdipatnam - full mouth rehab with implants - after surgery.jpg",
    alt: "Full mouth rehabilitation result at NeoDent",
  },
  {
    id: "dental-implants",
    number: "02",
    title: "Dental Implants",
    description: "Implant-based solutions for replacing missing teeth and supporting comprehensive dental rehabilitation.",
    image: "/assets/neodent-dmls-crowns-dental-model-front-view.jpg",
    alt: "Dental implant model at NeoDent",
  },
  {
    id: "orthodontics",
    number: "03",
    title: "Orthodontics",
    description: "Treatment focused on improving tooth alignment, spacing and bite.",
    image: "/assets/Neodent dental hospital Interior.jpg",
    alt: "Orthodontic treatment at NeoDent",
  },
  {
    id: "root-canal",
    number: "04",
    title: "Root Canal Treatment",
    description: "Treatment aimed at addressing problems within an affected tooth while preserving the natural tooth where appropriate.",
    image: "/assets/Dr Siraj and Dr. Miftah Neodent dental clinic - during treatment.webp",
    alt: "Root canal treatment at NeoDent",
  },
  {
    id: "smile-designing",
    number: "05",
    title: "Smile Designing",
    description: "Aesthetic planning focused on improving the appearance, balance and harmony of the smile.",
    image: "/assets/Neodent dental hospital Hyderabad - Anterior Smile design of an accident case with zirconia crowns -after treatment.jpg",
    alt: "Smile design treatment result at NeoDent",
  },
  {
    id: "dentures",
    number: "06",
    title: "Complete Dentures & Removable Partial Dentures",
    description: "Removable solutions for replacing multiple missing teeth and supporting everyday oral function.",
    image: "/assets/Neodent dental clinic - modern dental treatment chair.png",
    alt: "Denture treatment facilities at NeoDent",
  },
  {
    id: "veneers",
    number: "07",
    title: "Veneers",
    description: "Aesthetic dental restorations used in suitable cases to improve the appearance of selected teeth and the smile.",
    image: "/assets/neodent-dmls-crowns-dental-model-side-view.jpg",
    alt: "Veneer treatment demonstration at NeoDent",
  },
];

export function ExpertiseGrid() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-labelledby="expertise-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>02 / Areas of expertise</div>
          <h2 id="expertise-title" className={styles.title}>
            Our Areas of <span>Dental Expertise</span>
          </h2>
        </header>

        <div className={styles.grid}>
          {treatments.map((treatment, index) => (
            <article
              key={treatment.id}
              className={styles.card}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={styles.cardImage}>
                <Image
                  src={treatment.image}
                  alt={treatment.alt}
                  width={400}
                  height={300}
                  className={styles.image}
                />
                <span className={styles.cardNumber}>{treatment.number}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{treatment.title}</h3>
                <p className={styles.cardDescription}>{treatment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
