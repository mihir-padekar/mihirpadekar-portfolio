import { useState } from "react"
import "../css/ResumeWindow.css"

type ResumeTab =
  | "profile"
  | "experience"
  | "projects"
  | "skills"

function ResumeWindow() {
  const [activeTab, setActiveTab] =
    useState<ResumeTab>("profile")

  const downloadResume = () => {
    const link = document.createElement("a")

    link.href = "/resume.pdf"
    link.download = "Mihir_Padekar_Resume.pdf"

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="resume-window-content">

      {/* =========================
          TAB BAR
      ========================= */}

      <div className="resume-tabs">

        <button
          className={`resume-tab ${
            activeTab === "profile" ? "active" : ""
          }`}
          onClick={() => setActiveTab("profile")}
        >
          PROFILE
        </button>

        <button
          className={`resume-tab ${
            activeTab === "experience" ? "active" : ""
          }`}
          onClick={() => setActiveTab("experience")}
        >
          EXPERIENCE
        </button>

        <button
          className={`resume-tab ${
            activeTab === "projects" ? "active" : ""
          }`}
          onClick={() => setActiveTab("projects")}
        >
          PROJECTS
        </button>

        <button
          className={`resume-tab ${
            activeTab === "skills" ? "active" : ""
          }`}
          onClick={() => setActiveTab("skills")}
        >
          SKILLS
        </button>

        {/* DOWNLOAD RESUME */}

        <button
          className="resume-download"
          onClick={downloadResume}
        >
          DOWNLOAD RESUME
        </button>

      </div>


      {/* =========================
          CONTENT
      ========================= */}

      <div className="resume-tab-content">

        {/* =========================
            PROFILE
        ========================= */}

        {activeTab === "profile" && (
  <div className="resume-panel resume-profile">

    <div className="resume-system-label">
      MIHIR_OS / PROFESSIONAL PROFILE
    </div>

    <div className="resume-profile-heading">
      <h1>MIHIR PADEKAR</h1>

      <h2>
        AI/ML | FULL-STACK DEVELOPER
      </h2>
    </div>

    <div className="resume-divider" />

    <div className="resume-info">

      <div className="resume-info-item">
        <span>LOCATION</span>
        <strong>India</strong>
      </div>

      <div className="resume-info-item">
        <span>EDUCATION</span>
        <strong>MCA - Data Science</strong>
      </div>

      <div className="resume-info-item">
        <span>FOCUS</span>
        <strong>AI / ML / Generative AI</strong>
      </div>

      <div className="resume-info-item">
        <span>STATUS</span>
        <strong className="resume-online">
          AVAILABLE
        </strong>
      </div>

    </div>

    <div className="resume-divider" />

    <p className="resume-summary">
      AI/ML and software engineering professional focused
      on building production-oriented machine learning
      systems, backend APIs, generative AI applications
      and data-driven solutions.
    </p>

  </div>
)}


        {/* =========================
            EXPERIENCE
        ========================= */}

        {activeTab === "experience" && (
          <div className="resume-panel">

            <div className="resume-section-title">
              PROFESSIONAL EXPERIENCE
            </div>

            <h2>
              AI/ML & Python Software Engineering Intern
            </h2>

            <div className="resume-meta">
              Applsip Technologies Pvt Ltd
              {" "}· Sept 2025 - Feb 2026
            </div>

            <div className="resume-divider" />

            <ul className="resume-list">

              <li>
                Developed Python-based REST APIs using
                FastAPI for a hotel management SaaS platform.
              </li>

              <li>
                Designed PostgreSQL databases and optimized
                SQL queries for operational workflows.
              </li>

              <li>
                Implemented NLP-based customer feedback
                analysis and sentiment classification.
              </li>

              <li>
                Built backend services for invoicing,
                notifications and analytics.
              </li>

            </ul>

          </div>
        )}


        {/* =========================
            PROJECTS
        ========================= */}

        {activeTab === "projects" && (
          <div className="resume-panel">

            <div className="resume-section-title">
              FEATURED PROJECTS
            </div>

            <div className="resume-project">

              <h2>
                Autonomous E-Commerce Operations Agent
              </h2>

              <span>
                Python · FastAPI · PostgreSQL ·
                LangGraph · RAG
              </span>

              <p>
                Multi-agent AI platform for monitoring
                e-commerce operations, analyzing delays,
                evaluating SLA compliance and generating
                executive reports.
              </p>

            </div>

            <div className="resume-divider" />

            <div className="resume-project">

              <h2>
                DecisionPilot AI
              </h2>

              <span>
                Python · Pandas · Plotly ·
                LangGraph · Groq
              </span>

              <p>
                AI-powered business analytics assistant
                for CSV profiling, conversational analysis,
                dynamic visualizations and executive
                report generation.
              </p>

            </div>

            <div className="resume-divider" />

            <div className="resume-project">

              <h2>
                Telco Customer Churn Prediction
              </h2>

              <span>
                Python · Scikit-learn · XGBoost ·
                MLflow · Docker · Streamlit
              </span>

              <p>
                End-to-end churn prediction platform with
                experiment tracking, Docker deployment,
                Streamlit dashboard and business KPI analysis.
              </p>

            </div>

          </div>
        )}


        {/* =========================
            SKILLS
        ========================= */}

        {activeTab === "skills" && (
          <div className="resume-panel">

            <div className="resume-section-title">
              TECHNICAL SKILLS
            </div>

            <div className="resume-skill-grid">

              <div>
                <span>PROGRAMMING</span>
                <strong>
                  Python, SQL
                </strong>
              </div>

              <div>
                <span>DATA</span>
                <strong>
                  Pandas, NumPy, Excel,
                  Power BI, Plotly
                </strong>
              </div>

              <div>
                <span>BACKEND</span>
                <strong>
                  FastAPI, REST APIs,
                  SQLAlchemy, Swagger
                </strong>
              </div>

              <div>
                <span>ML / AI</span>
                <strong>
                  Scikit-learn, TensorFlow,
                  Keras, PyTorch, NLP,
                  Deep Learning, OpenCV
                </strong>
              </div>

              <div>
                <span>GENERATIVE AI</span>
                <strong>
                  LangChain, LangGraph, RAG,
                  ChromaDB, Groq, AI Agents
                </strong>
              </div>

              <div>
                <span>TOOLS / CLOUD</span>
                <strong>
                  Git, GitHub, Docker, AWS,
                  Jupyter Notebook
                </strong>
              </div>

            </div>

          </div>
        )}

      </div>


      {/* =========================
          STATUS BAR
      ========================= */}

      <div className="resume-actionbar">

        <span>
          {activeTab.toUpperCase()} · MIHIR_OS
        </span>

      </div>

    </div>
  )
}

export default ResumeWindow