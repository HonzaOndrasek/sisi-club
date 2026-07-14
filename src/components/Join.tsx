import { useState } from "react";
import type { FormEvent } from "react";
import { DEFAULT_PACE, PACE_OPTIONS } from "../data";
import { HeartIcon, MountainIcon, PawIcon } from "../icons";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = {
  name?: string;
  email?: string;
};

export default function Join() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState<string>(DEFAULT_PACE);
  const [dog, setDog] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (honeypot) {
      return;
    }
    const trimmedName = name.trim();
    const nextErrors: Errors = {};
    if (!trimmedName) {
      nextErrors.name = "Please tell us your first name.";
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email) {
      return;
    }
    // TODO: POST { name, email, pace: level, dog } to the membership backend
    // once one exists — the prototype spec ships with local state only.
    setName(trimmedName);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setDog(null);
    setLevel(DEFAULT_PACE);
    setErrors({});
    setSubmitted(false);
  };

  const dogLine =
    dog === true
      ? "Tell your dog the good news — there's a walk to plan. 🐾"
      : dog === false
        ? "A walk awaits — and there'll be plenty of dogs to borrow."
        : "A walk awaits.";

  return (
    <section className="join" id="join">
      <div className="join-grid">
        <div>
          <div className="eyebrow">Join the club</div>
          <h2 className="section-heading join-heading">Come walk with us.</h2>
          <p className="join-body">
            Membership is free and always will be. Sign up and we'll add you to
            the circle — you'll get an invitation to our next walk, dog and
            all.
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
          {submitted ? (
            <div className="form-success">
              <div aria-hidden="true" className="form-success-emoji">
                🏔️
              </div>
              <h3 className="form-success-heading">Welcome, {name}!</h3>
              <p className="form-success-body">
                You're one of us now. Keep an eye on your inbox — your
                invitation to our next walk is on its way.
              </p>
              <p className="form-success-dogline">{dogLine}</p>
              <button className="form-reset" onClick={handleReset} type="button">
                Sign up another friend
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="join-name">
                First name
              </label>
              <input
                aria-invalid={errors.name ? "true" : undefined}
                className="form-input"
                id="join-name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Elisabeth"
                type="text"
                value={name}
              />
              {errors.name && <p className="form-error">{errors.name}</p>}

              <label className="form-label" htmlFor="join-email">
                Email
              </label>
              <input
                aria-invalid={errors.email ? "true" : undefined}
                className="form-input"
                id="join-email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                type="email"
                value={email}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}

              <label className="form-label" htmlFor="join-pace">
                Your walking pace
              </label>
              <select
                className="form-select"
                id="join-pace"
                onChange={(e) => setLevel(e.target.value)}
                value={level}
              >
                {PACE_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>

              <span className="form-label dog-label" id="join-dog-label">
                Bringing a dog?
              </span>
              <div
                aria-labelledby="join-dog-label"
                className="dog-toggle"
                role="group"
              >
                <button
                  aria-pressed={dog === true}
                  className={`dog-option${dog === true ? " is-selected" : ""}`}
                  onClick={() => setDog(true)}
                  type="button"
                >
                  Yes, a good one 🐾
                </button>
                <button
                  aria-pressed={dog === false}
                  className={`dog-option${dog === false ? " is-selected" : ""}`}
                  onClick={() => setDog(false)}
                  type="button"
                >
                  Not this time
                </button>
              </div>

              <div aria-hidden="true" className="form-honeypot">
                <label htmlFor="join-website">Website</label>
                <input
                  autoComplete="off"
                  id="join-website"
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  type="text"
                  value={honeypot}
                />
              </div>

              <button className="form-submit" type="submit">
                Sign me up
              </button>
              <p className="form-fineprint">
                It's free. We'll only email you about walks.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
