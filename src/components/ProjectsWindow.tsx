import { useState } from "react"
import "../css/ProjectsWindow.css"
type Project = {
  id: string
  name: string
  category: string
  description: string
  stack: string[]
  status: string
  github: string
  demo?: string
}

const projects: Project[] = [
 {
  id: "autonomous-ecommerce-agent",
  name: "Autonomous E-Commerce Agent",
  category: "AI / Multi-Agent Systems",
  description:
    "An AI-powered multi-agent system for monitoring and analyzing e-commerce operations. It identifies delivery delays, warehouse bottlenecks, customer complaints, SLA violations, and support ticket risks through automated analysis and reporting.",
  stack: [
    "Python",
    "FastAPI",
    "LangGraph",
    "LangChain",
    "PostgreSQL",
    "SQLAlchemy",
    "Groq",
    "Llama 3.3 70B",
    "RAG",
    "Streamlit",
  ],
  status: "COMPLETED",
  github:"https://github.com/mihir-padekar/autonomous-ecommerce-agent",
},

  {
  id: "decisionpilot-ai",
  name: "DecisionPilot AI",
  category: "AI / Business Analytics",
  description:
    "An AI-powered Business Analytics Assistant that transforms CSV datasets into actionable business insights, visualizations, and executive reports using LLMs and LangGraph.",
  stack: [
    "Python",
    "Streamlit",
    "LangGraph",
    "Groq LLM",
    "Pandas",
    "NumPy",
    "Plotly",
    "FPDF",
  ],
  status: "COMPLETED",
  github:
    "https://github.com/mihir-padekar/AI-Powered-Business-Analytics-Agent",
  demo:
    "https://ai-powered-business-analytics-agent.streamlit.app/",
},

  {
  id: "telco-churn",
  name: "Telco Customer Churn",
  category: "Machine Learning / MLOps",
  description:
    "An end-to-end customer churn prediction platform that combines machine learning, MLflow experiment tracking, Dockerized deployment, and a Streamlit dashboard to identify high-risk customers and estimate potential revenue savings.",
  stack: [
    "Python",
    "Scikit-learn",
    "XGBoost",
    "Random Forest",
    "MLflow",
    "Docker",
    "Streamlit",
    "Pandas",
  ],
  status: "COMPLETED",
  github:
    "https://github.com/mihir-padekar/telco-churn-mlflow-docker-streamlit",
},

  {
  id: "bank-churn-api",
  name: "Bank Churn Prediction API",
  category: "ML / Cloud Deployment",
  description:
    "An end-to-end bank customer churn prediction system using a TensorFlow ANN, Snowflake for data storage and prediction logging, FastAPI for serving predictions, and AWS EC2 for deployment.",
  stack: [
    "Python",
    "TensorFlow",
    "ANN",
    "Scikit-learn",
    "FastAPI",
    "Snowflake",
    "AWS EC2",
    "Boto3",
  ],
  status: "COMPLETED",
  github:
    "https://github.com/mihir-padekar/Bank-Churn-FastAPI-AWS-Snowflake",
},
]

function ProjectsWindow() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null)

  return (
    <div className="projects-app">

      {/* ADDRESS BAR */}

      <div className="projects-address-bar">

        <span className="address-label">
          Address
        </span>

        <div className="address-input">
          C:\MIHIR\Projects
        </div>

        <button className="address-go">
          Go
        </button>

      </div>


      {/* TOOLBAR */}

      <div className="projects-toolbar">

        <button
          onClick={() =>
            setSelectedProject(null)
          }
        >
          ← Back
        </button>

        <button>
          ↑ Up
        </button>

        <div className="toolbar-divider" />

        <button>
          🔍 Find
        </button>

        <button>
          ☷ View
        </button>

      </div>


      {/* MAIN FILE AREA */}

      <div className="projects-main">

        <div className="projects-file-list">

          <div className="file-list-header">
  <span></span>
  <span>Name</span>
  <span>Type</span>
</div>


          {projects.map((project) => (
            <button
              key={project.id}
              className={
                selectedProject?.id === project.id
                  ? "project-file selected"
                  : "project-file"
              }
              onClick={() =>
                setSelectedProject(project)
              }
            >

              <span className="project-folder">
                📁
              </span>

              <span className="project-name">
                {project.name}
              </span>

              <span className="project-type">
                Folder
              </span>

            </button>
          ))}

        </div>


        {/* DETAILS PANEL */}

        <div className="project-details">

          {!selectedProject ? (
            <div className="project-empty">

              <div className="empty-icon">
                📁
              </div>

              <h3>
                My Projects
              </h3>

              <p>
                Select a project to view its
                details.
              </p>

            </div>
          ) : (
            <div className="project-info">

              <div className="project-info-header">

                <span className="large-folder">
                  📁
                </span>

                <div>
                  <h2>
                    {selectedProject.name}
                  </h2>

                  <span>
                    {selectedProject.category}
                  </span>
                </div>

              </div>


              <div className="project-info-divider" />


              <div className="project-field">

                <strong>
                  DESCRIPTION
                </strong>

                <p>
                  {selectedProject.description}
                </p>

              </div>


              <div className="project-field">

                <strong>
                  TECHNOLOGY
                </strong>

                <div className="tech-list">

                  {selectedProject.stack.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>


              <div className="project-field">

                <strong>
                  STATUS
                </strong>

                <p className="project-status">
                  ● {selectedProject.status}
                </p>

              </div>
                <div className="project-actions">
  <button
    onClick={() =>
      window.open(
        selectedProject.github,
        "_blank",
        "noopener,noreferrer"
      )
    }
  >
    Open GitHub
  </button>

  {selectedProject.demo && (
    <button
      onClick={() =>
        window.open(
          selectedProject.demo,
          "_blank",
          "noopener,noreferrer"
        )
      }
    >
      Live Demo
    </button>
  )}
</div>
            </div>
          )}

        </div>

      </div>


      {/* STATUS BAR */}

      <div className="projects-status">

        <span>
          {projects.length} objects
        </span>

        <span>
          {selectedProject
            ? `Selected: ${selectedProject.name}`
            : "No selection"}
        </span>

      </div>

    </div>
  )
}

export default ProjectsWindow