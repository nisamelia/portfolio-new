import { useState, useEffect, useRef } from 'react'

interface Props {
  title: string
  description: string
  images: string[]
  tools: string[]
  onClick: () => void
}

const MAX_DESCRIPTION_LENGTH = 120
const MAX_VISIBLE_TAGS = 3

const ProjectCard = ({
  title,
  description,
  images,
  tools,
  onClick
}: Props) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const visibleTags = tools.slice(0, MAX_VISIBLE_TAGS)
  const remainingTags = tools.slice(MAX_VISIBLE_TAGS)

  const isLong = description.length > MAX_DESCRIPTION_LENGTH
  const truncated = isLong
    ? description.slice(0, MAX_DESCRIPTION_LENGTH)
    : description

  const previewImage = images?.[0]

  // Intersection Observer untuk lazy load
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' } // load 100px sebelum visible
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
      className="
        group cursor-pointer
        bg-zinc-900
        rounded-2xl
        overflow-hidden
        border border-zinc-800
        shadow-lg
        hover:shadow-2xl
        transition-all duration-300
        hover:-translate-y-1
        hover:border-zinc-600
      "
    >
      {/* Image Preview */}
      {previewImage && (
        <div className="relative overflow-hidden h-52 bg-zinc-800">
          {/* Loading Skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-800 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-600/20 to-transparent animate-shimmer" />
            </div>
          )}

          {/* Actual Image */}
          {shouldLoad && (
            <>
              <img
                src={previewImage}
                alt={title}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                className={`
                  w-full h-full object-cover
                  transition-all duration-700
                  group-hover:scale-105
                  ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </>
          )}
        </div>
      )}

      <div className="p-6">
        {/* Title */}
        <h3 className="
          text-xl font-semibold mb-4
          text-white
          transition-colors
          group-hover:text-zinc-200
        ">
          {title}
        </h3>

        {/* Tags — White Glass Style */}
        <div className="flex flex-wrap gap-2 mb-5">
          {visibleTags.map((tool, index) => (
            <span
              key={index}
              className="
                px-3 py-1 text-xs font-medium
                bg-white/5
                text-white/80
                border border-white/10
                rounded-full
                backdrop-blur-sm
                transition-all
                group-hover:bg-white/10
              "
            >
              {tool}
            </span>
          ))}

          {remainingTags.length > 0 && (
            <div className="relative group/tag">
              <span
                className="
                  px-3 py-1 text-xs font-medium
                  bg-white/5
                  text-white/60
                  border border-white/10
                  rounded-full
                  cursor-help
                "
              >
                +{remainingTags.length}
              </span>

              {/* Tooltip */}
              <div
                className="
                  absolute hidden group-hover/tag:block
                  top-9 left-0
                  bg-zinc-900 border border-zinc-700
                  text-xs text-zinc-300
                  px-3 py-2
                  rounded-lg
                  shadow-xl
                  whitespace-nowrap
                  z-20
                  pointer-events-none
                "
              >
                {remainingTags.join(" • ")}
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed">
          {truncated}
          {isLong && (
            <>
              {"... "}
              <span className="text-white/80 font-medium">
                more
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard