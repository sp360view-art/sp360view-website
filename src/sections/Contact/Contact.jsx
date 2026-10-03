import { useState } from "react";
import "./Contact.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwO5xy8SNB6bU6r0682hx2-J4uLq9lMyDTHeNLJcm4hWNRWLHuzHs-zy_U3w1NcOIMK/exec";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      alert(
        "Thank you! Your enquiry has been submitted successfully."
      );

      setFormData({
        name: "",
        phone: "",
        email: "",
        business: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);

      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">

      {/* =================================================
          AMBIENT BACKGROUND
      ================================================= */}

      <div className="contact-ambient">

        <span className="ambient-orb ambient-orb-one"></span>
        <span className="ambient-orb ambient-orb-two"></span>
        <span className="ambient-orb ambient-orb-three"></span>

        <span className="ambient-dot ambient-dot-one"></span>
        <span className="ambient-dot ambient-dot-two"></span>
        <span className="ambient-dot ambient-dot-three"></span>
        <span className="ambient-dot ambient-dot-four"></span>

      </div>


      <div className="contact-container">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="contact-content">

          {/* BACKGROUND ORBITS */}

          <div className="contact-orbit-system">

            <div className="contact-orbit contact-orbit-one">
              <span></span>
            </div>

            <div className="contact-orbit contact-orbit-two">
              <span></span>
            </div>

            <div className="contact-orbit contact-orbit-three">
              <span></span>
            </div>

            <div className="contact-orbit-core">
              <span>360°</span>
            </div>

          </div>


          {/* FLOATING PARTICLES */}

          <div className="contact-particles">

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </div>


          {/* CONTENT */}

          <div className="contact-content-inner">

            <div className="contact-label">
              <span></span>
              LET'S CONNECT
            </div>


            <h2>
              Ready To
              <span>Go 360°?</span>
            </h2>


            <p className="contact-intro">
              Tell us about your space and let's create
              an immersive experience your customers
              will remember.
            </p>


            {/* CONTACT DETAILS */}

            <div className="contact-details">

              {/* CALL */}

              <div className="contact-detail">

                <a
                  href="tel:+919158591152"
                  className="contact-detail-icon"
                  aria-label="Call SP 360VIEW"
                >
                  ↗
                </a>

                <div>
                  <span>CALL US</span>

                  <a href="tel:+919158591152">
                    +91 91585 91152
                  </a>
                </div>

              </div>


              {/* EMAIL */}

              <div className="contact-detail">

                <a
                  href="mailto:sp360view@gmail.com"
                  className="contact-detail-icon"
                  aria-label="Email SP 360VIEW"
                >
                  @
                </a>

                <div>
                  <span>EMAIL US</span>

                  <a href="mailto:sp360view@gmail.com">
                    sp360view@gmail.com
                  </a>
                </div>

              </div>


              {/* LOCATION */}

              <div className="contact-detail">

                <span className="contact-detail-icon">
                  ◉
                </span>

                <div>
                  <span>LOCATION</span>

                  <p>
                    Pune, Maharashtra
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT SIDE FORM
        ================================================= */}

        <div className="contact-form-wrapper">

          {/* FORM DECORATION */}

          <div className="form-orbit-decoration">
            <span></span>
          </div>

          <div className="form-light"></div>


          {/* FORM HEADER */}

          <div className="contact-form-header">

            <span>
              START A PROJECT
            </span>

            <p>
              Fill in the details and we'll get back to you.
            </p>

          </div>


          {/* FORM */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME + PHONE */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />

            </div>


            {/* BUSINESS */}

            <div className="form-group">

              <label>
                Business / Space
              </label>

              <input
                type="text"
                name="business"
                placeholder="Property, Hotel, Restaurant..."
                value={formData.business}
                onChange={handleChange}
              />

            </div>


            {/* MESSAGE */}

            <div className="form-group">

              <label>
                Tell us about your project
              </label>

              <textarea
                name="message"
                rows="4"
                placeholder="What would you like to create?"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >

              <span className="submit-text">
                {isSubmitting
                  ? "Sending..."
                  : "Send Enquiry"}
              </span>

              {!isSubmitting && (
                <span className="submit-arrow">
                  ↗
                </span>
              )}

              <span className="submit-shine"></span>

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;