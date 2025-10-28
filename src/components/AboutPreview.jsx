// src/components/AboutPreview.jsx
import React from "react";
import "./AboutPreview.css";

export default function AboutPreview() {
  return (
    <section className="about-preview section">
      <div className="split">
        <div>
          <img
            src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=1000"
            alt="Studio"
            style={{ width: "100%", borderRadius: "5px" }}

          />
        </div>
        <div>
          <h3 style={{color:"#2d2d2d"}}>THE STORY OF GTN</h3>
          <p style={{color:"grey", lineHeight:1.6}}>
            GTN was established to bridge the gap between modern tailoring and everyday wear:
            considered fabrics, confident silhouettes and clothes that last. Explore the brand and discover
            pieces designed to be worn with intent.
          </p>
          <a className="about-cta" href="/about">Learn More</a>
        </div>
      </div>
    </section>
  );
}
