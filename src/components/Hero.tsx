import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <img
        alt="Sisi Club friends walking in the Alps with their dog"
        className="hero-image"
        height={1024}
        src="/images/hero.webp"
        width={1536}
      />
      <div className="hero-scrim" />
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-rule" /> Women · Mountains · Dogs
        </div>
        <h1 className="hero-title">
          Walk the Alps,
          <br />
          <em>in good company.</em>
        </h1>
        <p className="hero-body">
          A circle of friends who lace up their boots, leash up their dogs, and
          wander the trails around Geneva and the high Alps — from Gstaad's
          meadows to Zermatt's lakes. New girlfriends always welcome.
        </p>
        <div className="hero-ctas">
          <a className="btn-primary" href="#join">
            Become a member — it's free
          </a>
          <a
            className="hero-secondary-link"
            href={INSTAGRAM_URL}
            rel="noreferrer"
            target="_blank"
          >
            Follow along @{INSTAGRAM_HANDLE} →
          </a>
        </div>
      </div>
    </header>
  );
}
