import "./About.css";

const points = [
  {
    number: "01",
    title: "Capture",
    text: "We capture your space in immersive 360° detail.",
  },
  {
    number: "02",
    title: "Transform",
    text: "We turn your visuals into an interactive digital experience.",
  },
  {
    number: "03",
    title: "Connect",
    text: "Your audience can explore your space from anywhere.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* LEFT CONTENT */}

        <div className="about-content">

          <div className="about-label">
            <span></span>
            ABOUT US
          </div>

          <h2>
            Turning
            <span> Spaces Into</span>
            Experiences.
          </h2>

          <p className="about-intro">
            We create immersive 360° virtual experiences that
            help businesses showcase their spaces in a completely
            different way.
          </p>

          <p className="about-description">
            From real estate properties and hotels to restaurants,
            showrooms and commercial spaces, we transform physical
            environments into interactive digital experiences that
            customers can explore anytime, anywhere.
          </p>

          <a href="/contact" className="about-button">
            Let's Work Together
            <span>↗</span>
          </a>

        </div>


        {/* RIGHT VISUAL */}

        <div className="about-visual">

          <div className="about-orbit orbit-one"></div>
          <div className="about-orbit orbit-two"></div>
          <div className="about-orbit orbit-three"></div>

          <div className="about-center">

            <span className="about-center-small">
              EXPLORE
            </span>

            <strong>
              360°
            </strong>

            <span className="about-center-small">
              YOUR SPACE
            </span>

          </div>

          <div className="about-floating about-floating-one">
            INTERACTIVE
          </div>

          <div className="about-floating about-floating-two">
            IMMERSIVE
          </div>

          <div className="about-floating about-floating-three">
            DIGITAL
          </div>

        </div>

      </div>


      {/* PROCESS STRIP */}

      <div className="about-process">

        {points.map((point) => (
          <div className="about-process-item" key={point.number}>

            <span className="about-process-number">
              {point.number}
            </span>

            <div>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default About;