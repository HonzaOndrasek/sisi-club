import {
  CONTACT_EMAIL,
  INSTAGRAM_DM_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "../data";
import { HeartIcon, InstagramIcon, MountainIcon, PawIcon } from "../icons";

const STEPS = [
  {
    title: `Follow @${INSTAGRAM_HANDLE}`,
    detail:
      "That's where every walk is announced — dates, meeting points, and the dog plan.",
  },
  {
    title: "Send us a DM",
    detail:
      "Say hello, tell us your pace, and introduce your dog if you have one. That's the whole application.",
  },
  {
    title: "Come walk with us",
    detail:
      "We'll reply with the details of the next walk and add you to the circle.",
  },
];

export default function Join() {
  return (
    <section className="join" id="join">
      <div className="join-grid">
        <div>
          <div className="eyebrow">Join the club</div>
          <h2 className="section-heading join-heading">Come walk with us.</h2>
          <p className="join-body">
            Membership is free and always will be. The club lives on
            Instagram — one message and you're in, dog and all.
          </p>
          <div className="join-features">
            <div className="join-feature">
              <HeartIcon fill="#c4a199" size={20} />
              No fees, no commitment
            </div>
            <div className="join-feature">
              <MountainIcon fill="#879375" size={20} />
              Every pace and level welcome
            </div>
            <div className="join-feature">
              <PawIcon fill="#97a6b3" size={20} />
              Bring your dog, bring a friend
            </div>
          </div>
        </div>

        <div className="form-card">
          <ol className="join-steps">
            {STEPS.map((step, index) => (
              <li className="join-step" key={step.title}>
                <span aria-hidden="true" className="join-step-number">
                  {index + 1}
                </span>
                <div>
                  <div className="join-step-title">{step.title}</div>
                  <p className="join-step-detail">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <a
            className="form-submit join-dm-button"
            href={INSTAGRAM_DM_URL}
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon fill="currentColor" size={17} />
            Message us on Instagram
          </a>
          <p className="form-fineprint">
            Not on Instagram? Write to us at{" "}
            <a className="join-email-link" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>{" "}
            — or find us at{" "}
            <a
              className="join-email-link"
              href={INSTAGRAM_URL}
              rel="noreferrer"
              target="_blank"
            >
              @{INSTAGRAM_HANDLE}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
