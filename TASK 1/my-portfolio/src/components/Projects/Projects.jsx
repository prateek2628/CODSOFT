import "./Projects.css";

import aiInterview from "../../assets/images/ai-interview.png";
import eliteGlobal from "../../assets/images/elite-global.png";
import portfolio from "../../assets/images/portfolio.png";
import ticTacToe from "../../assets/images/tic-tac-toe.png";

const projects = [
  {
    title: "AI Interview Trainer",
    image: aiInterview,
    tech: "React.js • JavaScript • CSS",
    description:
      "An AI-powered interview preparation platform with mock interviews and interactive UI.",

    github: "https://github.com/prateek2628/ai-interview-trainer",
    
  },

  {
    title: "Elite Global - Corporate Business Website",
    image: eliteGlobal,
    tech: "React.js • CSS • JavaScript",

    description:
      "Corporate business website featuring modern animations, responsive layouts and elegant design.",

    github: "https://github.com/prateek2628/elite-global",
    demo: "https://elite-global.vercel.app",
  },

  {
    title: "Portfolio Website",
    image: portfolio,
    tech: "React.js • Framer Motion",

    description:
      "Personal portfolio showcasing projects, skills and frontend expertise.",

    github: "https://github.com/prateek2628/portfolio",
    
  },

  {
    title: "Tic Tac Toe",
    image: ticTacToe,
    tech: "HTML • CSS • JavaScript",

    description:
      "Responsive Tic Tac Toe game with interactive gameplay.",

    github: "https://github.com/prateek2628/tic-tac-toe",
  
  },
];
function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="container">

        <div className="section-title">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

          <div className="project-image">

  <img
    src={project.image}
    alt={project.title}
  />

</div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p className="tech">{project.tech}</p>

                <p>{project.description}</p>

                <div className="project-buttons">

                  <a href={project.github}>
                    GitHub
                  </a>

                  <a href={project.demo}>
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;