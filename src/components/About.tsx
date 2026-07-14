const STATS = [
  { number: "40+", color: "#9a7f4f", label: "girlfriends on the trail" },
  { number: "2×", color: "#879375", label: "walks every month" },
  { number: "17", color: "#c4a199", label: "very good dogs" },
  { number: "∞", color: "#97a6b3", label: "cups of matcha shared" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div>
          <div className="eyebrow">Who we are</div>
          <h2 className="section-heading about-heading">
            Named for an empress who never sat still.
          </h2>
          <p className="about-body">
            Sisi Club is a circle of women around Geneva who build their days
            around movement and the outdoors. We hike the Alps and stroll the
            lakeshore, unroll yoga mats in mountain meadows, flow through
            pilates, and toast every walk with a well-earned matcha. It's a
            healthy, unhurried way to live — and far better in good company.
          </p>
          <p className="about-body">
            We took our name from Empress Sisi, who walked for hours each day
            and was never without a hound at her heel. Like her, we believe a
            strong body and a long walk fix almost anything.{" "}
            <strong>Every level is welcome, every walk is free,</strong> and no
            friend — two-legged or four — is ever left behind.
          </p>
        </div>
        <div>
          <img
            alt="Lenka, founder of Sisi Club, with her dog Falco in an alpine meadow"
            className="about-portrait"
            src="/images/founder.png"
          />
          <div className="about-caption">
            <div className="about-caption-name">Lenka &amp; Falco</div>
            <div className="about-caption-role">
              Founder &amp; chief morale officer
            </div>
          </div>
        </div>
      </div>
      <div className="stats">
        {STATS.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-number" style={{ color: stat.color }}>
              {stat.number}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
