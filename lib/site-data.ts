// Shared site content and constants migrated verbatim from the
// React/Vite source (neodent-dental-hospitals-website/src/App.tsx).
// Keep this content in sync with the source of truth until the
// post-migration content/SEO pass.

export const entranceImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent%20dental%20hospital%20Interior-6gEP3lFz9hLW0mdFgt5OH9BytsCK1e.jpg";
export const waitingImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent%20dental%20hospital%20Interior-6gEP3lFz9hLW0mdFgt5OH9BytsCK1e.jpg";
export const doctorImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.%20Md.%20Miftah%20Ur%20Rahman%20-%20Neodent%20Dental%20Hospital-wBj3lG72iqjj2q6uX5ZH0gWGAKB5DN.png";
export const recognitionImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.%20Mohd.%20Siraj%20Ur%20Rahman%20-%20Neodent%20Dental%20Hospital%20Hyd-xayK2qFwCaiNp3g8lIGg8iTOwsb2qI.png";
export const treatmentVideo =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.%20Miftah%20Neodent%20dental%20clinic%20Hyderabad%20-%20treatment%20video-DGRRw5vjVc271Ni7yHPsXcNruG7QvW.mp4";
export const treatmentImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent%20dental%20hospital%20Interior-6gEP3lFz9hLW0mdFgt5OH9BytsCK1e.jpg";
export const equipmentImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent%20dental%20hospital%20Interior-6gEP3lFz9hLW0mdFgt5OH9BytsCK1e.jpg";
export const detailImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent%20dental%20hospital%20Interior-6gEP3lFz9hLW0mdFgt5OH9BytsCK1e.jpg";
export const philosophyImage = "/attached_assets/our-philosophy.webp";
export const visitImage =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent%20dental%20hospital%20Interior-6gEP3lFz9hLW0mdFgt5OH9BytsCK1e.jpg";
export const officialLogo =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Neodent%20dental%20hospital%20hyderabad%20logo-4P3cEjHdeEdFSXWdfaBHy5QYphO7TW.jpeg";

export const phone = "+91 9030648393";
export const telPhone = "tel:+919030648393";
export const whatsappLink = `https://wa.me/919030648393?text=${encodeURIComponent(
  "Hi, I'd like to book an appointment at Neodent Dental Hospitals.",
)}`;
export const whatsappConsultLink = `https://wa.me/919030648393?text=${encodeURIComponent(
  "Hi, I'd like to enquire about a consultation at Neodent Dental Hospitals.",
)}`;
export const address =
  "Masjid-e-Azizia, Humayun Nagar Road, Royal Colony, Humayun Nagar, Hyderabad, Telangana, India";
export const shortLocation = "Humayun Nagar, Hyderabad";
export const heroLocations = [
  { number: "01", name: "Humayun Nagar", detail: "Humayun Nagar, Hyderabad" },
  {
    number: "02",
    name: "Nampally",
    detail: "Medwin Hospital Complex, Nampally",
  },
] as const;
export const directions =
  "https://www.google.com/maps/search/?api=1&query=Masjid-e-Azizia%2C%20Humayun%20Nagar%20Road%2C%20Royal%20Colony%2C%20Humayun%20Nagar%2C%20Hyderabad%2C%20Telangana%2C%20India";
export const googleRating = { score: "4.3", count: 259 };
export const LEAD_CAPTURE_SESSION_KEY = "neodent-lead-capture-shown";

export type NavItem = { label: string; href: string };
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Clinic", href: "#clinic" },
  { label: "Doctor", href: "#doctor" },
  { label: "Contact", href: "#contact" },
];

export const galleryItems = [
  {
    src: entranceImage,
    label: "The Neodent entrance",
    alt: "Entrance to Neodent Dental Hospitals",
  },
  {
    src: waitingImage,
    label: "A considered waiting room",
    alt: "Neodent Dental Hospitals waiting area",
  },
  {
    src: equipmentImage,
    label: "Treatment room",
    alt: "Dental treatment equipment in a Neodent room",
  },
  {
    src: treatmentImage,
    label: "Inside the clinic",
    alt: "Dental treatment room at Neodent",
  },
  {
    src: equipmentImage,
    label: "Clinical detail",
    alt: "Dental equipment in a treatment room",
  },
];

export const heroSlideMeta = [
  { id: "hospital", label: "Hospitals" },
  { id: "siraj", label: "Dr. Siraj" },
  { id: "miftah", label: "Dr. Miftah" },
] as const;
export const HERO_AUTOPLAY_MS = 7000;
