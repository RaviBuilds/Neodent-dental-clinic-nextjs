"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import styles from "./ClinicalLeadership.module.css";
import { EditorialHighlight } from "@/components/ui/EditorialHighlight";

const proofs = [
  ["01", "Credentials", "BDS · MDS · FICOI (U.S.A.)"],
  ["02", "Clinical role", "Prosthodontist & Implantologist"],
  ["03", "Recognition", "Gold Medallist"],
  ["04", "Experience / leadership", "15+ years · Assistant Director · NeoDent"],
];

type TeamMember = {
  label: string;
  name: ReactNode;
  degrees: ReactNode;
  image: string | null;
  alt: string;
  initials?: string;
};

const team: TeamMember[] = [
  {
    label: "01 / SENIOR CLINICAL LEADERSHIP",
    name: <>Dr. Mohd. Siraj<br />Ur Rahman</>,
    degrees: <>BDS · FCIP · MDS (Chennai)<br />Professor · Director, NeoDent · 35+ years</>,
    image: "/assets/Dr. Mohd. Siraj Ur Rahman - Neodent Dental Hospital Hyd.png",
    alt: "Dr. Mohd. Siraj Ur Rahman",
  },
  {
    label: "02 / NEODENT TEAM",
    name: <>Dr. Md. Muti<br />Ur Rahman</>,
    degrees: <>MBBS (OSM) · MD (Gen. Med.)<br />5+ years</>,
    image: "/assets/Dr. Md. Muti Ur Rahman - Neodent  dental clinic.png",
    alt: "Dr. Md. Muti Ur Rahman",
  },
  {
    label: "03 / CLINICAL TEAM",
    name: <>Dr. Asiya<br />Siraj</>,
    degrees: <>MBBS (OSM) · MRSH (LON)<br />30+ years</>,
    image: null,
    alt: "Dr. Asiya Siraj",
    initials: "AS",
  },
  {
    label: "04 / CLINICAL TEAM",
    name: <>Dr. Safoora<br />Talha</>,
    degrees: <>BDS · 12+ years</>,
    image: null,
    alt: "Dr. Safoora Talha",
    initials: "ST",
  },
];

/* Editorial identity plate used only where no authentic NeoDent
   portrait exists yet (Dr. Asiya, Dr. Safoora). It intentionally does
   NOT imply a likeness: an abstract, feature-less head-and-shoulders
   line sits far behind a ghost-serif initials mark, dressed in the
   same registration-dot / hairline / arc vocabulary used across the
   site (see .guide, .filmFocusRing, .filmRegistration). Never a stock
   photo or invented portrait standing in for a real, named clinician
   -- the plate is deliberately its own honest, on-brand object, sized
   to the same frame as a real photograph so all four cards still read
   as one design system. */
function EditorialPortraitPlaceholder({ initials, name }: { initials: string; name: string }) {
  return (
    <div className={styles.identityPlate} role="img" aria-label={`${name} — portrait not available`}>
      <svg className={styles.plateSilhouette} viewBox="0 0 120 160" fill="none" aria-hidden="true" focusable="false">
        <circle cx="60" cy="50" r="25" strokeWidth="1" />
        <path d="M14 158c0-31.5 20.6-57 46-57s46 25.5 46 57" strokeWidth="1" />
      </svg>
      <i className={styles.plateArc} aria-hidden="true" />
      <i className={styles.plateAxis} aria-hidden="true" />
      <i className={styles.plateRule} aria-hidden="true" />
      <i className={styles.plateDot} aria-hidden="true" />
      <span className={styles.plateInitials} aria-hidden="true">{initials}</span>
      <span className={styles.plateLabel} aria-hidden="true">Portrait not available</span>
    </div>
  );
}

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
      {/* Chapter-start seam -- top hairline + centred registration tick,
          carrying the section's own micro-label, marking a clear (but
          still dark) new-chapter boundary with Section 03. */}
      <span className={styles.seam} aria-hidden="true">
        <span className={styles.seamLabel}>04 / Portrait frame</span>
      </span>
      <div className={styles.guide} aria-hidden="true">
        <span /> <span /> <i /> <b />
      </div>

      <div className={styles.container}>
        <header className={styles.header}>
          {/* Numeral sits in normal flow directly before the eyebrow with
              a negative bottom margin, exactly like Section 02's
              .archive-year bleeding into .archive-intro: later siblings
              paint over its lower portion in normal document order, so
              no z-index trick is needed and text stays fully readable. */}
          <span className={styles.numeral} aria-hidden="true">04</span>
          <div className={styles.eyebrow}>04 / The people behind the care</div>
          <div className={styles.metaLine}>Clinical leadership / NeoDent profile</div>
          <h2 id="leadership-title">A steady hand.<br /><span>A human approach.</span></h2>
        </header>

        <div className={styles.feature}>
          <div className={styles.identity}>
            <p className={styles.kicker}>A trusted face of NeoDent</p>
            <h3>Dr. Md. Miftah<br />Ur Rahman</h3>
            <p className={styles.role}>Prosthodontist &amp; Implantologist<br />Assistant Director · NeoDent</p>
            <p className={styles.copy}>
              Alongside his clinical practice, Dr. Miftah brings an{" "}
              <EditorialHighlight tone="primary" onDark>
                academic perspective
              </EditorialHighlight>{" "}
              through his role as an Assistant Professor at SB Patil Dental
              College &amp; Hospital. His specialist training in{" "}
              <EditorialHighlight tone="secondary" onDark>
                prosthodontics and implantology
              </EditorialHighlight>
              , together with years of clinical experience and recognition
              for his work, reflects the blend of{" "}
              <EditorialHighlight tone="quiet" onDark>
                clinical practice, teaching and leadership
              </EditorialHighlight>{" "}
              he brings to NeoDent.
            </p>
            <p className={styles.copy}>
              Dr. Miftah brings a{" "}
              <EditorialHighlight tone="primary" onDark>
                careful, contemporary perspective
              </EditorialHighlight>{" "}
              to an established clinical practice. His work is grounded in{" "}
              <EditorialHighlight tone="secondary" onDark>
                precision
              </EditorialHighlight>
              , clear conversations and{" "}
              <EditorialHighlight tone="quiet" onDark>
                care that stays personal
              </EditorialHighlight>
              .
            </p>
            <a className={styles.link} href="#doctor">Explore Dr. Miftah <ArrowRight size={15} aria-hidden="true" /></a>
          </div>

          {/* The video plate is the section's information anchor: pushed to
              the container's right edge, with the four proof points bound
              to it as an annotation rail rather than sitting beside it as
              an independent list. Each annotation's connecting tick
              terminates exactly at the frame's edge. */}
          <div className={styles.filmPlate}>
            <div className={styles.rail}>
              {proofs.map(([number, label, value]) => (
                <div className={styles.annotation} key={number}>
                  <span className={styles.annotationNumber}>{number}</span>
                  <div>
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </div>
                </div>
              ))}
            </div>

            <figure className={styles.film}>
              <span className={styles.filmFocusRing} aria-hidden="true" />
              <div className={styles.filmFrame}>
                <span className={styles.filmRegistration} aria-hidden="true" />
                {/* TODO: replace with a caption-free Miftah profile clip when available.
                    This is the only Miftah profile clip in /public/assets -- its source
                    has a burned-in caption box baked into the frame. filmCaptionMask
                    below is a minimal, temporary mitigation only; remove once a clean
                    clip is supplied. */}
                <video ref={videoRef} src="/assets/Dr. Miftah Neodent dental clinic Hyderabad - treatment video.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="Dr. Miftah Ur Rahman introduction and clinical profile film" />
                <span className={styles.filmCaptionMask} aria-hidden="true" />
                <div className={styles.filmTop}><span>01 / PROFILE FILM</span><span>NEODENT / 2026</span></div>
                <button type="button" className={styles.control} onClick={toggleVideo} aria-label={playing ? "Pause profile film" : "Play profile film"}>{playing ? <Pause size={14} /> : <Play size={14} />}</button>
              </div>
              <figcaption>Dr. Miftah Ur Rahman / In practice</figcaption>
            </figure>
          </div>
        </div>

        <div className={styles.teamHeader}><span>Supporting clinical team</span><em>Established expertise / one practice</em></div>

        {/* Four consistent team cards -- same frame, same image aspect
            ratio, same label/name/degree stack -- so the roster reads as
            one coherent system. Hierarchy is carried by order and the
            numbered label text, not by unequal card sizes. Dr. Asiya and
            Dr. Safoora use the editorial identity plate above (never an
            invented likeness) so all four cards still share one
            identical design standard. */}
        <div className={styles.team}>
          {team.map((member) => (
            <article className={styles.member} key={member.label}>
              <div className={styles.memberImage}>
                {member.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={member.image} alt={member.alt} />
                ) : (
                  <EditorialPortraitPlaceholder initials={member.initials ?? ""} name={member.alt} />
                )}
              </div>
              <span>{member.label}</span>
              <h3>{member.name}</h3>
              <p>{member.degrees}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
