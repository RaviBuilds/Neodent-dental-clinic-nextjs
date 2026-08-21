"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";
import {
  HERO_AUTOPLAY_MS,
  doctorImage,
  googleRating,
  heroSlideMeta,
  phone,
  recognitionImage,
  telPhone,
  treatmentImage,
  treatmentVideo,
  whatsappConsultLink,
} from "@/lib/site-data";

const inertAttr = (isInert: boolean) =>
  (isInert ? { inert: true } : {}) as Record<string, boolean>;

export function Hero() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % heroSlideMeta.length);
    }, HERO_AUTOPLAY_MS);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setActive(index);
    startTimer();
  };
  const goRelative = (delta: number) => {
    goTo((active + delta + heroSlideMeta.length) % heroSlideMeta.length);
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-slides">
        {/* Slide 01 — Dr. Siraj, the founder identity */}
        <article
          className={`hero-slide hero-slide-founder ${active === 0 ? "hero-slide-active" : ""}`}
          aria-hidden={active !== 0}
          {...inertAttr(active !== 0)}
        >
          <div className="hero-founder">
            <div className="hero-founder-bg" aria-hidden="true">
              <span className="hero-founder-gridlines" />
            </div>
            <span className="hero-founder-vertical-label" aria-hidden="true">
              Humayun Nagar &nbsp;·&nbsp; Nampally &nbsp;·&nbsp; Hyderabad
            </span>
            <div className="container hero-founder-inner">
              <div className="hero-founder-copy">
                <div className="hero-eyebrow">NeoDent Dental Hospitals</div>
                <p className="hero-founder-tagline">
                  Changing smiles since 3 decades.
                </p>
                <h1 id="hero-title" className="hero-title hero-founder-title">
                  Three decades{" "}
                  <span className="serif">of changing smiles.</span>
                </h1>
                <div className="hero-founder-identity">
                  <p className="hero-credentials">Dr. Mohd. Siraj Ur Rahman</p>
                  <p className="hero-founder-expertise">
                    Dental Surgeon · Prosthodontist · Implantologist
                  </p>
                </div>
                <div className="hero-rating" data-testid="text-hero-rating">
                  <span className="hero-rating-stars" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={13}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </span>
                  <span className="hero-rating-score">
                    {googleRating.score}
                  </span>
                  <span className="hero-rating-divider" aria-hidden="true">
                    ·
                  </span>
                  <span>{googleRating.count} Google reviews</span>
                </div>
                <div
                  className="hero-founder-locations"
                  aria-label="Two NeoDent locations in Hyderabad"
                >
                  <MapPin size={13} aria-hidden="true" />
                  <span>2 Hyderabad locations</span>
                  <span aria-hidden="true">·</span>
                  <span>Humayun Nagar</span>
                  <span aria-hidden="true">·</span>
                  <span>Nampally</span>
                </div>
                <div className="hero-founder-contact">
                  <span className="hero-founder-contact-label">
                    Call today for a consultation
                  </span>
                  <a
                    className="hero-founder-phone"
                    href={telPhone}
                    data-testid="link-hero-phone"
                  >
                    <Phone size={16} aria-hidden="true" />
                    {phone}
                  </a>
                </div>
                <div className="hero-actions">
                  <AppButton href={telPhone} variant="primary">
                    Call for Consultation <ArrowRight size={15} />
                  </AppButton>
                  <AppButton href={whatsappConsultLink} variant="ghost">
                    WhatsApp the Clinic <MessageCircle size={14} />
                  </AppButton>
                </div>
              </div>
              <div className="hero-founder-visual">
                <span className="hero-founder-frame" aria-hidden="true" />
                <span className="hero-founder-mark" aria-hidden="true">
                  30<span>+</span>
                </span>
                <span className="hero-founder-mark-caption" aria-hidden="true">
                  Years of changing smiles
                </span>
                <span className="hero-founder-groundline" aria-hidden="true" />
                <div className="hero-founder-visual-location" aria-label="NeoDent Hyderabad locations">
                  <span>2 Hyderabad locations</span>
                  <strong>Humayun Nagar <i aria-hidden="true">·</i> Nampally</strong>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="hero-founder-portrait"
                  src={recognitionImage}
                  alt="Dr. Mohd. Siraj Ur Rahman, BDS, FCIP, MDS, Director of NeoDent Dental Hospitals, Hyderabad"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </article>

        {/* Slide 02 — Dr. Siraj */}
        <article
          className={`hero-slide ${active === 1 ? "hero-slide-active" : ""}`}
          aria-hidden={active !== 1}
          {...inertAttr(active !== 1)}
        >
          <div className="container hero-slide-grid hero-slide-grid-reverse">
            <div className="hero-slide-copy">
              <div className="hero-eyebrow">Director, NeoDent Dental Hospitals</div>
              <h1 className="hero-title">
                Dr. Mohd. Siraj{" "}
                <span className="serif">Ur Rahman.</span>
              </h1>
              <p className="hero-credentials">BDS, FCIP, MDS (Chennai)</p>
              <p className="hero-lead">
                Dental Surgeon · Prosthodontist · Implantologist. Professor at
                Osmania Government Dental College &amp; Hospital, Hyderabad.
              </p>
              <div className="hero-actions">
                <AppButton href="#doctor" variant="primary">
                  Meet Dr. Siraj <ArrowRight size={15} />
                </AppButton>
              </div>
            </div>
            <div className="hero-slide-visual hero-visual-doctor">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="hero-visual-portrait"
                src={recognitionImage}
                alt="Dr. Mohd. Siraj Ur Rahman, Director of NeoDent Dental Hospitals"
                loading="eager"
              />
            </div>
          </div>
        </article>

        {/* Slide 03 — Dr. Miftah */}
        <article
          className={`hero-slide ${active === 2 ? "hero-slide-active" : ""}`}
          aria-hidden={active !== 2}
          {...inertAttr(active !== 2)}
        >
          <div className="container hero-slide-grid">
            <div className="hero-slide-copy">
              <div className="hero-eyebrow">
                Assistant Director, NeoDent Dental Hospitals
              </div>
              <h1 className="hero-title">
                Dr. Md. Miftah{" "}
                <span className="serif">Ur Rahman.</span>
              </h1>
              <p className="hero-credentials">
                BDS, MDS, FICOI (U.S.A.) · Gold Medalist
              </p>
              <p className="hero-lead">
                Prosthodontist &amp; Implantologist. Assistant Professor at SB
                Patil Dental College &amp; Hospital.
              </p>
              <div className="hero-actions">
                <AppButton href="#expertise" variant="primary">
                  Explore Treatments <ArrowRight size={15} />
                </AppButton>
              </div>
            </div>
            <div className="hero-slide-visual hero-visual-video">
              <video
                className="hero-visual-video-el"
                src={treatmentVideo}
                poster={treatmentImage}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="hero-visual-portrait hero-visual-portrait-overlay"
                src={doctorImage}
                alt="Dr. Md. Miftah Ur Rahman treating a patient at NeoDent"
                loading="eager"
              />
            </div>
          </div>
        </article>
      </div>

      <div className="hero-nav" aria-label="Hero slide navigation">
        <button
          type="button"
          className="hero-nav-arrow"
          onClick={() => goRelative(-1)}
          aria-label="Previous slide"
          data-testid="button-hero-prev"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="hero-nav-dots">
          {heroSlideMeta.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-nav-dot ${active === index ? "hero-nav-dot-active" : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Show ${slide.label} slide`}
              aria-current={active === index}
              data-testid={`button-hero-dot-${slide.id}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="hero-nav-arrow"
          onClick={() => goRelative(1)}
          aria-label="Next slide"
          data-testid="button-hero-next"
        >
          <ChevronRight size={16} />
        </button>
        <span className="hero-nav-index" aria-hidden="true">
          {String(active + 1).padStart(2, "0")} / 0{heroSlideMeta.length}
        </span>
      </div>
    </section>
  );
}
