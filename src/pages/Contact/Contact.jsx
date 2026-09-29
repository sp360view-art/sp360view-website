import ContactSection from "../../sections/Contact/Contact";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-page-hero">

        <span>LET'S CONNECT</span>

        <h1>
          Let's Create
          <strong>Something Immersive.</strong>
        </h1>

        <p>
          Tell us about your space and let's bring
          it into 360°.
        </p>

      </section>

      <ContactSection />

    </div>
  );
}

export default Contact;