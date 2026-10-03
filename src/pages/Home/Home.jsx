import Hero from "../../sections/Hero/Hero";
import Portfolio from "../../sections/Portfolio/Portfolio";
import HowItWorks from "../../sections/HowItWorks/HowItWorks";

import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <Hero />

      {/* OUR EXPERIENCE */}
      <Portfolio />

      {/* EXPERIENCE PROCESS */}
      <HowItWorks />

    </div>
  );
}

export default Home;