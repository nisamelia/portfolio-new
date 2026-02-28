interface Props {
  title: string
  description: string
  image: string
  onClick: () => void
}

const ProjectCard = ({ title, description, image, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-zinc-300 transition-colors">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard