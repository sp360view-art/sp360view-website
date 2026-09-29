import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Capture",
    description:
      "We professionally capture your space using high-quality 360° cameras.",
  },
  {
    number: "02",
    title: "Process",
    description:
      "We stitch, optimize and prepare your visuals for a smooth immersive experience.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn your 360° content into an interactive virtual tour for your audience.",
  },
  {
    number: "04",
    title: "Experience",
    description:
      "Your customers can explore the space anytime, anywhere, on any device.",
  },
];

function HowItWorks() {
  return (
    <section className="process-section" id="process">

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
              A simple process designed to transform
              your physical space into an immersive
              digital experience.
            </p>

          </div>

        </div>


        {/* STEPS */}

        <div className="process-grid">

          {steps.map((step, index) => (

            <div
              className="process-item"
              key={step.number}
            >

              <div className="process-top">

                <span className="process-number">
                  {step.number}
                </span>

                {index !== steps.length - 1 && (
                  <span className="process-line"></span>
                )}

              </div>


              <div className="process-icon">

                {index === 0 && "◉"}
                {index === 1 && "✦"}
                {index === 2 && "◇"}
                {index === 3 && "↗"}

              </div>


              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>

          ))}

        </div>


        {/* BOTTOM */}

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