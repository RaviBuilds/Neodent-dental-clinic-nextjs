"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import styles from "./ClinicalEducation.module.css";

export function ClinicalEducation() {
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          videoRef.current?.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.3 }
    );
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
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-labelledby="education-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>03 / Doctor-led education</div>
          <h2 id="education-title" className={styles.title}>
            Clinical Expertise, <span>Explained by Our Doctors</span>
          </h2>
          <p className={styles.lead}>
            At NeoDent, our doctors take the time to explain treatment approaches, 
            materials and clinical considerations to help patients understand their care.
          </p>
        </header>

        <div className={styles.videoFeature}>
          <div className={styles.videoFrame}>
            <video
              ref={videoRef}
              className={styles.video}
              poster="/assets/neodent-dmls-crowns-dental-model-front-view.jpg"
              preload="metadata"
              playsInline
              aria-label="Dr. Md. Miftah Ur Rahman explaining DMLS crowns and masticatory efficiency"
            >
              <source
                src="/assets/dr-miftah-explains-dmls-crowns-masticatory-efficiency.mp4"
                type="video/mp4"
              />
              Your browser does not support the video element.
            </video>
            <button
              type="button"
              className={styles.playButton}
              onClick={toggleVideo}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              {playing ? <Pause size={28} /> : <Play size={28} />}
            </button>
            <div className={styles.videoLabel}>
              <span className={styles.labelIndex}>01 / CLINICAL EDUCATION</span>
              <span className={styles.labelDuration}>Educational video</span>
            </div>
          </div>
          <div className={styles.videoInfo}>
            <h3 className={styles.videoTitle}>
              Understanding DMLS Crowns & Their Functional Strength
            </h3>
            <p className={styles.videoDescription}>
              Dr. Md. Miftah Ur Rahman explains the functional characteristics of DMLS crowns, 
              including their strength and masticatory efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
