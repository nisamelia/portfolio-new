import { Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import AnimationPlayground from "./pages/AnimationPlayground"

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/playground" element={<AnimationPlayground />} />
      </Routes>
    </div>
  )
}

export default App