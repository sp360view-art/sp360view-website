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

        {/* LEFT */}

        <div className="about-content">

          <div className="about-label">
            <span></span>
            ABOUT US
          </div>

          <h2>
            Turning
            <span>Spaces Into</span>
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


        {/* RIGHT 360 ANIMATION */}

        <div className="about-visual">

          <div className="about-glow"></div>

          <div className="orbit-stage">

            {/* OUTER ORBIT */}

            <div className="orbit orbit-outer">

              <div className="orbit-word">
                INTERACTIVE
              </div>

            </div>


            {/* MIDDLE ORBIT */}

            <div className="orbit orbit-middle">

              <div className="orbit-word">
                DIGITAL
              </div>

            </div>


            {/* INNER ORBIT */}

            <div className="orbit orbit-inner">

              <div className="orbit-word">
                IMMERSIVE
              </div>

            </div>


            {/* CENTER */}

            <div className="about-center">

              <span>EXPLORE</span>

              <strong>360°</strong>

              <span>YOUR SPACE</span>

            </div>

          </div>

        </div>

      </div>


      {/* PROCESS */}

      <div className="about-process">

        {points.map((point) => (
          <div
            className="about-process-item"
            key={point.number}
          >

            <span className="about-process-number">
              {point.number}
            </span>

            <div>
              <h3>{point.title}</h3>

              <p>{point.text}</p>
            </div>

            <span className="about-process-arrow">
              ↗
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default About;