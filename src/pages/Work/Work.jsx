import Portfolio from "../../sections/Portfolio/Portfolio";

import "./Work.css";

function Work() {
  return (
    <div className="work-page">

      <section className="work-page-hero">

        <span>SELECTED WORK</span>

        <h1>
          Explore Our
          <strong>Experiences.</strong>
        </h1>

        <p>
          Step inside the spaces we've transformed
          into immersive 360° digital experiences.
        </p>

      </section>

      <Portfolio />

    </div>
  );
}

export default Work;