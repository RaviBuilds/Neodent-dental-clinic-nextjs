"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Phone, X } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TreatmentsHero } from "@/components/treatments/TreatmentsHero";
import { TreatmentIntro } from "@/components/treatments/TreatmentIntro";
import { ExpertiseGrid } from "@/components/treatments/ExpertiseGrid";
import { ClinicalEducation } from "@/components/treatments/ClinicalEducation";
import { TreatmentVideoGallery } from "@/components/treatments/TreatmentVideoGallery";
import { RehabilitationFeature } from "@/components/treatments/RehabilitationFeature";
import { BeforeAfterCases } from "@/components/treatments/BeforeAfterCases";
import { TreatmentApproach } from "@/components/treatments/TreatmentApproach";
import { DoctorExpertise } from "@/components/treatments/DoctorExpertise";
import { AdditionalServices } from "@/components/treatments/AdditionalServices";
import { PatientTrust } from "@/components/treatments/PatientTrust";
import { WhyNeoDent } from "@/components/treatments/WhyNeoDent";
import { LocationCards } from "@/components/treatments/LocationCards";
import { TreatmentFAQ } from "@/components/treatments/TreatmentFAQ";
import { TreatmentCTA } from "@/components/treatments/TreatmentCTA";
import { FloatingCta } from "@/components/ui/FloatingCta";
import { AppointmentModal } from "@/components/ui/AppointmentModal";
import { AppButton } from "@/components/ui/AppButton";
import { telPhone } from "@/lib/site-data";

export function TreatmentsClientChrome() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  useEffect(() => {
    const original = document.body.style.overflow;
    if (appointmentOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [appointmentOpen]);

  return (
    <div className="site">
      <Navbar onBook={() => setAppointmentOpen(true)} />
      <main>
        <TreatmentsHero onBook={() => setAppointmentOpen(true)} />
        <TreatmentIntro />
        <ExpertiseGrid />
        <ClinicalEducation />
        <TreatmentVideoGallery />
        <RehabilitationFeature />
        <BeforeAfterCases />
        <TreatmentApproach />
        <DoctorExpertise />
        <AdditionalServices />
        <PatientTrust />
        <WhyNeoDent />
        <LocationCards onBook={() => setAppointmentOpen(true)} />
        <TreatmentFAQ />
        <TreatmentCTA onBook={() => setAppointmentOpen(true)} />
      </main>
      <Footer />
      <FloatingCta onBook={() => setAppointmentOpen(true)} />
      <div className="mobile-bar">
        <AppButton href={telPhone} variant="ghost">
          <Phone size={14} /> Call
        </AppButton>
        <AppButton onClick={() => setAppointmentOpen(true)} variant="primary">
          Book Appointment <ArrowRight size={14} />
        </AppButton>
      </div>
      {appointmentOpen && <AppointmentModal onClose={() => setAppointmentOpen(false)} />}
    </div>
  );
}
