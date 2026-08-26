import "../css/AboutWindow.css"

function AboutWindow() {
  return (
    <div className="about-content">

      <div className="about-heading">
        <div className="about-icon">
          <span>MIHIR_OS</span>
        </div>

        <div className="about-identity">
          <h1>Mihir Padekar</h1>
          <p>Software Engineer</p>
          <span>MCA — Data Science</span>
        </div>
      </div>

      <div className="about-divider" />

      <section className="about-section">
        <h3>USER INFORMATION</h3>

        <div className="about-info-grid">
          <span>Name</span>
          <strong>Mihir Padekar</strong>

          <span>Role</span>
          <strong>Software Engineer</strong>

          <span>Education</span>
          <strong>MCA — Data Science</strong>
        </div>
      </section>

      <section className="about-section">
        <h3>SPECIALIZATION</h3>

        <div className="about-tags">
          <span>Full-Stack Development</span>
          <span>Machine Learning</span>
          <span>Generative AI</span>
          <span>Data Analytics</span>
        </div>
      </section>

      <section className="about-section">
        <h3>SYSTEM STATUS</h3>

        <div className="about-info-grid">
          <span>Status</span>
          <strong className="online-status">● ONLINE</strong>

          <span>Mode</span>
          <strong>BUILD / LEARN</strong>

          <span>System</span>
          <strong>MIHIR_OS</strong>
        </div>
      </section>

    </div>
  )
}

export default AboutWindow