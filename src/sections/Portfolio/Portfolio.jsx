import "./Portfolio.css";

const project = {
  number: "01",
  category: "REAL ESTATE",
  title: "Premium Property",
  location: "Pune, Maharashtra",
  image: "/images/property-1.jpg",
  tourUrl: "https://tours.sp360view.com/tours/Go61nOvfbG",
};

function Portfolio() {
  return (
    <section className="portfolio" id="work">

      <div className="portfolio-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="portfolio-header">

          <div className="portfolio-label">
            <span></span>
            OUR EXPERIENCE
          </div>

          <div className="portfolio-heading-row">

            <h2>
              Explore
              <span> Our Spaces.</span>
            </h2>

            <p>
              Step inside some of the spaces we've transformed
              into immersive 360° experiences.
            </p>

          </div>

        </div>


        {/* =========================================
            SINGLE PROPERTY
        ========================================= */}

        <div className="portfolio-grid">

          <a
            href={project.tourUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card"
          >

            {/* IMAGE */}

            <div className="portfolio-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="portfolio-image-overlay"></div>

              <span className="portfolio-number">
                {project.number}
              </span>


              {/* VIEW 360 BUTTON */}

              <div className="portfolio-view">
                <span>View 360°</span>
                <span>↗</span>
              </div>

            </div>


            {/* INFO */}

            <div className="portfolio-info">

              <div>

                <span className="portfolio-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

              </div>

              <span className="portfolio-location">
                {project.location}
              </span>

            </div>

          </a>

        </div>


        {/* =========================================
            FOOTER
        ========================================= */}

        <div className="portfolio-footer">

          <p>
            More spaces. More experiences.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Portfolio;