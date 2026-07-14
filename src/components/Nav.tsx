export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav-logo" href="#top">
        <div className="nav-logo-name">Sisi Club</div>
        <div className="nav-logo-kicker">Geneva</div>
      </a>
      <div className="nav-links">
        <a className="nav-link" href="#about">
          About
        </a>
        <a className="nav-link" href="#trips">
          Trips
        </a>
        <a className="nav-link" href="#inspiration">
          Inspiration
        </a>
        <a className="nav-link" href="#faq">
          FAQ
        </a>
        <a className="nav-cta" href="#join">
          Join the club
        </a>
      </div>
    </nav>
  );
}
