import "./Services.css";

const services = [
  {
    number: "01",
    title: "360° Virtual Tours",
    description:
      "Interactive virtual tours that let customers explore your space from anywhere.",
  },
  {
    number: "02",
    title: "360° Photography",
    description:
      "High-quality 360° photography created to showcase your space with clarity and detail.",
  },
  {
    number: "03",
    title: "Tour Integration",
    description:
      "Seamlessly integrate your virtual tour into websites, landing pages and digital platforms.",
  },
  {
    number: "04",
    title: "Website Integration",
    description:
      "Bring your website to life by embedding an interactive 360° experience.",
  },
  {
    number: "05",
    title: "Google 360°",
    description:
      "Showcase your business interiors through immersive Google Maps and Street View experiences.",
  },
  {
    number: "06",
    title: "Custom Solutions",
    description:
      "Custom 360° experiences designed around your space, brand and business requirements.",
  },
];

function Services() {
  return (
    <section className="services" id="services">

      <div className="services-container">

        {/* HEADER */}

        <div className="services-header">

          <div className="services-label">
            <span></span>
            WHAT WE DO
          </div>

          <div className="services-heading-row">

            <h2>
              Built For
              <span> Your Space.</span>
            </h2>

            <p>
              From capturing your space to creating the final
              digital experience, we provide everything you
              need to go 360°.
            </p>

          </div>

        </div>


        {/* SERVICES */}

        <div className="services-grid">

          {services.map((service) => (

            <article
              className="service-card"
              key={service.number}
            >

              <div className="service-card-top">

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  ↗
                </span>

              </div>


              <div className="service-card-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>


              <div className="service-card-line"></div>

            </article>

          ))}

        </div>


        {/* BOTTOM */}

        <div className="services-bottom">

          <div>
            <span>
              HAVE A SPACE IN MIND?
            </span>

            <strong>
              Let's turn it into a 360° experience.
            </strong>
          </div>

          <a href="/contact">
            Start a Project
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Services;