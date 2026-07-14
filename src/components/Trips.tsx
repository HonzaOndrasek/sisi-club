import { INSTAGRAM_DM_URL, TRIPS } from "../data";
import { PawIcon } from "../icons";

export default function Trips() {
  return (
    <section className="trips" id="trips">
      <div className="trips-inner">
        <div className="trips-header">
          <div>
            <div className="eyebrow">The roster</div>
            <h2 className="section-heading">Where we're walking next</h2>
          </div>
          <p className="trips-lede">
            Members get the meeting point, the carpool list, and the dog plan
            the week before each walk.
          </p>
        </div>
        <div className="trips-grid">
          {TRIPS.map((trip) => (
            <article className="trip-card" key={trip.name}>
              <div className="trip-media">
                <img
                  alt={trip.imageAlt}
                  className="trip-image"
                  loading="lazy"
                  src={trip.image}
                />
                <span
                  className="trip-tag"
                  style={{ background: trip.tagColor }}
                >
                  {trip.level}
                </span>
                <span className="trip-date">{trip.date}</span>
              </div>
              <div className="trip-body">
                <div className="trip-region">{trip.region}</div>
                <h3 className="trip-name">{trip.name}</h3>
                <p className="trip-note">{trip.note}</p>
                <div className="trip-meta">
                  <span>{trip.distance}</span>
                  <span className="trip-meta-dot">·</span>
                  <span>{trip.duration}</span>
                  <span className="trip-dog">
                    <PawIcon fill="#9a7f4f" size={17} /> Dog-friendly
                  </span>
                </div>
                <a
                  className="trip-join"
                  href={INSTAGRAM_DM_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  Join this walk
                  <span aria-hidden="true" className="trip-join-arrow">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
