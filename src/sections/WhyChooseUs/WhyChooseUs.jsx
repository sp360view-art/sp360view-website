import "./WhyChooseUs.css";

const features = [
  {
    number: "01",
    title: "Immersive Experience",
    description:
      "Give your audience the freedom to explore your space naturally through an interactive 360° experience.",
    icon: "◉",
  },
  {
    number: "02",
    title: "Professional Capture",
    description:
      "High-quality 360° photography designed to present your space with clarity, depth and detail.",
    icon: "◎",
  },
  {
    number: "03",
    title: "Website Ready",
    description:
      "Your virtual tour can be seamlessly integrated into your existing website or a dedicated landing page.",
    icon: "↗",
  },
  {
    number: "04",
    title: "Works Everywhere",
    description:
      "Create experiences that your customers can explore across desktop, tablet and mobile devices.",
    icon: "◇",
  },
  {
    number: "05",
    title: "Easy to Share",
    description:
      "Share your virtual experience through websites, social media, messages, QR codes and digital campaigns.",
    icon: "⌁",
  },
  {
    number: "06",
    title: "Custom Experience",
    description:
      "Build a virtual experience around your brand, your space and the way you want customers to explore it.",
    icon: "✦",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section" id="about">
      <div className="why-container">

        {/* HEADER */}
        <div className="why-header">

          <div className="why-label">
            <span></span>
            WHY 360°
          </div>

          <div className="why-heading-row">

            <h2>
              More Than A View.
              <span>
                An Experience.
              </span>
            </h2>

            <p>
              We transform physical spaces into immersive
              digital experiences that people can explore,
              understand and remember.
            </p>

          </div>

        </div>


        {/* FEATURE GRID */}
        <div className="why-grid">

          {features.map((feature) => (
            <article
              className="why-card"
              key={feature.number}
            >

              <div className="why-card-top">

                <span className="why-number">
                  {feature.number}
                </span>

                <span className="why-icon">
                  {feature.icon}
                </span>

              </div>


              <div className="why-card-content">

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

              </div>


              <div className="why-card-line"></div>

            </article>
          ))}

        </div>


        {/* BOTTOM STATEMENT */}
        <div className="why-bottom">

          <div className="why-bottom-mark">
            360°
          </div>

          <div className="why-bottom-content">
            <span>
              YOUR SPACE. YOUR STORY.
            </span>

            <h3>
              Let people step inside,
              <strong> before they arrive.</strong>
            </h3>
          </div>

          <a href="#contact" className="why-bottom-button">
            Start Your Experience
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;