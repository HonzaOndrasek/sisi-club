import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="eyebrow">In their words</div>
          <h2 className="section-heading">Why they keep coming back</h2>
        </div>
        <figure className="picnic-frame">
          <img
            alt="Sisi Club women sharing a relaxed alpine picnic with their dog"
            className="picnic-image"
            height={1024}
            loading="lazy"
            src="/images/picnic.webp"
            width={1536}
          />
          <figcaption className="picnic-caption">
            <div className="picnic-eyebrow">After the climb</div>
            <div className="picnic-quote">
              Tea, fresh bread, wildflowers — and a dozen very good dogs.
            </div>
          </figcaption>
        </figure>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <figure className="testimonial-card" key={t.name}>
              <div aria-hidden="true" className="testimonial-mark">
                “
              </div>
              <blockquote className="testimonial-quote">
                {t.quote}
              </blockquote>
              <figcaption className="testimonial-person">
                <div
                  aria-hidden="true"
                  className="testimonial-avatar"
                  style={{ background: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-detail">{t.detail}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
