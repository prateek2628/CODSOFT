import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-title">
          <p>GET IN TOUCH</p>
          <h2>Let's Work Together</h2>
        </div>

        <div className="contact-container">

          {/* Left Side */}
          <div className="contact-info">

            <h3>Contact Information</h3>

            <p>
              I'm currently looking for Frontend Developer opportunities,
              internships and freelance projects.
            </p>

            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:pandeyprateek6268@gmail.com">
                pandeyprateek6268@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <FaGithub />
              <a
                href="https://github.com/prateek2628"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/prateek2628
              </a>
            </div>

            <div className="contact-item">
              <FaLinkedin />
              <a
                href="https://linkedin.com/in/prateek-pandey-25315232b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/prateek-pandey-25315232b
              </a>
            </div>

          </div>

          {/* Right Side */}
          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;