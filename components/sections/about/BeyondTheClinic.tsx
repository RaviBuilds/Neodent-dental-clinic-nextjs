"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import {
  mehdipatnamInteriorImage,
  nampallyInteriorImage,
} from "@/lib/site-data";
import { EditorialHighlight } from "@/components/ui/EditorialHighlight";
import styles from "./BeyondTheClinic.module.css";

/* ------------------------------------------------------------------
   About page — Section 02 — "Beyond The Clinic".

   Deep NeoDent charcoal surface, mirroring the dark-surface pattern
   already established by ClinicalLeadership / SpacesDesignedAroundCare
   / ContactNextStep: local --charcoal/--ivory/--muted/--red tokens
   layered over the same global type system (DM Serif Display + red
   italic emphasis, 10px/.2em eyebrow, mono metadata). Nothing here
   edits globals.css or any locked homepage section.

   Six editorial acts: three public-education video features (each
   using its real on-disk .jpg as the poster, click-to-play, no
   autoplay), Dr. Siraj's television interview as supporting media
   evidence, the Republic Day community address, a short archive
   continuation, and a return to present-day NeoDent across
   Mehdipatnam and Nampally — closing on two editorial links (no
   appointment booking). ------------------------------------------------------------------ */

type VideoFeature = {
  index: string;
  eyebrow: string;
  title: string;
  src: string;
  poster: string;
  ariaLabel: string;
  description: ReactNode;
};

const videoFeatures: VideoFeature[] = [
  {
    index: "01",
    eyebrow: "01 / Dental Education",
    title: "Understanding children's dental health.",
    src: "/assets/Early Childhood Dental Caries- Prevalence, Risk Factors, and Prevention - Dr Siraj Ur Rahman Neodent dental clinic hyderabad.mp4",
    poster:
      "/assets/Early Childhood Dental Caries- Prevalence, Risk Factors, and Prevention - Dr Siraj Ur Rahman Neodent dental clinic hyderabad.jpg",
    ariaLabel:
      "Dr. Mohd. Siraj Ur Rahman discussing early childhood dental caries",
    description: (
      <>
        In this talk, Dr. Siraj addresses{" "}
        <EditorialHighlight tone="secondary" onDark>
          early childhood dental caries
        </EditorialHighlight>{" "}
        — how tooth decay develops in young children, the{" "}
        <EditorialHighlight tone="quiet" onDark>
          risk factors parents should be aware of
        </EditorialHighlight>
        , and practical steps toward prevention.
      </>
    ),
  },
  {
    index: "02",
    eyebrow: "02 / Media / Dental Care",
    title: "Talking about dental care beyond the clinic.",
    src: "/assets/Hello Parwaz - Discussion Over Dental Care With Dr Siraj Ur Rahman Neodent dental clinic hyderabad - News18 Urdu.mp4",
    poster:
      "/assets/Hello Parwaz - Discussion Over Dental Care With Dr Siraj Ur Rahman Neodent dental clinic hyderabad - News18 Urdu.jpg",
    ariaLabel:
      "Dr. Mohd. Siraj Ur Rahman on News18 Urdu's Hello Parwaz discussing dental care",
    description: (
      <>
        Appearing on{" "}
        <EditorialHighlight tone="secondary" onDark>
          Hello Parwaz, a live call-in programme on News18 Urdu
        </EditorialHighlight>
        , Dr. Siraj took viewer questions on{" "}
        <EditorialHighlight tone="quiet" onDark>
          everyday dental concerns
        </EditorialHighlight>
        , extending NeoDent&apos;s approach to patient education beyond the
        consultation room.
      </>
    ),
  },
  {
    index: "03",
    eyebrow: "03 / Oral Health Awareness",
    title: "Connecting oral health with wider wellbeing.",
    src: "/assets/Oral Health and Heart diseases Dr. Siraj Neodent dental clinic hyderabad.mp4",
    poster:
      "/assets/Oral Health and Heart diseases Dr. Siraj Neodent dental clinic hyderabad.jpg",
    ariaLabel:
      "Dr. Mohd. Siraj Ur Rahman discussing the link between oral health and heart disease",
    description: (
      <>
        On the programme{" "}
        <EditorialHighlight tone="secondary" onDark>
          Health aur Hum
        </EditorialHighlight>
        , Dr. Siraj discusses the connection between{" "}
        <EditorialHighlight tone="quiet" onDark>
          oral health and cardiovascular wellbeing
        </EditorialHighlight>
        , part of NeoDent&apos;s broader effort to communicate why dental care
        matters beyond the mouth alone.
      </>
    ),
  },
];

function VideoCard({ feature }: { feature: VideoFeature }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
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
    <article className={styles.videoCard}>
      <div className={styles.videoCopy}>
        <p className={styles.actEyebrow}>{feature.eyebrow}</p>
        <h3 className={styles.videoTitle}>{feature.title}</h3>
        <p className={styles.videoText}>{feature.description}</p>
      </div>
      <figure className={styles.videoFrame}>
        <span className={styles.videoRegistration} aria-hidden="true" />
        <video
          ref={videoRef}
          src={feature.src}
          poster={feature.poster}
          aria-label={feature.ariaLabel}
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
        <div className={styles.videoTop}>
          <span>{feature.index} / DENTAL EDUCATION</span>
        </div>
        <button
          type="button"
          className={styles.videoControl}
          onClick={toggle}
          aria-label={playing ? `Pause: ${feature.title}` : `Play: ${feature.title}`}
        >
          {playing ? <Pause size={14} /> : <Play size={14} />}
        </button>
      </figure>
    </article>
  );
}

function useReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

export function BeyondTheClinic() {
  const [sectionRef, sectionVisible] = useReveal<HTMLElement>(0.05);
  const [introRef, introVisible] = useReveal<HTMLDivElement>();
  const [videosRef, videosVisible] = useReveal<HTMLDivElement>(0.06);
  const [communityRef, communityVisible] = useReveal<HTMLDivElement>();
  const [archiveRef, archiveVisible] = useReveal<HTMLDivElement>();
  const [todayRef, todayVisible] = useReveal<HTMLDivElement>();
  const [ctaRef, ctaVisible] = useReveal<HTMLDivElement>();

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${sectionVisible ? styles.visible : ""}`}
      id="beyond-the-clinic"
      aria-labelledby="beyond-title"
    >
      <div className={styles.atmosphere} aria-hidden="true">
        <span className={styles.grid} />
        <span className={styles.arc} />
        <span className={styles.registrationDot} />
        <span className={styles.registrationDotSmall} />
      </div>

      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.numeral} aria-hidden="true">
            02
          </span>
          <div className={styles.eyebrow}>02 / Beyond the clinic</div>
          <h2 id="beyond-title" className={styles.title}>
            A voice for <span>better dental care.</span>
          </h2>
        </header>

        <div
          ref={introRef}
          className={`${styles.intro} ${introVisible ? styles.blockVisible : ""}`}
        >
          <p>
            Dr. Siraj&apos;s work has not stayed confined to the treatment room.
            Over the years, he has taken part in{" "}
            <EditorialHighlight tone="primary" onDark>
              dental education talks, television discussions and public
              awareness efforts
            </EditorialHighlight>{" "}
            aimed at helping ordinary patients understand their own oral
            health — from childhood dental care to the wider links between
            the mouth and general wellbeing.
          </p>
          <p>
            These appearances sit alongside, rather than apart from,
            NeoDent&apos;s clinical work: the same{" "}
            <EditorialHighlight tone="secondary" onDark>
              patient-focused approach
            </EditorialHighlight>{" "}
            that shapes a consultation in Mehdipatnam or Nampally also
            shapes how Dr. Siraj talks about dental care in public — in{" "}
            <EditorialHighlight tone="quiet" onDark>
              plain, practical terms
            </EditorialHighlight>
            , rather than technical language.
          </p>
        </div>

        {/* ---- Acts 01-03 — Video features -------------------------- */}
        <div
          ref={videosRef}
          className={`${styles.videoGrid} ${videosVisible ? styles.blockVisible : ""}`}
        >
          {videoFeatures.map((feature) => (
            <VideoCard feature={feature} key={feature.index} />
          ))}
        </div>

        {/* ---- Act 04 — Community presence + TV interview ------------ */}
        <div
          ref={communityRef}
          className={`${styles.community} ${communityVisible ? styles.blockVisible : ""}`}
        >
          <figure className={styles.communityImage}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/Dr Md Siraj addressing the gathering at govt dental collage and hospital hyderabd.jpg"
              alt="Dr. Mohd. Siraj Ur Rahman addressing the gathering at Government Dental College and Hospital, Hyderabad, on the occasion of the 73rd Republic Day"
              loading="lazy"
            />
            <figcaption>
              Republic Day address / Govt. Dental College &amp; Hospital,
              Hyderabad
            </figcaption>
          </figure>
          <div className={styles.communityCopy}>
            <p className={styles.actEyebrow}>Beyond the Dental Chair</p>
            <h2 className={styles.actTitle}>
              A presence in the wider community.
            </h2>
            <p className={styles.actText}>
              On the occasion of the{" "}
              <EditorialHighlight tone="secondary" onDark>
                73rd Republic Day
              </EditorialHighlight>
              , Dr. Siraj addressed a gathering at{" "}
              <EditorialHighlight tone="quiet" onDark>
                Government Dental College and Hospital, Hyderabad
              </EditorialHighlight>{" "}
              — a public appearance connected to the same institution where
              he has also held an academic teaching role.
            </p>
            <p className={styles.actText}>
              Dr. Siraj has also appeared in{" "}
              <EditorialHighlight tone="primary" onDark>
                televised interviews
              </EditorialHighlight>{" "}
              discussing dental health with the public, extending his
              clinical voice beyond NeoDent&apos;s own patients.
            </p>
            <figure className={styles.interviewPlate}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/dr-siraj-tv-interview.jpg"
                alt="Dr. Mohd. Siraj Ur Rahman during a News18 Urdu television interview"
                loading="lazy"
              />
              <figcaption>Television / News18 Urdu</figcaption>
            </figure>
          </div>
        </div>

        {/* ---- Act 05 — Archive continuation -------------------------- */}
        <div
          ref={archiveRef}
          className={`${styles.archiveContinuation} ${archiveVisible ? styles.blockVisible : ""}`}
        >
          <div className={styles.archiveCopy}>
            <p className={styles.actEyebrow}>Media Continuation</p>
            <p className={styles.actText}>
              The same press coverage that documents NeoDent&apos;s clinical
              history also records this public dimension of its work —
              lectures, health camps and media appearances that carried
              NeoDent&apos;s name from the clinic into the wider community.
            </p>
          </div>
          <div className={styles.archiveContinuationPlates}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/Dr siraj neodent dental clinic Nampally news article.jpg"
                alt="The Siasat Daily — feature on dental awareness delivered by Dr. Siraj"
                loading="lazy"
              />
            </figure>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/Dr siraj and Dr Miftah neodent dental clinic Nampally news.jpg"
                alt="The Siasat Daily — coverage of NeoDent's clinical team at Nampally"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        {/* ---- Act 06 — The practice today ------------------------------ */}
        <div
          ref={todayRef}
          className={`${styles.today} ${todayVisible ? styles.blockVisible : ""}`}
        >
          <div className={styles.todayImages}>
            <figure className={styles.todayPrimary}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mehdipatnamInteriorImage}
                alt="NeoDent Dental Hospital, Mehdipatnam — the patient waiting lounge"
                loading="lazy"
              />
              <figcaption>Mehdipatnam</figcaption>
            </figure>
            <figure className={styles.todaySecondary}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={nampallyInteriorImage}
                alt="NeoDent Dental Hospital, Nampally — the reception and consultation wing"
                loading="lazy"
              />
              <figcaption>Nampally</figcaption>
            </figure>
          </div>
          <div className={styles.todayCopy}>
            <p className={styles.actEyebrow}>06 / The Practice Today</p>
            <h2 className={styles.actTitle}>NeoDent today.</h2>
            <p className={styles.actText}>
              More than three decades after its founding, NeoDent Dental
              Hospital continues to practise across{" "}
              <EditorialHighlight tone="primary" onDark>
                two Hyderabad locations
              </EditorialHighlight>{" "}
              — Mehdipatnam, where the practice began, and Nampally. Both
              locations are led by the same clinical philosophy Dr. Siraj
              established in 1994.
            </p>
            <p className={styles.actText}>
              Day-to-day care is carried by{" "}
              <EditorialHighlight tone="secondary" onDark>
                the wider NeoDent clinical team
              </EditorialHighlight>
              , working alongside Dr. Siraj and Dr. Miftah, with{" "}
              <EditorialHighlight tone="quiet" onDark>
                specialist-led, patient-focused care
              </EditorialHighlight>{" "}
              carried into every consultation.
            </p>
            <p className={styles.actText}>
              To learn more about what NeoDent treats, visit{" "}
              <a className={styles.inlineLink} href="/expertise">
                our clinical expertise
              </a>
              , or see both locations in detail on{" "}
              <a className={styles.inlineLink} href="/clinic">
                our clinics page
              </a>
              .
            </p>
          </div>
        </div>

        {/* ---- Final CTA -------------------------------------------------- */}
        <div
          ref={ctaRef}
          className={`${styles.ctaRow} ${ctaVisible ? styles.blockVisible : ""}`}
        >
          <a className={styles.cta} href="/expertise">
            Explore our expertise <ArrowRight size={14} aria-hidden="true" />
          </a>
          <a className={styles.cta} href="/clinic">
            Visit our clinics <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
