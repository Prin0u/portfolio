import "./css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-title">
        <h1>Développeur Web Full Stack</h1>
      </div>
      <div className="hero-content">
        <div className="hero-left">
          <p>
            Je conçois des applications web full-stack, de la base de données
            jusqu'à l'interface utilisateur. Curieux et autodidacte, j'aime
            comprendre comment les choses fonctionnent avant de les construire,
            que ce soit en React, Node.js ou PHP.
          </p>
          <div className="hero-button">
            <a href="#projects" className="btn-hero">
              Voir mes projets
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img src="./images/me.jpg" alt="Photo de moi" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
