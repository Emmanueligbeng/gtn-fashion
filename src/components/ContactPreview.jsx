// src/components/ContactPreview.jsx
import React from "react";
import "./ContactPreview.css";

export default function ContactPreview() {
  return (
    <section className="contact-preview section center">
      <h3 style={{color:"#2d2d2d"}}>Need Help?</h3>
      <p style={{color:"grey"}}>Customer support available 9AM–6PM. Or visit our contact page for more ways to reach us.</p>
      <a className="contact-link" href="/contact">Contact Us</a>
    </section>
  );
}
