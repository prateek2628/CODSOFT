import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="section-title">
          <p>WHO I AM</p>
          <h2>About Me</h2>
        </div>

        <div className="about-container">

          <div className="about-left">

            <div className="about-card">

              <h3>Frontend Developer</h3>

              <p>
                I'm Prateek Pandey, a B.Tech AIML student passionate about
                Frontend Development and UI/UX Design. I enjoy building
                premium websites with React.js and modern technologies.
              </p>

              <p>
                My goal is to build fast, responsive and visually
                appealing web applications while continuously learning
                new technologies.
              </p>

            </div>

          </div>

          <div className="about-right">

            <div className="info-box">
              <h4>Education</h4>
              <p>B.Tech CSE (AI & ML)</p>
            </div>

            <div className="info-box">
              <h4>CGPA</h4>
              <p>7.3 / 10</p>
            </div>

            <div className="info-box">
              <h4>Projects</h4>
              <p>4 Completed</p>
            </div>

            <div className="info-box">
              <h4>Location</h4>
              <p>India</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;