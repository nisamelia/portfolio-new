import { useState, useEffect, useRef } from 'react'

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
  const [shouldLoad, setShouldLoad] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Intersection Observer untuk lazy load
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '50px' } // load 50px sebelum visible
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className="group cursor-pointer bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-56 bg-zinc-800">
        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-linear-to-br from-zinc-800 via-zinc-700 to-zinc-800 animate-pulse">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-zinc-600/20 to-transparent animate-shimmer" />
          </div>
        )}
        
        {/* Image - hanya load kalau sudah visible */}
        {shouldLoad && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
        )}
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