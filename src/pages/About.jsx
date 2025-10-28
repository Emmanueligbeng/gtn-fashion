import React, { useState } from "react";
import "./About.css";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do you ship worldwide?",
      answer: "Yes. We ship internationally with reliable delivery partners for fast and safe shipping.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, bank transfers, debit cards, and online payment platforms.",
    },
    {
      question: "How do I track my order?",
      answer: "After placing an order, you will receive a tracking code and a link to monitor your delivery progress.",
    },
    {
      question: "Do you offer refunds or exchanges?",
      answer: "Yes. If your item has any issue, you can request a refund or exchange within our return policy window.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <h1>About GTN</h1>
        <p>Luxury. Quality. Confidence.</p>
      </div>

      {/* STORY */}
      <div className="about-story">
        <h2>Our Story</h2>
        <p>
          GTN is a premium fashion brand dedicated to redefining style and elegance through
          timeless pieces. We believe clothing should make a statement — a bold expression
          of identity and class.
        </p>
        <p>
          Our mission is to blend comfort, luxury, and confidence into every stitch.
          Each collection is carefully crafted with attention to detail, premium fabrics,
          and a vision that empowers the modern trendsetter.
        </p>
      </div>

      {/* VALUES */}
      <div className="about-values">
        <div className="value-box">
          <h3>Premium Quality</h3>
          <p>Durable craftsmanship and top-tier fabrics.</p>
        </div>
        <div className="value-box">
          <h3>Luxury Experience</h3>
          <p>Designed for elegance, prestige, and presence.</p>
        </div>
        <div className="value-box">
          <h3>Confidence Wear</h3>
          <p>Styles that elevate your personality.</p>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="about-cta">
        <h2>Join the GTN Family</h2>
        <p>Be the first to know about new releases, discounts, and exclusive drops.</p>
        <button>Subscribe Now</button>
      </div>
    </section>
  );
}
