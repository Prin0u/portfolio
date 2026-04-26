import "./css/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Mes projets</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Trouve ton artisan</h3>
          <img src="./images/project1.png" alt="Projet 1" />
          <p>Application web développée en React.JS.</p>
          <div className="project-buttons">
            <a
              href="https://devoir-trouve-ton-artisan.vercel.app"
              target="_blank"
              className="btn-project"
            >
              Voir le projet
            </a>
            <a
              href="https://github.com/Prin0u/devoir-trouve-ton-artisan"
              target="_blank"
              className="btn-project secondary"
            >
              Code source
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3>Touche pas au klaxon</h3>
          <img src="./images/project2.png" alt="Projet 2" />
          <p>
            Application web développée en PHP avec base de données en
            PostgreSQL.
          </p>
          <div className="project-buttons">
            <a
              href="https://touche-pas-au-klaxon.onrender.com"
              target="_blank"
              className="btn-project"
            >
              Voir le projet
            </a>
            <a
              href="https://github.com/Prin0u/devoir-app-mvc-php"
              target="_blank"
              className="btn-project secondary"
            >
              Code source
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3>Port de plaisance Russell</h3>
          <img src="./images/project3.png" alt="Projet 3" />

          <p>API REST Express.</p>
          <div className="project-buttons">
            <a
              href="https://devoir-api-port-plaisance-russell.onrender.com"
              target="_blank"
              className="btn-project"
            >
              Voir le projet
            </a>
            <a
              href="https://github.com/Prin0u/devoir-api-port-plaisance-russell"
              target="_blank"
              className="btn-project secondary"
            >
              Code source
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
