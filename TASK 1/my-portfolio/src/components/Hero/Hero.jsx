import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-bg-circle circle1"></div>
      <div className="hero-bg-circle circle2"></div>

      <div className="container hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="hero-tag">
            👋 Hello, I'm
          </p>

          <h1>
            Prateek <span>Pandey</span>
          </h1>
<div className="typing-text">
  <TypeAnimation
    sequence={[
      "Frontend Developer",
      2000,
      "React.js Developer",
      2000,
      "AI & ML Student",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>
          <p className="hero-description">
            Passionate B.Tech AIML student specializing in building
            beautiful, responsive and interactive websites using
            React.js, JavaScript and modern UI design principles.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="/resume.pdf" className="secondary-btn">
              <FaDownload />
              Resume
            </a>

          </div>

          <div className="hero-socials">

            <a href="https://github.com/prateek2628" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/prateek-pandey-25315232b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="image-card">

            <img
              src="/profile.png"
              alt="Prateek"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;