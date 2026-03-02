import { Mail, Linkedin, Github } from "lucide-react"

const About = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        
        {/* Photo */}
        <div className="flex justify-center">
          <img
            src="/images/photo/self-potrait.jpg"
            alt="Nisa Amelia"
            className="w-56 h-56 object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Content */}
        <div className="md:col-span-2">
          
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-gray-500 mb-6">
            GIS Graduate • Spatial Data Enthusiast
          </p>

          {/* Summary */}
          <p className="text-gray-400 leading-relaxed mb-4">
            I am a <span className="text-white font-medium">GIS graduate from UGM </span> 
            with experience in 
            <span className="text-white font-medium"> remote sensing</span>, 
            <span className="text-white font-medium"> land use mapping</span>, 
            <span className="text-white font-medium"> spatial data processing</span>, and 
            <span className="text-white font-medium"> geospatial automation</span>.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Focused on 
            <span className="text-white font-medium"> POI validation</span>, 
            <span className="text-white font-medium"> geocoding</span>, and 
            <span className="text-white font-medium"> geospatial data engineering</span>, 
            transforming unstructured datasets into reliable spatial insights.
          </p>

          {/* Interests */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-white mb-4">
              Core Interests
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              <p className="text-gray-400">• <span className="text-white">Cartography</span></p>
              <p className="text-gray-400">• <span className="text-white">Spatial Modeling</span></p>
              <p className="text-gray-400">• <span className="text-white">GIS Programming</span></p>
              <p className="text-gray-400">• <span className="text-white">Geospatial Data Engineering</span></p>
              <p className="text-gray-400">• <span className="text-white">WebGIS Development</span></p>
            </div>
          </div>

          {/* Highlighted Contact Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white font-semibold mb-4 tracking-wide">
              Find me on
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="mailto:nisaamelia952@gmail.com"
                className="flex items-center gap-3 px-4 py-2 rounded-lg 
                           bg-white/5 hover:bg-white/10 
                           text-gray-300 hover:text-white 
                           transition"
              >
                <Mail size={20} />
                <span className="font-medium">Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nisa-amelia31/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-lg 
                           bg-white/5 hover:bg-white/10 
                           text-gray-300 hover:text-white 
                           transition"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href="https://github.com/nisamelia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-lg 
                           bg-white/5 hover:bg-white/10 
                           text-gray-300 hover:text-white 
                           transition"
              >
                <Github size={20} />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About