import "./Contact.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">

      <div className="contact-container">
        
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p className="contact-desc">
            Have questions, complaints, or partnership requests? 
            We’d love to hear from you. Reach out to GTN anytime.
          </p>

          <div className="info-box">
            <p><FaMapMarkerAlt /> Lagos, Nigeria</p>
            <p><FaPhoneAlt /> +234 81 2345 6789</p>
            <p><FaEnvelope /> support@gtnfashion.com</p>
          </div>

          <div className="contact-socials">
            <a href="https://www.facebook.com/share/1Bntu9fpY2/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/simply_gtn_ventures?"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default Contact;
