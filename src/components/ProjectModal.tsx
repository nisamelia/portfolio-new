import { useEffect } from "react"
import {
  Github,
  Globe,
  ExternalLink
} from "lucide-react"

interface ProjectLink {
  label: string
  url: string
  type: "github" | "streamlit" | "arcgis" | "gee" | "demo"
}

interface Props {
  title: string
  description: string
  tools: string[]
  images: string[]
  links?: ProjectLink[]
  onClose: () => void
}

const ProjectModal = ({
  title,
  description,
  tools,
  images,
  links,
  onClose
}: Props) => {

  const previewImage = images?.[0]

  const paragraphs = description
    .split("\n\n")
    .filter((p) => p.trim() !== "")

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEsc)

    return () => {
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEsc)
    }
  }, [onClose])

  const getIcon = (type: ProjectLink["type"]) => {
    switch (type) {
      case "github":
        return <Github size={16} />
      default:
        return <Globe size={16} />
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-zinc-900 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-800"
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-zinc-500 hover:text-white transition-colors text-2xl"
        >
          ✕
        </button>

        <div className="p-8 md:p-12">

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h3>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="
                  px-3 py-1 text-xs font-medium
                  bg-white/5 text-white/80
                  border border-white/10
                  rounded-full
                "
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Links */}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-10">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-4 py-2
                    text-sm font-medium
                    bg-white/5
                    text-white
                    border border-white/10
                    rounded-lg
                    hover:bg-white/10
                    transition-all
                  "
                >
                  {getIcon(link.type)}
                  {link.label}
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          )}

          {/* ===== CONTENT ===== */}
          <div className="grid md:grid-cols-5 gap-12 items-start">

            {/* Image 60% */}
            {previewImage && (
              <div className="md:col-span-3">
                <div className="bg-zinc-800/60 border border-zinc-700 rounded-2xl p-6">
                  <img
                    src={previewImage}
                    alt={title}
                    className="w-full max-h-[75vh] object-contain rounded-xl shadow-xl"
                  />
                </div>
              </div>
            )}

            {/* All text on right 40% */}
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-4">
                Project Overview
              </h4>

              <div className="text-zinc-400 leading-relaxed text-justify space-y-4">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectModal