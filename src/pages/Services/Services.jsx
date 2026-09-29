import ServicesSection from "../../sections/Services/Services";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">

      <section className="services-page-hero">
        <span>WHAT WE DO</span>

        <h1>
          Built Around
          <strong>Your Space.</strong>
        </h1>

        <p>
          Explore our complete range of 360° virtual
          experience solutions for your business.
        </p>
      </section>

      <ServicesSection />

    </div>
  );
}

export default Services;