interface GalleryCardProps {
  image: string
  title: string
  date: string
  onClick?: () => void
}

const GalleryCard = ({
  image,
  title,
  date,
  onClick
}: GalleryCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zinc-300 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-zinc-400">
          {date}
        </p>
      </div>
    </div>
  )
}

export default GalleryCard