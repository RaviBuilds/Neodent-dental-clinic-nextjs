"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AppointmentModal } from "@/components/ui/AppointmentModal";
import { OurClinics } from "@/components/clinic/OurClinics";
import { ClinicalSettings } from "@/components/clinic/ClinicalSettings";
import { InsideNeoDent } from "@/components/clinic/InsideNeoDent";

/* ------------------------------------------------------------------
   Client chrome for /clinic — the three-section editorial clinic
   profile page. Mirrors the About page's chrome pattern exactly:
   Navbar + AppointmentModal (for the sitewide Book Appointment
   button in the navbar) + the page's own section components +
   Footer. No booking CTA appears anywhere inside the clinic sections
   themselves — phone and directions only, per the page's constraints.
   ------------------------------------------------------------------ */

export function ClinicClientChrome() {
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
        <OurClinics />
        <ClinicalSettings />
        <InsideNeoDent />
      </main>
      <Footer />
      {appointmentOpen && (
        <AppointmentModal onClose={() => setAppointmentOpen(false)} />
      )}
    </div>
  );
}
