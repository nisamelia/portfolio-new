import { experiences } from "../data/data"

const Experience = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto bg-black">
      
      <h2 className="text-3xl font-bold mb-16 text-white tracking-tight">
        Experience
      </h2>

      <div className="relative ml-6">
        
        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-zinc-700"></div>

        {experiences.map((exp) => (
          <div key={exp.id} className="mb-14 ml-10 relative">

            {/* Timeline Dot */}
            <span className="absolute -left-[16px] top-3 w-6 h-6 
            bg-black border-4 border-white 
            rounded-full z-10"></span>

            {/* Card */}
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

              <h3 className="text-xl font-semibold text-white">
                {exp.role}
              </h3>

              <p className="text-zinc-400 mt-2 text-sm">
                {exp.company} · {exp.period}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {exp.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-3 text-zinc-300 text-sm leading-relaxed">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-white mt-[2px]">•</span>
                    <span>{item}</span>
                  </li>
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