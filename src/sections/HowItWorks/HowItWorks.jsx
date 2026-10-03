import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Capture",
    description:
      "We professionally capture your space using high-quality 360° cameras.",
    animation: "capture",
  },
  {
    number: "02",
    title: "Process",
    description:
      "We stitch, optimize and prepare your visuals for a smooth immersive experience.",
    animation: "process",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn your 360° content into an interactive virtual tour for your audience.",
    animation: "build",
  },
  {
    number: "04",
    title: "Experience",
    description:
      "Your customers can explore the space anytime, anywhere, on any device.",
    animation: "experience",
  },
];

function HowItWorks() {
  return (
    <section className="process-section" id="process">

      {/* =========================
          PREMIUM BACKGROUND ANIMATION
      ========================= */}

      <div className="process-background-animation">

        <div className="process-orbit orbit-large">
          <span></span>
        </div>

        <div className="process-orbit orbit-medium">
          <span></span>
        </div>

        <div className="process-orbit orbit-small">
          <span></span>
        </div>

        <div className="process-glow glow-one"></div>

        <div className="process-glow glow-two"></div>

        <div className="process-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <div className="process-container">

        {/* HEADER */}

        <div className="process-header">

          <div className="process-label">
            <span></span>
            EXPERIENCE PROCESS
          </div>

          <div className="process-heading-row">

            <h2>
              From Space
              <span>To Experience.</span>
            </h2>

            <p>
              A simple process designed to transform your
              physical space into an immersive digital
              experience.
            </p>

          </div>

        </div>

        {/* =========================
            PROCESS CARDS
        ========================= */}

        <div className="process-grid">

          {steps.map((step, index) => (

            <div
              className={`process-item process-${step.animation}`}
              key={step.number}
            >

              {/* TOP */}

              <div className="process-top">

                <span className="process-number">
                  {step.number}
                </span>

                {index !== steps.length - 1 && (
                  <span className="process-line"></span>
                )}

              </div>

              {/* =========================
                  ANIMATED ICON
              ========================= */}

              <div className="process-icon">

                {/* CAPTURE */}

                {step.animation === "capture" && (
                  <div className="capture-animation">

                    <div className="capture-corner top-left"></div>

                    <div className="capture-corner top-right"></div>

                    <div className="capture-corner bottom-left"></div>

                    <div className="capture-corner bottom-right"></div>

                    <div className="capture-lens">
                      <span></span>
                    </div>

                    <div className="capture-scan"></div>

                  </div>
                )}

                {/* PROCESS */}

                {step.animation === "process" && (
                  <div className="process-animation">

                    <div className="process-ring ring-one"></div>

                    <div className="process-ring ring-two"></div>

                    <div className="process-core">
                      360°
                    </div>

                  </div>
                )}

                {/* BUILD */}

                {step.animation === "build" && (
                  <div className="build-animation">

                    <span className="build-piece piece-one"></span>

                    <span className="build-piece piece-two"></span>

                    <span className="build-piece piece-three"></span>

                    <span className="build-piece piece-four"></span>

                    <span className="build-center">
                      +
                    </span>

                  </div>
                )}

                {/* EXPERIENCE */}

                {step.animation === "experience" && (
                  <div className="experience-animation">

                    <div className="experience-orbit orbit-one">
                      <span></span>
                    </div>

                    <div className="experience-orbit orbit-two">
                      <span></span>
                    </div>

                    <div className="experience-globe">
                      <span>360°</span>
                    </div>

                  </div>
                )}

              </div>

              {/* CONTENT */}

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>

          ))}

        </div>

        {/* =========================
            BOTTOM
        ========================= */}

        <div className="process-bottom">

          <span>
            SIMPLE PROCESS. POWERFUL EXPERIENCE.
          </span>

          <strong>
            Your space is ready for 360°.
          </strong>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;