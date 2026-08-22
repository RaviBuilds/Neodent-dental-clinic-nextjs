"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import styles from "./ClinicalLeadership.module.css";

const proofs = [
  ["01", "Credentials", "BDS · MDS · FICOI (U.S.A.)"],
  ["02", "Clinical role", "Prosthodontist & Implantologist"],
  ["03", "Recognition", "Gold Medallist"],
  ["04", "Experience / leadership", "15+ years · Assistant Director · NeoDent"],
];

export function ClinicalLeadership() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) void videoRef.current?.play().catch(() => undefined);
      else videoRef.current?.pause();
    }, { threshold: 0.18 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().catch(() => undefined);
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section ref={sectionRef} className={`${styles.section} ${visible ? styles.visible : ""}`} id="leadership" aria-labelledby="leadership-title">
      <div className={styles.guide} aria-hidden="true"><span /> <span /> <i /></div>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.chapter}><span>04</span><em>THE PEOPLE BEHIND THE CARE</em></div>
          <div className={styles.eyebrow}>Clinical leadership / NeoDent profile</div>
          <h2 id="leadership-title">A steady hand.<br /><span>A human approach.</span></h2>
        </header>

        <div className={styles.feature}>
          <div className={styles.identity}>
            <p className={styles.kicker}>A trusted face of NeoDent</p>
            <h3>Dr. Md. Miftah<br />Ur Rahman</h3>
            <p className={styles.role}>Prosthodontist &amp; Implantologist<br />Assistant Director · NeoDent</p>
            <p className={styles.copy}>Dr. Miftah brings a careful, contemporary perspective to an established clinical practice. His work is grounded in precision, clear conversations and care that stays personal.</p>
            <a className={styles.link} href="#doctor">Explore Dr. Miftah <ArrowRight size={15} aria-hidden="true" /></a>
          </div>

          <figure className={styles.film}>
            <div className={styles.filmFrame}>
              <video ref={videoRef} src="/assets/Dr. Miftah Neodent dental clinic Hyderabad - treatment video.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Dr. Miftah Ur Rahman introduction and clinical profile film" />
              <div className={styles.filmTop}><span>01 / PROFILE FILM</span><span>NEODENT / 2026</span></div>
              <button type="button" className={styles.control} onClick={toggleVideo} aria-label={playing ? "Pause profile film" : "Play profile film"}>{playing ? <Pause size={14} /> : <Play size={14} />}</button>
            </div>
            <figcaption>Dr. Miftah Ur Rahman / In practice</figcaption>
          </figure>

          <div className={styles.proofs}>
            {proofs.map(([number, label, value]) => <div className={styles.proof} key={number}><span>{number}</span><div><small>{label}</small><strong>{value}</strong></div></div>)}
          </div>
        </div>

        <div className={styles.teamHeader}><span>Supporting clinical team</span><em>Established expertise / one practice</em></div>
        <div className={styles.team}>
          <article className={`${styles.member} ${styles.senior}`}><div className={styles.memberImage}><img src="/assets/Dr. Mohd. Siraj Ur Rahman - Neodent Dental Hospital Hyd.png" alt="Dr. Mohd. Siraj Ur Rahman" /></div><span>01 / Senior clinical leadership</span><h3>Dr. Mohd. Siraj<br />Ur Rahman</h3><p>BDS · FCIP · MDS (Chennai)<br />Professor · Director, NeoDent · 35+ years</p></article>
          <article className={styles.member}><div className={styles.initials}>MU</div><span>02 / NeoDent team</span><h3>Dr. Md. Muti<br />Ur Rahman</h3><p>MBBS (OSM) · MD (Gen. Med.)<br />5+ years</p></article>
          <article className={styles.member}><div className={styles.initials}>AS</div><span>03 / Clinical team</span><h3>Dr. Asiya<br />Siraj</h3><p>MBBS (OSM) · MRSH (LON)<br />30+ years</p></article>
          <article className={styles.member}><div className={styles.initials}>ST</div><span>04 / Clinical team</span><h3>Dr. Safoora<br />Talha</h3><p>BDS · 12+ years</p></article>
        </div>
      </div>
    </section>
  );
}
