import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About GTN</h1>
        <p>Timeless fashion. Crafted with precision. Worn with power.</p>
      </section>

      {/* WHO WE ARE */}
      <section className="about-row">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=1000" alt="GTN Fashion Studio" />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            GTN is a luxury fashion brand designed for individuals who move with confidence and express
            themselves through timeless style. We believe fashion is more than clothing — it is identity,
            presence, and undeniable power. Our pieces are crafted with premium materials, bold creativity,
            and a relentless commitment to perfection.
          </p>
          <p>
            Every collection reflects elegance, intention, and modern craftsmanship — creating a look that
            is both iconic and unforgettable.
          </p>
        </div>
      </section>

      {/* MISSION, VISION, VALUES */}
      <section className="about-values">
        <div className="value-box">
          <h3>Our Mission</h3>
          <p>
            To inspire confidence and redefine luxury through bold, premium fashion that commands attention
            and ignites self-expression.
          </p>
        </div>
        <div className="value-box">
          <h3>Our Vision</h3>
          <p>
            To stand as a global symbol of elegance and originality, setting the standard for modern luxury
            in every collection.
          </p>
        </div>
        <div className="value-box">
          <h3>Our Values</h3>
          <p>
            Excellence. Originality. Craftsmanship. Confidence. These are the pillars that shape every GTN design.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <p>“Wear Confidence. Own Your Presence.”</p>
        <button>SHOP NOW</button>
      </section>

    </div>
  );
};

export default About;
