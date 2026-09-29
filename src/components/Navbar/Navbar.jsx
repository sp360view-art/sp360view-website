import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
<Link to="/" className="navbar-logo" onClick={closeMenu}>
  <img
    src="/images/logo.png"
    alt="SP 360 View"
    className="navbar-logo-image"
  />

  <div className="navbar-brand">
    <span className="navbar-brand-name">
      SP 360VIEW
    </span>

    <span className="navbar-brand-tagline">
      VIRTUAL EXPERIENCES
    </span>
  </div>
</Link>


        {/* NAVIGATION */}

        <nav
          className={`navbar-menu ${
            menuOpen ? "active" : ""
          }`}
        >

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/services"
            onClick={closeMenu}
          >
            Services
          </Link>

          <Link
            to="/work"
            onClick={closeMenu}
          >
            Our Work
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="navbar-button"
            onClick={closeMenu}
          >
            Get Started
          </Link>

        </nav>


        {/* MOBILE MENU */}

        <button
          className={`menu-toggle ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>

    </header>
  );
}

export default Navbar;