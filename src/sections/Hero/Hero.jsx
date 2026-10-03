import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* =========================================
            HERO CONTENT
        ========================================= */}

        <div className="hero-content">

          <div className="hero-eyebrow">
            <span></span>
            360° VIRTUAL EXPERIENCES
          </div>


          <h1>
            Experience
            <span>Space</span>
            Differently.
          </h1>


          <p>
            We transform real spaces into immersive 360°
            virtual experiences that your customers can
            explore from anywhere.
          </p>


          {/* =========================================
              ONLY ONE BUTTON
          ========================================= */}

          <div className="hero-buttons">

            <a
              href="#work"
              className="hero-primary-button"
            >
              Explore Experiences
              <span>↗</span>
            </a>

          </div>


          {/* =========================================
              TRUST
          ========================================= */}

          <div className="hero-trust">

            <div className="hero-trust-item">
              <strong>360°</strong>
              <span>IMMERSIVE</span>
            </div>

            <div className="hero-trust-divider"></div>

            <div className="hero-trust-item">
              <strong>24/7</strong>
              <span>ACCESSIBLE</span>
            </div>

            <div className="hero-trust-divider"></div>

            <div className="hero-trust-item">
              <strong>100%</strong>
              <span>INTERACTIVE</span>
            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          SCROLL
      ========================================= */}

      <div className="hero-scroll">

        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="hero-scroll-line"></div>

      </div>

    </section>
  );
}

export default Hero;