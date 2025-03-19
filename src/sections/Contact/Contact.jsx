import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h2 className="sectionTitle">Contact</h2>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Mensaje"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Contact;
