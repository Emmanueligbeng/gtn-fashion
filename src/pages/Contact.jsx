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
              <strong>Address:</strong> 12 Luxury Avenue, Lagos, Nigeria
            </li>
            <li>
              <strong>Email:</strong> support@gtnfashion.com
            </li>
            <li>
              <strong>Phone:</strong> +234 810 000 0000
            </li>
          </ul>

          <div className="socials">
            <p>Follow Us:</p>
            <div className="icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-tiktok"></i>
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
