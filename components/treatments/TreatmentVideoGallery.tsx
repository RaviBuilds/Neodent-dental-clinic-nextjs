"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import styles from "./TreatmentVideoGallery.module.css";

const videos = [
  {
    id: "detailed",
    number: "01",
    title: "A Closer Look at Clinical Treatment",
    description: "Real clinical treatment performed by the NeoDent dental team.",
    src: "/assets/dr-miftah-neodent-clinical-treatment-detailed.mp4",
    poster: "/assets/Neodent dental hospital Interior.jpg",
  },
  {
    id: "procedure",
    number: "02",
    title: "Treatment in Practice",
    description: "Clinical dental procedure carried out in the NeoDent treatment room.",
    src: "/assets/dr-miftah-neodent-dental-treatment-procedure.mp4",
    poster: "/assets/Dr Siraj and Dr. Miftah Neodent dental clinic - during treatment.webp",
  },
  {
    id: "cementation",
    number: "03",
    title: "Crown Cementation",
    description: "A real clinical glimpse of crown cementation performed by Dr. Md. Miftah Ur Rahman.",
    src: "/assets/dr-miftah-neodent-crown-cementation-procedure.mp4",
    poster: "/assets/neodent-dmls-crowns-dental-model-side-view.jpg",
  },
];

export function TreatmentVideoGallery() {
  const [visible, setVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (!entry.isIntersecting && activeVideo) {
          videoRefs.current[activeVideo]?.pause();
          setActiveVideo(null);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [activeVideo]);

  const playVideo = (videoId: string) => {
    // Pause all other videos
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (id !== videoId && video) {
        video.pause();
      }
    });

    const video = videoRefs.current[videoId];
    if (video) {
      void video.play().catch(() => undefined);
      setActiveVideo(videoId);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ""}`}
      aria-labelledby="videos-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>04 / Clinical environment</div>
          <h2 id="videos-title" className={styles.title}>
            Real Treatment. <span>Real Clinical Environment.</span>
          </h2>
          <p className={styles.lead}>
            Explore real treatment footage from NeoDent, showing the clinical environment 
            and the work carried out by the dental team.
          </p>
        </header>

        <div className={styles.grid}>
          {videos.map((video, index) => (
            <article
              key={video.id}
              className={styles.card}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={styles.videoWrapper}>
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  className={styles.video}
                  poster={video.poster}
                  preload="metadata"
                  playsInline
                  controls
                  aria-label={video.title}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video element.
                </video>
                {activeVideo !== video.id && (
                  <button
                    type="button"
                    className={styles.playOverlay}
                    onClick={() => playVideo(video.id)}
                    aria-label={`Play ${video.title}`}
                  >
                    <Play size={32} />
                  </button>
                )}
                <span className={styles.videoNumber}>{video.number}</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{video.title}</h3>
                <p className={styles.cardDescription}>{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
