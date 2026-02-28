import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const descriptions = [
  "Transforming complex geospatial data into actionable insights through spatial analysis and remote sensing.",
  "Mapping patterns, detecting change, and building intelligent WebGIS applications for decision-making.",
  "Turning satellite imagery and messy spatial datasets into structured geospatial intelligence."
]

const Home = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % descriptions.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex items-center justify-center min-h-screen text-center px-6 overflow-hidden">

      {/* 🌍 Animated Geography Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-[600px] h-[600px] border border-white rounded-full animate-spin-slow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[400px] h-[400px] border border-white rounded-full animate-pulse left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-6">
          GIS Analyst & WebGIS Developer
        </h1>

        {/* ✨ Animated Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 transition-opacity duration-700">
          {descriptions[index]}
        </p>

        <Link
          to="/projects"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          View My Work
        </Link>
      </div>
    </section>
  )
}

export default Home