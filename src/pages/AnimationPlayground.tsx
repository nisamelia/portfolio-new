import { motion } from "framer-motion"
import { useState } from "react"

const AnimationPlayground = () => {
  const [activeDemo, setActiveDemo] = useState(0)

  const demos = [
    {
      name: "Topographic Lines",
      component: (
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full border-t border-white/20"
              style={{ top: `${i * 7}%` }}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )
    },
    {
      name: "Radar Scan",
      component: (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="absolute w-96 h-96 border-2 border-white/30 rounded-full"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="w-96 h-1 bg-gradient-to-r from-transparent via-white to-transparent origin-left"
            style={{ transformOrigin: "left center" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )
    },
    {
      name: "Hexagon Grid",
      component: (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const row = ((i / 5) | 0)
            const col = i % 5
            return (
              <motion.div
                key={i}
                className="absolute w-20 h-20 border border-white/20"
                style={{
                  left: `${col * 20}%`,
                  top: `${row * 25}%`,
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            )
          })}
        </div>
      )
    },
    {
      name: "Wave Pattern",
      component: (
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => {
            const phase = i * 0.15
            return (
              <motion.div
                key={i}
                className="absolute w-1 bg-white/30"
                style={{
                  left: `${i * 2.5}%`,
                  bottom: 0
                }}
                animate={{
                  height: ["20%", "50%", "20%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: phase,
                  ease: "easeInOut"
                }}
              />
            )
          })}
        </div>
      )
    },
    {
      name: "Particle Field",
      component: (
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => {
            const offsetX = (i * 37) % 100
            const offsetY = (i * 53) % 100
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${offsetX}%`,
                  top: `${offsetY}%`
                }}
                animate={{
                  x: [0, (i % 2 === 0 ? 50 : -50)],
                  y: [0, (i % 3 === 0 ? 50 : -50)],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 5 + (i % 3),
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )
          })}
        </div>
      )
    },
    {
      name: "Compass Rose",
      component: (
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-32 bg-white/30"
              style={{
                transformOrigin: "center",
                rotate: `${i * 45}deg`
              }}
              animate={{
                height: ["128px", "180px", "128px"],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
          <motion.div
            className="w-64 h-64 border-2 border-white/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )
    },
    {
      name: "Contour Map",
      component: (
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-white/20"
              style={{
                width: `${100 + i * 60}px`,
                height: `${80 + i * 50}px`,
                borderRadius: "50%"
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      )
    },
    {
      name: "GPS Signal",
      component: (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <motion.div className="w-4 h-4 bg-white rounded-full" />
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-white rounded-full"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ 
                  scale: [1, 3],
                  opacity: [0.8, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      name: "Data Stream",
      component: (
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-16 bg-gradient-to-b from-white to-transparent"
              style={{
                left: `${i * 10 + 5}%`,
              }}
              animate={{
                y: ["-100%", "100vh"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )
    },
    {
      name: "Grid Pulse",
      component: (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, row) => (
            <div key={row}>
              {[...Array(8)].map((_, col) => (
                <motion.div
                  key={`${row}-${col}`}
                  className="absolute w-12 h-12 border border-white/20"
                  style={{
                    left: `${col * 12.5}%`,
                    top: `${row * 16.66}%`
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    borderColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.2)"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (row + col) * 0.1
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      )
    },
    {
      name: "Satellite Orbit",
      component: (
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full"
              style={{
                offsetPath: `path('M 0 0 Q 200 -100 400 0 T 800 0')`,
                offsetDistance: "0%"
              }}
              animate={{
                offsetDistance: ["0%", "100%"]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
            />
          ))}
          <div className="w-96 h-96 border border-white/20 rounded-full" />
        </div>
      )
    },
    {
      name: "Coordinate Grid",
      component: (
        <div className="absolute inset-0">
          {/* Vertical lines */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute h-full w-px bg-white/20"
              style={{ left: `${i * 10}%` }}
              animate={{
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
          {/* Horizontal lines */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute w-full h-px bg-white/20"
              style={{ top: `${i * 10}%` }}
              animate={{
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto p-4">
          <h2 className="text-xl font-bold mb-4">Animation Previews - Geography Theme</h2>
          <div className="flex gap-2 flex-wrap">
            {demos.map((demo, i) => (
              <button
                key={i}
                onClick={() => setActiveDemo(i)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  activeDemo === i 
                    ? "bg-white text-black" 
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {demo.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="relative pt-32 min-h-screen overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          {demos[activeDemo].component}
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-[calc(100vh-8rem)]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{demos[activeDemo].name}</h1>
            <p className="text-gray-400">Geographic animation concept for portfolio</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimationPlayground