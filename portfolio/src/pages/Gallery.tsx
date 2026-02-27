const Gallery = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 h-48 rounded-xl"></div>
        <div className="bg-zinc-900 h-48 rounded-xl"></div>
        <div className="bg-zinc-900 h-48 rounded-xl"></div>
      </div>
    </section>
  )
}

export default Gallery