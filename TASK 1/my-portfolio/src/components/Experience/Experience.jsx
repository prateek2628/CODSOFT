import "./Experience.css";

const experiences = [
  {
    year: "2023 - Present",
    title: "B.Tech CSE (AI & ML)",
    company: "University",
    description:
      "Currently pursuing B.Tech with specialization in Artificial Intelligence & Machine Learning while focusing on Frontend Development.",
  },
  {
    year: "2025",
    title: "Frontend Developer",
    company: "Personal Projects",
    description:
      "Built multiple React.js projects including AI Interview Trainer, Elite Global Business Website and Portfolio Website.",
  },
  {
    year: "2026",
    title: "Learning & Growth",
    company: "Self Learning",
    description:
      "Continuously learning React, JavaScript, UI/UX Design, Git, APIs and modern frontend technologies.",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">

        <div className="section-title">
          <p>MY JOURNEY</p>
          <h2>Experience & Education</h2>
        </div>

        <div className="timeline">

          {experiences.map((item, index) => (
            <div className="timeline-item" key={index}>

              <div className="circle"></div>

              <div className="timeline-content">

                <span>{item.year}</span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;