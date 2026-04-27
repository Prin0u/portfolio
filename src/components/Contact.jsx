import "./css/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_afb8b4m",
        "template_7lyy15w",
        form.current,
        "AdMEfIPLf0Qu8R9Y3"
      )
      .then(
        () => {
          alert("Message envoyé !");
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("Erreur lors de l'envoi");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-intro">
            Un projet ou une opportunité de stage ? Contactez moi !
          </p>
          <div className="contact-links">
            <a href="mailto:geoffrey.dev01@gmail.com">
              <FaEnvelope className="icon" />
              geoffrey.dev01@gmail.com
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="icon" />
              Linkedin
            </a>
            <a href="https://github.com/Prin0u">
              <FaGithub className="icon" />
              Mon GitHub
            </a>
          </div>
        </div>

        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Nom" required />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
            <input type="text" name="subject" placeholder="Sujet" required />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>

            <button type="submit" className="btn-submit">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
