import { useEffect, useState } from "react";
import "./css/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar-custom">
      <div className="logo">GEOFFREY CHENIVESSE</div>

      {/* Burger */}
      <div className="burger" onClick={() => setOpen(!open)}>
        ☰
      </div>
      {/* Liens */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>
          Accueil
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          Projets
        </a>
        <a href="#skills" onClick={() => setOpen(false)}>
          Compétences
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
