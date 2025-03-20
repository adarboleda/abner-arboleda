import styles from "./HeroStyles.module.css";
import abner from "../../assets/Abner-cartoon.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toogleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="Hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={abner}
          alt="Profile picture of Abner Arboleda"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toogleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Abner
          <br />
          Arboleda
        </h1>
        <h2>Estudiante de Ingenieria de Sofware</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Soy un estudiante de Ingeniería de Software apasionado por la
          tecnología y el desarrollo web. Me encanta aprender cosas nuevas y
          compartir mis conocimientos con los demás.
        </p>
        <a href={CV} download>
          <button className="hover">Descargar CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
