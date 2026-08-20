"use client";

import { MessageCircle, Phone } from "lucide-react";
import { AppButton } from "@/components/ui/AppButton";
import { phone, telPhone, whatsappLink } from "@/lib/site-data";

export function FloatingCta({ onBook }: { onBook: () => void }) {
  return (
    <div className="floating-cta">
      <a
        className="floating-cta-icon floating-cta-call"
        href={telPhone}
        aria-label={`Call Neodent Dental Hospitals at ${phone}`}
        data-testid="link-floating-call"
      >
        <Phone size={20} strokeWidth={2} />
        <span className="floating-cta-tooltip">Call {phone}</span>
      </a>
      <a
        className="floating-cta-icon floating-cta-whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        data-testid="link-floating-whatsapp"
      >
        <MessageCircle size={22} strokeWidth={2} />
        <span className="floating-cta-tooltip">Chat on WhatsApp</span>
      </a>
      <AppButton onClick={onBook} variant="primary" className="floating-cta-book">
        Book Appointment
      </AppButton>
    </div>
  );
}
