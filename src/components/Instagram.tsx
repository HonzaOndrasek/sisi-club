import { INSTAGRAM_HANDLE, INSTAGRAM_POSTS, INSTAGRAM_URL } from "../data";
import { InstagramIcon } from "../icons";

export default function Instagram() {
  return (
    <section className="instagram" id="instagram">
      <div className="instagram-inner">
        <div className="instagram-header">
          <div>
            <div className="eyebrow">From the trail</div>
            <h2 className="section-heading">
              The club lives on Instagram
            </h2>
          </div>
          <p className="instagram-lede">
            Walk announcements, trail photos, and a great many dogs — it all
            happens at{" "}
            <a
              className="instagram-handle"
              href={INSTAGRAM_URL}
              rel="noreferrer"
              target="_blank"
            >
              @{INSTAGRAM_HANDLE}
            </a>
            .
          </p>
        </div>
        <div className="instagram-grid">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              className="instagram-tile"
              href={post.href}
              key={post.image}
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt={post.alt}
                className="instagram-tile-image"
                loading="lazy"
                src={post.image}
              />
              <span aria-hidden="true" className="instagram-tile-overlay">
                <InstagramIcon fill="#f6f0e6" size={22} />
              </span>
            </a>
          ))}
        </div>
        <div className="instagram-cta-row">
          <a
            className="btn-primary instagram-follow"
            href={INSTAGRAM_URL}
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon fill="currentColor" size={17} />
            Follow @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
}
