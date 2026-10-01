import "./Portfolio.css";

const projects = [
  {
    number: "01",
    category: "REAL ESTATE",
    title: "Premium Property",
    location: "Pune, Maharashtra",
    tourUrl: "https://tours.sp360view.com/tours/Go61nOvfbG",
  },
  {
    number: "02",
    category: "GYM",
    title: "Fitness Experience",
    location: "Pune, Maharashtra",
    tourUrl: "https://tours.sp360view.com/tours/Pmgu4qkMo",
  },
  {
    number: "03",
    category: "RESORT",
    title: "Resort Experience",
    location: "Pune, Maharashtra",
    tourUrl: "https://tours.sp360view.com/tours/JJcq9z6MN",
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="work">
      <div className="portfolio-container">

        {/* HEADER */}
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

        {/* PROJECT CARDS */}
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-card" key={project.number}>

              {/* 360° TOUR */}
              <div className="portfolio-tour">

                <iframe
                  src={project.tourUrl}
                  title={`${project.title} 360° Virtual Tour`}
                  allow="fullscreen; vr"
                  allowFullScreen
                ></iframe>

                <span className="portfolio-number">
                  {project.number}
                </span>

                <a
                  href={project.tourUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-view"
                >
                  <span>Open 360°</span>
                  <span>↗</span>
                </a>

              </div>

              {/* PROJECT DETAILS */}
              <div className="portfolio-info">

                <div>
                  <span className="portfolio-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <span className="portfolio-location">
                  {project.location}
                </span>

              </div>

            </div>
          ))}
        </div>

        <div className="portfolio-footer">
          <p>More spaces. More experiences.</p>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;