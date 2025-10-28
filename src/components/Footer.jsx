import "./Footer.css";
import logo from "../assets/images/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
        <a href="/"><img src={logo} alt="GTN Logo" className="nav-logo logo" /></a>
          <p>Your one-stop fashion brand for classy and timeless wear.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1Bntu9fpY2/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/simply_gtn_ventures?utm_source=qr&igsh=MmRxbzJtZHF2MDE0"><FaInstagram /></a>
            <a href="mailto:gtnventures44real@gmail.com"><FaEnvelope /></a>
            <a href="https://wa.me/46764482943" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="tel:+46764482943"><FaPhoneAlt /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Collections</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Get updates on our latest fashion drops.</p>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GTN. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
