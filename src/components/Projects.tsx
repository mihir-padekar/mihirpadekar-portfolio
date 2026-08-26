import { motion } from "motion/react"
import { projects } from "../data/projects"

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p>PROJECTS</p>

          <h2>
            Things I've built.
          </h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
            >
              <div className="project-card-content">

                <span className="project-number">
                  0{index + 1}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects