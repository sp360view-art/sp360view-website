import "./Portfolio.css";

const projects = [
  {
    number: "01",
    category: "REAL ESTATE",
    title: "New Property",
    location: "Pune, Maharashtra",
    description:
      "Give potential buyers an immersive way to explore properties from anywhere with an interactive 360° virtual experience.",
    tourUrl:
      "https://tours.sp360view.com/tours/Go61nOvfbG",
  },

  {
    number: "02",
    category: "FITNESS",
    title: "NextGen Fitness Studio",
    location: "Pune, Maharashtra",
    description:
      "Let customers explore your gym, equipment and overall atmosphere before they even walk through the door.",
    tourUrl:
      "https://tours.sp360view.com/tours/Pmgu4qkMo",
  },

  {
    number: "03",
    category: "RESORT",
    title: "Hausai Lack Resort",
    location: "Maharashtra",
    description:
      "Showcase your resort experience with an immersive virtual tour that helps guests explore the space before their stay.",
    tourUrl:
      "https://tours.sp360view.com/tours/JJcq9z6MN",
  },
];


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
              Step inside some of the spaces we've
              transformed into immersive 360°
              experiences.
            </p>

          </div>

        </div>


        {/* =========================================
            PROJECTS
        ========================================= */}

        <div className="portfolio-list">

          {projects.map((project) => (

            <article
              className="portfolio-card"
              key={project.number}
            >

              {/* =====================================
                  LEFT - 360 TOUR
              ===================================== */}

              <div className="portfolio-tour">

                <iframe
                  src={project.tourUrl}
                  title={`${project.title} 360° Virtual Tour`}
                  allow="fullscreen; vr"
                  allowFullScreen
                ></iframe>

                <div className="portfolio-number">
                  {project.number}
                </div>

              </div>


              {/* =====================================
                  RIGHT - INFORMATION
              ===================================== */}

              <div className="portfolio-info">

                <span className="portfolio-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <div className="portfolio-location">
                  <span>LOCATION</span>
                  {project.location}
                </div>

                <p>
                  {project.description}
                </p>


                {/* ===================================
                    BUTTONS
                =================================== */}

                <div className="portfolio-actions">

                  <a
                    href={project.tourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-tour-button"
                  >
                    View 360°
                    <span>↗</span>
                  </a>

                  <a
                    href="/contact"
                    className="portfolio-enquire-button"
                  >
                    Let's Create
                    <span>→</span>
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =========================================
            FOOTER LINE
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