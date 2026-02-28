import GalleryCard from "../components/GalleryCard"
import { galleryData } from "../data/data"

const GallerySection = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">

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

    </section>
  )
}

export default GallerySection