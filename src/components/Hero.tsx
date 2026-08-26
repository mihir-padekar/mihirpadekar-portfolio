import { motion } from "motion/react"
import MarketVisual from "./MarketVisual"

interface HeroProps {
  name: string
  role: string
  description: string
}

function Hero({ name, role, description }: HeroProps) {
  return (
    <section className="hero">
        <MarketVisual />
      <div className="hero-grid" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="hero-status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          ● AVAILABLE FOR OPPORTUNITIES
        </motion.p>

        <p className="hero-role">
          {role}
        </p>

        <h1>
          {name}
        </h1>

        <p className="hero-description">
          {description}
        </p>

        <div className="hero-buttons">

          <motion.a
            href="#projects"
            className="hero-button primary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects →
          </motion.a>

          <motion.a
            href="#contact"
            className="hero-button secondary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact
          </motion.a>

        </div>

        <div className="hero-themes">
          <span>BUILD</span>
          <span>TRAIN</span>
          <span>ANALYZE</span>
          <span>ITERATE</span>
        </div>

      </motion.div>

    </section>
  )
}

export default Hero