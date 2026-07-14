import { HeartIcon, MountainIcon, PawIcon } from "../icons";

const ICON_GOLD = "#9a7f4f";

export default function Inspiration() {
  return (
    <section className="inspiration" id="story">
      <div className="inspiration-grid">
        <div>
          <div className="eyebrow">The story of Sisi</div>
          <h2 className="section-heading inspiration-heading">
            In the footsteps of an empress
          </h2>
          <p className="inspiration-body">
            Empress Elisabeth of Austria — <em>Sisi</em> to those who loved her
            — was the most restless royal in Europe. She walked for hours every
            single day, often so far and so fast that her ladies-in-waiting
            begged for mercy. Court life wearied her; the open trail set her
            free.
          </p>
          <p className="inspiration-body">
            She was every bit as devoted to her dogs. Wherever Sisi went, a
            hound went with her — great shaggy wolfhounds and deerhounds that
            could match her long stride. She filled her palaces with them and
            her letters with their names: a whole dynasty of beloved
            companions.
          </p>
          <p className="inspiration-body">
            And she loved these shores most of all. Sisi returned to Lac Léman
            again and again — Geneva was where her long wandering ended, and
            her statue still watches the lake from the city's promenade. We
            borrowed her name, her walking shoes, and her firm conviction that
            a life is best measured in miles walked and muddy paws.
          </p>
          <div className="pull-quote">
            <div className="pull-quote-text">
              "I shall walk until I can walk no more — and the dogs shall walk
              with me."
            </div>
            <div className="pull-quote-label">In Sisi's spirit</div>
          </div>
          <div className="inspiration-chips">
            <span className="chip">
              <MountainIcon fill={ICON_GOLD} size={16} /> Hours on foot, daily
            </span>
            <span className="chip">
              <PawIcon fill={ICON_GOLD} size={17} /> A dynasty of hounds
            </span>
            <span className="chip">
              <HeartIcon fill={ICON_GOLD} size={16} /> Free in the wild
            </span>
          </div>
        </div>
        <div>
          <img
            alt="Empress Elisabeth (Sisi) of Austria walking with her hound by an alpine lake"
            className="inspiration-portrait"
            height={1448}
            loading="lazy"
            src="/images/empress.webp"
            width={1086}
          />
          <div className="inspiration-caption">
            Empress Elisabeth of Austria · 1837–1898
          </div>
        </div>
      </div>
    </section>
  );
}
