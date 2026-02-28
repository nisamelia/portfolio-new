interface Props {
  title: string
  description: string
  tech?: string[]
  image?: string
  onClose: () => void
}

const ProjectModal = ({
  title,
  description,
  tech,
  image,
  onClose
}: Props) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">

      {/* Modal Container */}
      <div className="relative bg-zinc-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto modal-scroll shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        <div className="p-8">

          {/* Title */}
          <h3 className="text-3xl font-bold mb-6">{title}</h3>

          {/* Image Section */}
          {image && (
            <div className="mb-6 flex justify-center bg-zinc-900/90 rounded-xl p-4">
              <img
                src={image}
                alt={title}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>
          )}

          {/* Description */}
          <p className="text-gray-400 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Tech Stack */}
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

        </div>
      </div>
    </div>
  )
}

export default ProjectModal