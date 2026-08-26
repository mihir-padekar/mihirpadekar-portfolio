import { motion } from "motion/react"
import { experience } from "../data/experience"

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p>EXPERIENCE</p>

          <h2>
            Where I've worked.
          </h2>
        </motion.div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <motion.article
              className="experience-item"
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="experience-period">
                {item.period}
              </div>

              <div className="experience-details">
                <h3>{item.role}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>

                <div className="experience-technologies">
                  {item.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience