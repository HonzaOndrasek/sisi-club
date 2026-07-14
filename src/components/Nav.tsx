import { INSTAGRAM_URL } from "../data";
import { InstagramIcon } from "../icons";

export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav-logo" href="#top">
        <div className="nav-logo-name">Sisi Club</div>
        <div className="nav-logo-kicker">Geneva</div>
      </a>
      <div className="nav-links">
        <a className="nav-link" href="#story">
          The story
        </a>
        <a className="nav-link" href="#trips">
          Walks
        </a>
        <a className="nav-link" href="#about">
          About
        </a>
        <a className="nav-link" href="#faq">
          FAQ
        </a>
        <a
          aria-label="Sisi Club on Instagram"
          className="nav-instagram"
          href={INSTAGRAM_URL}
          rel="noreferrer"
          target="_blank"
        >
          <InstagramIcon fill="currentColor" size={19} />
        </a>
        <a className="nav-cta" href="#join">
          Join the club
        </a>
      </div>
    </nav>
  );
}
