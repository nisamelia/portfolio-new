const Home = () => {
  return (
    <section className="flex items-center justify-center min-h-screen text-center px-6">
      <div>
        <h1 className="text-5xl font-bold mb-6">
          GIS Analyst & WebGIS Developer
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Transforming complex geospatial data into actionable insights
          through remote sensing, spatial analysis, and interactive mapping applications.
        </p>
        <a
          href="/projects"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  )
}

export default Home