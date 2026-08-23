"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { EditorialHighlight } from "@/components/ui/EditorialHighlight";
import styles from "./RehabilitationFeature.module.css";

export function RehabilitationFeature() {
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
      aria-labelledby="rehab-title"
    >
      <span className={styles.seam} aria-hidden="true">
        <span className={styles.seamLabel}>05 / Full mouth rehabilitation</span>
      </span>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>05 / Comprehensive care</div>
          <h2 id="rehab-title" className={styles.title}>
            When Treatment Goes <span>Beyond a Single Tooth</span>
          </h2>
        </header>

        <div className={styles.feature}>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              Some dental problems involve{" "}
              <EditorialHighlight tone="primary" onDark>
                multiple teeth, missing teeth or broader functional concerns
              </EditorialHighlight>
              . Full mouth rehabilitation brings multiple aspects of care together through a{" "}
              <EditorialHighlight tone="secondary" onDark>
                comprehensive treatment plan
              </EditorialHighlight>
              {" "}tailored to the{" "}
              <EditorialHighlight tone="quiet" onDark>
                patient's condition
              </EditorialHighlight>
              .
            </p>
            <p className={styles.paragraph}>
              This approach may involve{" "}
              <EditorialHighlight tone="primary" onDark>
                dental implants, restorative work, occlusal adjustments
              </EditorialHighlight>
              {" "}and other procedures coordinated to address the patient's overall oral health,{" "}
              <EditorialHighlight tone="secondary" onDark>
                function and aesthetic goals
              </EditorialHighlight>
              {" "}in a{" "}
              <EditorialHighlight tone="quiet" onDark>
                planned, phased manner
              </EditorialHighlight>
              .
            </p>
          </div>

          <div className={styles.videoPlate}>
            <div className={styles.videoFrame}>
              <video
                ref={videoRef}
                className={styles.video}
                poster="/assets/Neodent dental Hospital Mehdipatnam - full mouth rehab with implants - after surgery.jpg"
                preload="metadata"
                playsInline
                aria-label="Full mouth rehabilitation using dental implants at NeoDent"
              >
                <source
                  src="/assets/neodent-full-mouth-rehabilitation-using-dental-implants.mp4"
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
                {playing ? <Pause size={32} /> : <Play size={32} />}
              </button>
              <div className={styles.videoLabel}>
                <span>FULL MOUTH REHABILITATION</span>
                <span>Using dental implants</span>
              </div>
            </div>
            <figcaption className={styles.caption}>
              Full Mouth Rehabilitation Using Dental Implants
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
