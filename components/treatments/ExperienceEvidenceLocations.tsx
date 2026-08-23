"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MapPin } from "lucide-react";
import { telPhone, whatsappLink, directions, nampallyTelPhone, nampallyDirections } from "@/lib/site-data";
import styles from "./ExperienceEvidenceLocations.module.css";

const branchRatings = [
  { branch: "Mehdipatnam", score: "4.3", stars: "★★★★☆", reviews: "260 reviews" },
  { branch: "Nampally", score: "4.5", stars: "★★★★½", reviews: "155 reviews" },
];

const locations = [
  {
    name: "Mehdipatnam",
    address: ["10-3-14B/11/1, Humayun Nagar Rd", "near Azizia Masjid, Royal Colony", "Humayun Nagar", "Hyderabad, Telangana 500006"],
    hours: "4:30 PM–8:00 PM",
    holiday: "Sunday holiday",
    phone: "+91 90306 48393",
    telLink: telPhone,
    whatsappLink: whatsappLink,
    directionsLink: directions,
  },
  {
    name: "Nampally",
    address: ["Medwin Hospital Complex", "Pillar #A1270", "Nampally", "Hyderabad, Telangana 500001"],
    hours: "9:30 AM–8:00 PM",
    holiday: "Sunday holiday",
    phone: "+91 90305 98081",
    telLink: nampallyTelPhone,
    whatsappLink: `https://wa.me/919030598081?text=${encodeURIComponent("Hi, I'd like to enquire about dental treatment at NeoDent Nampally.")}`,
    directionsLink: nampallyDirections,
  },
];

export function ExperienceEvidenceLocations() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-labelledby="experience-title"
    >
      <div className={styles.atmosphere} aria-hidden="true">
        <span className={styles.verticalRail} />
      </div>
      
      <span className={styles.chapterNumeral} aria-hidden="true">07</span>
      
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>Trust & locations</div>
          <h2 id="experience-title" className={styles.title}>
            Experience, evidence <span>& where to find us</span>
          </h2>
        </header>

        {/* Experience */}
        <div className={styles.experience}>
          <div className={styles.experienceItem}>
            <strong>Established 1994</strong>
            <span>Three decades of clinical practice in Hyderabad</span>
          </div>
          <div className={styles.experienceItem}>
            <strong>Specialist-Led</strong>
            <span>Prosthodontic and implant expertise</span>
          </div>
          <div className={styles.experienceItem}>
            <strong>Two Locations</strong>
            <span>Mehdipatnam and Nampally, Hyderabad</span>
          </div>
        </div>

        {/* Evidence - Branch-Specific Ratings */}
        <div className={styles.evidence}>
          <div className={styles.evidenceLabel}>Patient reviews</div>
          <div className={styles.ratings}>
            {branchRatings.map((rating) => (
              <div key={rating.branch} className={styles.rating}>
                <div className={styles.branchName}>{rating.branch}</div>
                <div className={styles.score}>
                  <span className={styles.number}>{rating.score}</span>
                  <span className={styles.stars}>{rating.stars}</span>
                </div>
                <p className={styles.ratingText}>{rating.reviews}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className={styles.locations}>
          <div className={styles.locationsLabel}>Visit NeoDent</div>
          <div className={styles.grid}>
            {locations.map((location) => (
              <article key={location.name} className={styles.card}>
                <h3 className={styles.locationName}>{location.name}</h3>
                <address className={styles.address}>
                  {location.address.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </address>
                <div className={styles.info}>
                  <p className={styles.hours}>{location.hours}</p>
                  <p className={styles.holiday}>{location.holiday}</p>
                </div>
                <div className={styles.contact}>
                  <a href={location.telLink} className={styles.phone}>
                    <Phone size={18} />
                    {location.phone}
                  </a>
                </div>
                <div className={styles.actions}>
                  <a href={location.telLink} className={`${styles.button} ${styles.buttonPrimary}`}>
                    Call
                  </a>
                  <a href={location.whatsappLink} className={`${styles.button} ${styles.buttonSecondary}`}>
                    WhatsApp
                  </a>
                  <a href={location.directionsLink} className={`${styles.button} ${styles.buttonGhost}`}>
                    <MapPin size={16} />
                    Directions
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
