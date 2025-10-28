// src/components/PromoBanner.jsx
import React from "react";
import "./PromoBanner.css";

export default function PromoBanner() {
  return (
    <section className="promo">
      <div className="promo-inner">
        <div className="promo-text">
          <h3>NEW COLLECTION 2025</h3>
          <p>Seasonal pieces now available, Limited quantities Available.</p>
        </div>
        <a className="promo-btn" href="/shop">View</a>
      </div>
    </section>
  );
}
