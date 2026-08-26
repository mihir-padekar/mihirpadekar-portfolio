import { motion } from "motion/react"

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="contact-label">GET IN TOUCH</p>

          <h2>
            Let's build something useful.
          </h2>

          <p className="contact-description">
            I'm interested in software engineering, full-stack development,
            AI/ML, and building intelligent products.
          </p>

          <div className="contact-links">
            <a href="mailto:your-email@example.com">
              Email
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact