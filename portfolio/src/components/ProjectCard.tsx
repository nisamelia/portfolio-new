interface Props {
  title: string
  description: string
  onClick: () => void
}

const ProjectCard = ({ title, description, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="bg-zinc-900 p-6 rounded-xl cursor-pointer hover:bg-zinc-800 transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

export default ProjectCard