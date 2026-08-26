export interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: "E-Commerce Operations Agent",
    description:
      "An AI-powered operations assistant that helps users interact with e-commerce data and perform business operations through natural language.",
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "React",
    ],
    github: "#",
  },
  {
    title: "ML Production Pipeline",
    description:
      "An end-to-end machine learning system covering data validation, feature engineering, model training, experiment tracking, deployment, and monitoring.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "MLflow",
      "FastAPI",
      "Docker",
    ],
    github: "#",
  },
]