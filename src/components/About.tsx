import { motion } from "motion/react"

function About() {
  return (
    <section id="about" className="about">

      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p>ABOUT ME</p>

        <h2>
          Building software with AI at the core.
        </h2>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <p>
          I'm a software engineer focused on building full-stack
          applications and intelligent systems. My work spans
          frontend development, backend APIs, machine learning,
          and AI-powered applications.
        </p>

        <p>
          I enjoy taking a problem from data and model development
          all the way to a usable, deployed product.
        </p>
      </motion.div>

    </section>
  )
}

export default About