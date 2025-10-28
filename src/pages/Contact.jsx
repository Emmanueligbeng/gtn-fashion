import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to assist you. Reach out to our team anytime.</p>
      </div>

      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>
            Have questions about our products, shipping, or your orders? Our
            support team is ready to help.
          </p>

          <ul>
            <li>
              <strong>Address:</strong> Oyo State, Nigeria & Skelleftea, Sweden
            </li>
            <li>
              <strong>Email:</strong> gtnventures44real@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +467 644 829 43
            </li>
          </ul>

          <div className="socials">
            <p>Follow Us:</p>
            <div className="icons">
              <a href="https://www.facebook.com/share/1Bntu9fpY2/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/simply_gtn_ventures?"><i className="fab fa-instagram"></i></a>
              <a href="tel:+46764482943"><i className="fas fa-phone"></i></a>
              <a href="https://wa.me/46764482943" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
              <a href="mailto:gtnventures44real@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
