"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AppointmentModal } from "@/components/ui/AppointmentModal";
import { LegacyAndPeople } from "@/components/sections/about/LegacyAndPeople";
import { BeyondTheClinic } from "@/components/sections/about/BeyondTheClinic";

/* ------------------------------------------------------------------
   Client-side chrome for /about.

   The About page's own content (LegacyAndPeople, BeyondTheClinic)
   has no booking CTA anywhere in its copy -- only the editorial
   "Explore our expertise" / "Visit our clinics" links, per the
   page's content rules. This wrapper reuses only the sitewide
   Navbar and Footer exactly as Home.tsx already wires them (neither
   is modified). Navbar's "Book Appointment" button requires an
   `onBook` handler to function at all -- wiring it to the existing,
   already-approved AppointmentModal (rather than leaving it inert)
   reuses established site behaviour instead of inventing anything
   new. No floating CTA or sticky mobile booking bar is added here,
   since those were not part of the approved About page scope. ------------------------------------------------------------------ */

export function AboutClientChrome() {
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
        <LegacyAndPeople />
        <BeyondTheClinic />
      </main>
      <Footer />
      {appointmentOpen && (
        <AppointmentModal onClose={() => setAppointmentOpen(false)} />
      )}
    </div>
  );
}
