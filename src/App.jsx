import { Dock, Home, Navbar, Welcome } from "#components"
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Gallery } from "#windows"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />


      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Gallery />
      <Contact />
      <Home />
    </main>
  )
}

export default App
