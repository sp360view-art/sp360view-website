import Hero from "../../sections/Hero/Hero";
import Portfolio from "../../sections/Portfolio/Portfolio";
import HowItWorks from "../../sections/HowItWorks/HowItWorks";
import ServicesSection from "../../sections/Services/Services";

import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      <Hero />

      <Portfolio />

      <HowItWorks />

      <ServicesSection />

    </div>
  );
}

export default Home;