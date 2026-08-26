export interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: "Applsip Technologies",
    role: "Software Engineer Intern",
    period: "Sept 25 - Feb 26",
    description:
      "Working on software development with a focus on building and maintaining production applications.",
    technologies: ["React", "NLP", "Python"],
  },
]