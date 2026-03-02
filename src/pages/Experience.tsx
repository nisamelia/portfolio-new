import { experiences } from "../data/data"
import { Calendar, MapPin } from "lucide-react"

const Experience = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto bg-black">
      
      <h2 className="text-3xl font-bold mb-16 text-white tracking-tight">
        Experience
      </h2>

      <div className="relative ml-6">
        
        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-zinc-800"></div>

        {experiences.map((exp) => (
          <div key={exp.id} className="mb-14 ml-10 relative">

            {/* Timeline Dot */}
            <span className="absolute -left-[16px] top-6 w-6 h-6 
            bg-black border-4 border-white 
            rounded-full z-10"></span>

            {/* Card */}
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

              {/* Role */}
              <h3 className="text-xl font-semibold text-white">
                {exp.role}
              </h3>

              {/* Company */}
              <p className="text-zinc-300 text-sm font-medium mt-2">
                {exp.company}
              </p>

              {/* Location + Period */}
              <div className="flex flex-wrap items-center gap-3 mt-4">

                {/* Location Pill */}
                {exp.location && (
                  <span className="flex items-center gap-2 px-3 py-1 text-xs 
                  bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                )}

                {/* Period Pill */}
                <span className="flex items-center gap-2 px-3 py-1 text-xs 
                bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
                  <Calendar size={14} />
                  {exp.period}
                </span>

              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-6">
                {exp.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Description */}
              <ul className="mt-6 space-y-3 text-zinc-300 text-sm leading-relaxed">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-[6px] w-1.5 h-1.5 bg-white rounded-full"></span>
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