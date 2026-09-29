import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* =========================================
          FOOTER MAIN
      ========================================= */}

      <div className="footer-main">

        {/* =====================================
            BRAND
        ===================================== */}

        <div className="footer-brand">

          <Link to="/" className="footer-logo">

            <img
              src="/images/logo.png"
              alt="SP 360VIEW"
              className="footer-logo-image"
            />

            <div className="footer-logo-text">
              <strong>SP 360VIEW</strong>
              <span>VIRTUAL EXPERIENCES</span>
            </div>

          </Link>


          <p>
            Creating immersive 360° virtual experiences
            for spaces, brands and businesses.
          </p>

        </div>


        {/* =====================================
            EXPLORE
        ===================================== */}

        <div className="footer-column">

          <h3>EXPLORE</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/work">
            Our Work
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* =====================================
            SERVICES
        ===================================== */}

        <div className="footer-column">

          <h3>SERVICES</h3>

          <Link to="/services">
            360° Virtual Tours
          </Link>

          <Link to="/services">
            360° Photography
          </Link>

          <Link to="/services">
            Website Integration
          </Link>

          <Link to="/services">
            Google 360°
          </Link>

          <Link to="/services">
            Custom Solutions
          </Link>

        </div>


        {/* =====================================
            CONNECT
        ===================================== */}

        <div className="footer-column">

          <h3>CONNECT</h3>

          <a href="tel:+919158591152">
            +91 91585 91152
          </a>

          <a href="mailto:sp360view@gmail.com">
            sp360view@gmail.com
          </a>

          <span>
            Pune, Maharashtra
          </span>

        </div>

      </div>


      {/* =========================================
          FOOTER BOTTOM
      ========================================= */}

      <div className="footer-bottom">

        <span>
          © 2026 SP 360VIEW. All rights reserved.
        </span>


        <div className="footer-bottom-links">

          <Link to="/contact">
            Privacy
          </Link>

          <Link to="/contact">
            Terms
          </Link>

        </div>


        <span className="footer-made">
          Made by{" "}
          <strong>
            Shrivardhan Patil
          </strong>
        </span>

      </div>

    </footer>
  );
}

export default Footer;