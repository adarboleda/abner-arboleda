import styles from "./ProjectsStyle.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import freshBurger from "../../assets/fresh-burger.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className="sectionTitle">Proyectos</h2>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://github.com/adarboleda"}
          h3={"Viberr"}
          p={"Streaming App"}
        />
        <ProjectCard
          src={freshBurger}
          link={"https://github.com/adarboleda"}
          h3={"Fresh Burger"}
          p={"Food App"}
        />
        <ProjectCard
          src={freshBurger}
          link={"https://github.com/adarboleda"}
          h3={"Fresh Burger"}
          p={"Food App"}
        />
        <ProjectCard
          src={freshBurger}
          link={"https://github.com/adarboleda"}
          h3={"Fresh Burger"}
          p={"Food App"}
        />
      </div>
    </section>
  );
}

export default Projects;
