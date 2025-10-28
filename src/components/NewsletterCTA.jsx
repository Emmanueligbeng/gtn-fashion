// src/components/NewsletterCTA.jsx
import React from "react";
import "./NewsletterCTA.css";

export default function NewsletterCTA() {
  return (
    <section className="newsletter-cta">
      <div className="section center">
        <h3 style={{color:"white"}}>Join the GTN Client List</h3>
        <p style={{color:"whitesmoke"}}>Be the first to know about new drops and exclusive offers.</p>
        <form className="newsletter-form" onSubmit={(e)=>{ e.preventDefault(); alert('Subscribed (demo)'); }}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
