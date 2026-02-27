import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Nisa Amelia</h1>
        <div className="space-x-6 text-gray-300">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar