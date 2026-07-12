import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-left">

          <h2>Prateek<span>.</span></h2>

          <p>
            Frontend Developer • React Developer 
          </p>

        </div>

        <div className="footer-social">

          <a href="https://github.com/prateek2628" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/prateek-pandey-25315232b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="mailto:pandeyprateek6268@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="copyright">

        © 2026 Prateek Pandey. All Rights Reserved.

      </div>

      <button
        className="scroll-top"
        onClick={scrollTop}
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}

export default Footer;