import GalleryCard from "../components/GalleryCard"
import { galleryData } from "../data/data"

const GallerySection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl font-bold mb-10 text-white">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
              date={item.date}
              onClick={() => console.log(item.title)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default GallerySection