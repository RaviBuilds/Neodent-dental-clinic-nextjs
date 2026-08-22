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
      {/* Chapter-start seam -- top hairline + flanking registration ticks,
          marking a clear (but still dark) new-chapter boundary with
          Section 03, distinct from the giant-blank-gap failure mode. */}
      <span className={styles.seam} aria-hidden="true" />
      <div className={styles.guide} aria-hidden="true">
        <span /> <span /> <i /> <b />
      </div>
      <span className={styles.guideLabel} aria-hidden="true">04 / Portrait frame</span>
      <div className={styles.container}>
        <header className={styles.header}>
          {/* Numeral now lives inside the header stacking context so it
              bleeds behind the eyebrow/heading, matching Section 02's
              .archive-year structural placement, instead of floating
              disconnected in a corner. */}
          <span className={styles.numeral} aria-hidden="true">04</span>
          <div className={styles.eyebrow}>04 / The people behind the care</div>
          <div className={styles.metaLine}>Clinical leadership / NeoDent profile</div>
          <h2 id="leadership-title">A steady hand.<br /><span>A human approach.</span></h2>
        </header>

        <div className={styles.feature}>
          <div className={styles.column}>
            <div className={styles.identity}>
              <p className={styles.kicker}>A trusted face of NeoDent</p>
              <h3>Dr. Md. Miftah<br />Ur Rahman</h3>
              <p className={styles.role}>Prosthodontist &amp; Implantologist<br />Assistant Director · NeoDent</p>
              <p className={styles.copy}>Dr. Miftah brings a careful, contemporary perspective to an established clinical practice. His work is grounded in precision, clear conversations and care that stays personal.</p>
              <a className={styles.link} href="#doctor">Explore Dr. Miftah <ArrowRight size={15} aria-hidden="true" /></a>
            </div>

            <div className={styles.proofs}>
              {proofs.map(([number, label, value]) => <div className={styles.proof} key={number}><span>{number}</span><div><small>{label}</small><strong>{value}</strong></div></div>)}
            </div>
          </div>

          <figure className={styles.film}>
            <div className={styles.filmFrame}>
              <span className={styles.filmRegistration} aria-hidden="true" />
              {/* TODO: replace with a caption-free Miftah profile clip when available.
                  This is the only Miftah profile clip in /public/assets -- its source
                  has a burned-in caption box baked into the lower part of the frame.
                  filmCaptionMask below is a minimal, temporary mitigation only; it
                  should be removed once a clean clip is supplied. */}
              <video ref={videoRef} src="/assets/Dr. Miftah Neodent dental clinic Hyderabad - treatment video.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Dr. Miftah Ur Rahman introduction and clinical profile film" />
              <span className={styles.filmCaptionMask} aria-hidden="true" />
              <div className={styles.filmTop}><span>01 / PROFILE FILM</span><span>NEODENT / 2026</span></div>
              <button type="button" className={styles.control} onClick={toggleVideo} aria-label={playing ? "Pause profile film" : "Play profile film"}>{playing ? <Pause size={14} /> : <Play size={14} />}</button>
            </div>
            <figcaption>Dr. Miftah Ur Rahman / In practice</figcaption>
          </figure>
        </div>

        <div className={styles.teamHeader}><span>Supporting clinical team</span><em>Established expertise / one practice</em></div>
        <div className={styles.team}>
          <article className={`${styles.member} ${styles.senior}`}><div className={styles.memberImage}><img src="/assets/Dr. Mohd. Siraj Ur Rahman - Neodent Dental Hospital Hyd.png" alt="Dr. Mohd. Siraj Ur Rahman" /></div><span>01 / SENIOR CLINICAL LEADERSHIP</span><h3>Dr. Mohd. Siraj<br />Ur Rahman</h3><p>BDS · FCIP · MDS (Chennai)<br />Professor · Director, NeoDent · 35+ years</p></article>
          <article className={`${styles.member} ${styles.medium}`}><div className={styles.memberImage}><img src="/assets/Dr. Md. Muti Ur Rahman - Neodent  dental clinic.png" alt="Dr. Md. Muti Ur Rahman" /></div><span>02 / NEODENT TEAM</span><h3>Dr. Md. Muti<br />Ur Rahman</h3><p>MBBS (OSM) · MD (Gen. Med.)<br />5+ years</p></article>
          <article className={styles.member}><div className={styles.initials} aria-hidden="true">AS</div><span>03 / CLINICAL TEAM</span><h3>Dr. Asiya<br />Siraj</h3><p>MBBS (OSM) · MRSH (LON)<br />30+ years</p></article>
          <article className={styles.member}><div className={styles.initials} aria-hidden="true">ST</div><span>04 / CLINICAL TEAM</span><h3>Dr. Safoora<br />Talha</h3><p>BDS · 12+ years</p></article>
        </div>
      </div>
    </section>
  );
}
