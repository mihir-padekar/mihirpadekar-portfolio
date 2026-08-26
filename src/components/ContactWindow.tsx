import "../css/ContactWindow.css"

function ContactWindow() {
  return (
    <div className="contact-window-content">

      {/* =========================
          HEADER
      ========================= */}

      <div className="contact-system-label">
        MIHIR_OS / CONTACT CENTER
      </div>

      <div className="contact-heading">
        <h1>CONTACT</h1>
        <p>GET IN TOUCH WITH MIHIR PADEKAR</p>
      </div>


      {/* =========================
          CONTACT INFORMATION
      ========================= */}

      <div className="contact-panel">

        <div className="contact-panel-title">
          CONTACT INFORMATION
        </div>

        <div className="contact-grid">

          <span>EMAIL</span>

          <a
            href="mailto:mihirpadekar91@gmail.com"
            className="contact-link"
          >
            mihirpadekar91@gmail.com
          </a>


          <span>GITHUB</span>

          <a
            href="https://github.com/mihir-padekar"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            github.com/mihir-padekar
          </a>


          <span>LINKEDIN</span>

          <a
            href="https://www.linkedin.com/in/mihirpadekar/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            linkedin.com/in/mihirpadekar
          </a>


          <span>LOCATION</span>

          <strong>
            India
          </strong>

        </div>

      </div>


      {/* =========================
          STATUS
      ========================= */}

      <div className="contact-status">
        <span className="status-dot">●</span>
        AVAILABLE FOR OPPORTUNITIES
      </div>


      {/* =========================
          ACTION BUTTONS
      ========================= */}

      <div className="contact-actions">

        <a
          href="mailto:mihirpadekar91@gmail.com"
          className="contact-button"
        >
          SEND EMAIL
        </a>

        <a
          href="https://github.com/mihir-padekar"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          GITHUB
        </a>

        <a
          href="https://www.linkedin.com/in/mihirpadekar/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          LINKEDIN
        </a>

      </div>

    </div>
  )
}

export default ContactWindow