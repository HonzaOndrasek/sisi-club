import { useState } from "react";
import { FAQS } from "../data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="faq-header">
        <div className="eyebrow">Good to know</div>
        <h2 className="section-heading">Questions, answered</h2>
      </div>
      <div>
        {FAQS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div className="faq-item" key={item.q}>
              <button
                aria-expanded={isOpen}
                className="faq-question"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <span className="faq-question-text">{item.q}</span>
                <span aria-hidden="true" className="faq-sign">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              <div className={`faq-answer${isOpen ? " is-open" : ""}`}>
                <div className="faq-answer-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
