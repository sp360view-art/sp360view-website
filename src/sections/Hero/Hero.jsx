import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* =========================================
            LEFT CONTENT
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
              BUTTONS
          ========================================= */}

          <div className="hero-buttons">

            <a
              href="#work"
              className="hero-primary-button"
            >
              Explore Experiences
              <span>↗</span>
            </a>


            <a
              href="#services"
              className="hero-secondary-button"
            >
              What We Do
              <span>↓</span>
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


        {/* =========================================
            RIGHT VISUAL
        ========================================= */}

        <div className="hero-visual">

          <div className="hero-image-card">

            {/* =====================================
                CLOUDPANO 360 TOUR
            ===================================== */}

            <div className="hero-tour">

              <iframe
                src="https://tours.sp360view.com/tours/Go61nOvfbG"
                title="SP 360 View Virtual Tour"
                allow="fullscreen; vr"
                allowFullScreen
              ></iframe>

            </div>


            {/* =====================================
                TOUR INFORMATION
            ===================================== */}

            <div className="hero-image-bottom">

              <div>

                <span>
                  INTERACTIVE TOUR
                </span>

                <strong>
                  Explore From Anywhere
                </strong>

              </div>


              <a
                href="https://tours.sp360view.com/tours/Go61nOvfbG"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-image-arrow"
                aria-label="Open 360 tour"
              >
                ↗
              </a>

            </div>

          </div>


          {/* =========================================
              FLOATING LABEL
          ========================================= */}

          <div className="hero-floating-card">

            <span className="floating-dot"></span>

            <div>

              <strong>
                360° READY
              </strong>

              <span>
                Interactive Experience
              </span>

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