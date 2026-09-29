import AboutSection from "../../sections/About/About";

import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-page-hero">

        <span>ABOUT US</span>

        <h1>
          More Than A View.
          <strong>An Experience.</strong>
        </h1>

        <p>
          We transform physical spaces into immersive
          digital experiences.
        </p>

      </section>

      <AboutSection />

    </div>
  );
}

export default About;