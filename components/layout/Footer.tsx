import { BrandLockup } from "@/components/layout/BrandLockup";
import { directions, navItems, phone, telPhone } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <BrandLockup testId="link-footer-brand" />
            <p className="footer-tag">
              Expert dental care in Hyderabad, presented with clarity and care.
            </p>
          </div>
          <div>
            <div className="footer-label">Explore</div>
            <nav className="footer-list" aria-label="Footer navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  data-testid={`link-footer-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <div className="footer-label">Contact</div>
            <div className="footer-list">
              <a href={telPhone} data-testid="link-footer-phone">
                {phone}
              </a>
              <a href={directions} data-testid="link-footer-directions">
                Get directions
              </a>
              <span>04:00 PM – 09:00 PM</span>
              <span>Humayun Nagar · Nampally, Hyderabad</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Neodent Dental Hospitals</span>
          <span>Two Hyderabad locations · One standard of care</span>
        </div>
      </div>
    </footer>
  );
}
