import { useState } from "react";
import "../styles/style.css"; 
import logo from "../images/logovv.png";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/omoiguiiriagbonse@gmail.com",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        setStatus("✨ Message sent successfully! We'll get back to you soon.");
        form.reset();
      } else {
        setStatus("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("⚠️ Network error. Please try again later.");
    }
  };

  return (
    <div className="contact-page">


      {/* HERO */}
      <section className="contact-hero-lux">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>
            Questions, collaborations, or styling inquiries — we’re here to help.
            Join the Vixen community and stay connected with exclusive drops.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="contact-container">

        {/* INFO CARDS */}
        <div className="contact-info-grid">

          <div className="contact-info-card">
            <h3>Email</h3>
            <p>support@vintagevixen.com</p>
            <span>We respond within 24 hours</span>
          </div>

          <div className="contact-info-card">
            <h3>Instagram</h3>
            <p>@vintagevixen</p>
            <span>Tag us to be featured</span>
          </div>

          <div className="contact-info-card">
            <h3>Business</h3>
            <p>Partnership & Press</p>
            <span>collab@vintagevixen.com</span>
          </div>

        </div>

        {/* MAIN */}
        <div className="contact-main-grid">

          <div className="contact-text">
            <h2>We’d Love to Hear From You</h2>

            <p>
              Whether you're searching for a dream vintage piece, need help with an
              order, or want to collaborate, our team is always happy to connect.
              Vintage Vixen is built on community, confidence, and timeless style.
            </p>

            <div className="contact-divider"></div>

            <p className="contact-note">
              Please allow 1–2 business days for responses during peak launch periods.
            </p>
          </div>

          {/* FORM */}
          <form className="contact-form-lux" onSubmit={handleSubmit}>
            <h2>Send a Message</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button className="btn">Send Message</button>

            <p>{status}</p>
          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;
