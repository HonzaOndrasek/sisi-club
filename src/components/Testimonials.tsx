import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="eyebrow">In their words</div>
          <h2 className="section-heading">Why they keep coming back</h2>
        </div>
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
