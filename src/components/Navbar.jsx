import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
     <a href="/"><img src={logo} alt="GTN Logo" className="nav-logo logo" /></a>


      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li className="cart"><a href="/shop"><FiShoppingCart size={22} /></a></li>
      </ul>

      {open && (
        <div className="mobile-menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/shop">Shop</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
