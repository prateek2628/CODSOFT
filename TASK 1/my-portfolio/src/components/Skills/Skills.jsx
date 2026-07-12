import "./Skills.css";

const skills = [
  { name: "HTML", value: 95 },
  { name: "CSS", value: 90 },
  { name: "JavaScript", value: 88 },
  { name: "React.js", value: 85 },
  { name: "Python", value: 80 },
  { name: "C++", value: 80 },
  { name: "MongoDB", value: 75 },
  { name: "Git & GitHub", value: 82 },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="container">

        <div className="section-title">
          <p>MY SKILLS</p>
          <h2>Skills & Technologies</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (

            <div className="skill-card" key={skill.name}>

              <div className="skill-top">

                <h3>{skill.name}</h3>

                <span>{skill.value}%</span>

              </div>

              <div className="progress">

                <div
                  className="progress-fill"
                  style={{ width: `${skill.value}%` }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;