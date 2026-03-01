import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

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
    <section className="relative flex items-center justify-center min-h-screen text-center px-6 overflow-hidden bg-black">

      {/* 🌍 Geographic Grid Background - Latitude/Longitude Lines */}
      <div className="absolute inset-0 opacity-10">
        {/* Vertical longitude lines */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-[1px] bg-white"
            style={{ left: `${(i + 1) * 8}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Horizontal latitude lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full h-[1px] bg-white"
            style={{ top: `${(i + 1) * 12}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      {/* 🗺️ Orbiting Circles (Globe representation) */}
      <div className="absolute inset-0 opacity-15">
        <motion.div 
          className="absolute w-[600px] h-[600px] border border-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[400px] h-[400px] border border-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Elliptical orbit (like satellite path) */}
        <motion.div 
          className="absolute w-[500px] h-[300px] border border-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transformOrigin: "center" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 📍 Floating Location Pins */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`pin-${i}`}
          className="absolute w-3 h-3 bg-white rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.3, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.5 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* 🛰️ Moving Satellite */}
      <motion.div
        className="absolute w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50"
        animate={{
          x: ["20vw", "80vw"],
          y: ["10vh", "30vh", "10vh"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          GIS Analyst & WebGIS Developer
        </motion.h1>

        {/* ✨ Smooth Animated Description */}
        <div className="relative h-28 mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              className="absolute inset-x-0 text-gray-400 text-lg max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6 }}
            >
              {descriptions[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress indicator */}
        <div className="flex gap-2 justify-center mb-8">
          {descriptions.map((_, i) => (
            <motion.div
              key={i}
              className="h-1 w-12 bg-gray-800 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: i === index ? "100%" : "0%" }}
                transition={{ duration: 4, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Home