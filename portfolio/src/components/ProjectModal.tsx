interface Props {
  title: string
  description: string
  tech?: string[]
  onClose: () => void
}

const ProjectModal = ({ title, description, tech, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-8 rounded-xl max-w-lg w-full">

        <h3 className="text-2xl font-bold mb-4">{title}</h3>

        <p className="text-gray-400 mb-6">{description}</p>

        {/* ✅ Tech Stack Section */}
        {tech && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item, i) => (
              <span
                key={i}
                className="bg-zinc-800 text-sm px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          Close
        </button>

      </div>
    </div>
  )
}

export default ProjectModal