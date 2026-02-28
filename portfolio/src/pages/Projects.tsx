import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectModal from "../components/ProjectModal"
import { projects } from "../data/data"
import type { Project, Category } from "../types/types"

const categories: Category[] = [
  "All",
  "Data Science",
  "Web and Application",
  "GIS and Remote Sensing",
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("All")

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        )

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">

      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          title={selectedProject.title}
          description={selectedProject.description}
          image={selectedProject.image}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects