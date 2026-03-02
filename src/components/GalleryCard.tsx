import { useState } from 'react'

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
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-zinc-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-56 bg-zinc-800 overflow-hidden">
        
        {/* Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
        )}

        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zinc-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-zinc-400">{date}</p>
      </div>
    </div>
  )
}

export default GalleryCard