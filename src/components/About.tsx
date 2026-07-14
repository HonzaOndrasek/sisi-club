// TODO: the stat numbers are prototype placeholders — confirm real counts
// with the client before launch.
const STATS = [
  { number: "40+", color: "#9a7f4f", label: "girlfriends on the trail" },
  { number: "2×", color: "#879375", label: "walks every month" },
  { number: "17", color: "#c4a199", label: "very good dogs" },
  { number: "∞", color: "#97a6b3", label: "cups of matcha shared" },
];

// TODO: Lenka's founding story below is written from the brief — have the
// client confirm the details (or tell it in her own words) before launch.
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div>
          <div className="eyebrow">Behind the club</div>
          <h2 className="section-heading about-heading">
            It started with Lenka, Falco, and one long walk.
          </h2>
          <p className="about-body">
            Sisi Club began the way all good things do — with a woman, a dog,
            and a trail that was too beautiful to keep to herself. Lenka
            started inviting girlfriends along on her walks with Falco, and
            the walks kept growing: first around the lake, then up into the
            meadows, then all the way to Zermatt.
          </p>
          <p className="about-body">
            Today it's a circle of women around Geneva who build their days
            around movement and the outdoors — hikes and lakeshore strolls,
            yoga mats in mountain meadows, pilates, and a well-earned matcha
            after. <strong>Every level is welcome, every walk is free,</strong>{" "}
            and no friend — two-legged or four — is ever left behind.
          </p>
        </div>
        <div>
          <img
            alt="Lenka, founder of Sisi Club, with her dog Falco in an alpine meadow"
            className="about-portrait"
            height={1536}
            loading="lazy"
            src="/images/founder.webp"
            width={1024}
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
