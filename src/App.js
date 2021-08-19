import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Experience from "./components/experience/Experience"
import Contact from "./components/contact/Contact"
import "./app.scss"
import {  useState } from "react"
import Menu from "./components/menu/Menu"


export default function App() {

  const [menuOpen, setMenuOpen]= useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className= "sections">
        <Intro />
        <About/>
        <Skills />
        <Projects />
        <Experience />
        <Contact />

      </div>
    </div>
      
  );
}


