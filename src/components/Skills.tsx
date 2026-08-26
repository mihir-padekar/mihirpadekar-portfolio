import { motion } from "motion/react"

interface Skill {
  name: string
  category: string
}

const skills: Skill[] = [
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Scikit-learn", category: "Machine Learning" },
  { name: "XGBoost", category: "Machine Learning" },
  { name: "PyTorch", category: "Deep Learning" },
  { name: "LangGraph", category: "AI" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Git", category: "Tools" },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p>TECH STACK</p>

          <h2>
            Tools I use to build things.
          </h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
            >
              <span className="skill-name">
                {skill.name}
              </span>

              <span className="skill-category">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills