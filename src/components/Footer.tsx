import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data";
import { InstagramIcon } from "../icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">Sisi Club</div>
          <div className="footer-kicker">Geneva</div>
          <p className="footer-tagline">
            "I shall walk and walk, and never tire of the mountains." — in
            Sisi's spirit.
          </p>
        </div>
        <div className="footer-columns">
          <div>
            <div className="footer-column-title">Explore</div>
            <div className="footer-column-links">
              <a className="footer-link" href="#story">
                The story
              </a>
              <a className="footer-link" href="#trips">
                Walks
              </a>
              <a className="footer-link" href="#about">
                About
              </a>
              <a className="footer-link" href="#faq">
                FAQ
              </a>
            </div>
          </div>
          <div>
            <div className="footer-column-title">Say hello</div>
            <div className="footer-column-links">
              <a className="footer-join-link" href="#join">
                Join the club →
              </a>
              <a
                className="footer-link footer-instagram"
                href={INSTAGRAM_URL}
                rel="noreferrer"
                target="_blank"
              >
                <InstagramIcon fill="currentColor" size={15} />@
                {INSTAGRAM_HANDLE}
              </a>
              <a className="footer-link" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              <span className="footer-note">
                Walks around Geneva &amp; the Alps
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {year} Sisi Club, Geneva · Made for the girls who'd rather be on the
        trail.
      </div>
    </footer>
  );
}
