import "./css/Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Compétences</h2>

      <div className="skills-container">
        <div className="skill-card">
          <h3>Front-end</h3>
          <ul>
            <li>HTML / CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Back-end</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Outils utilisés</h3>
          <ul>
            <li>Git / GitHub</li>
            <li>VS Code</li>
            <li>Figma</li>
            <li>Vercel</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
