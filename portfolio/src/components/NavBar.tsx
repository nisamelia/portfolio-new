import { NavLink } from "react-router-dom"

const Navbar = () => {
  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `
    relative transition-colors duration-300
    ${isActive ? "text-white" : "text-gray-400 hover:text-white"}
  `

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-white">
          Nisa Amelia
        </h1>

        <div className="space-x-6">
          <NavLink to="/" className={navItemClass}>Home</NavLink>
          <NavLink to="/about" className={navItemClass}>About</NavLink>
          <NavLink to="/projects" className={navItemClass}>Projects</NavLink>
          <NavLink to="/gallery" className={navItemClass}>Gallery</NavLink>
          <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar