import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectModal from "../components/ProjectModal"
import { projects } from "../data/data"

const Projects = () => {
  const [selected, setSelected] = useState<null | {
    id: number
    title: string
    description: string
    image: string
  }>(null)

  // const projects = [
  //   {
  //     title: "Land Use Change Detection",
  //     description: "SMA analysis using Landsat in Google Earth Engine."
  //   },
  //   {
  //     title: "POI QC Automation Tool",
  //     description: "Python automation for cleaning and validating POI data."
  //   }
  // ]

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {selected && (
        <ProjectModal
          title={selected.title}
          description={selected.description}
          image={selected.image}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}

export default Projects