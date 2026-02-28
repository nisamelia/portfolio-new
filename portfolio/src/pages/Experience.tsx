import { experiences } from "../data/data"

const Experience = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>

      <div className="relative border-l border-zinc-700 ml-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="mb-12 ml-6 relative">
            
            {/* Timeline Dot */}
            <span className="absolute -left-[9px] w-4 h-4 bg-white rounded-full"></span>

            <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
              
              {/* Role */}
              <h3 className="text-xl font-semibold">
                {exp.role}
              </h3>

              {/* Company + Period */}
              <p className="text-zinc-400 mt-3 text-sm">
                {exp.company} · {exp.period}
              </p>

              {/* Tools Pills */}
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Description */}
              <ul className="mt-4 space-y-2 text-zinc-300 text-sm leading-relaxed">
                {exp.description.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience