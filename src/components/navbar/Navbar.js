import "./Navbar.scss"
import {GitHub, Email, LinkedIn } from "@material-ui/icons"

export default function Navbar({ menuOpen,setMenuOpen }) {
  return(
    <div className= { "navbar " + (menuOpen && "active")}>
      <div className ="wrapper">
        <div className ="left">
          <a href ="#intro" className="logo" >Joan</a>
          <div className="itemContainer">
            
            <span><a href="joan.kalanzi1@gmail.com" target="_blank" rel="noreferrer" aria-label="Email."><Email className="icon" /></a></span>
          </div>
          <div className="itemContainer">
            
            <span><a href="https://github.com/JoanKalanzi" target="_blank" rel="noreferrer" aria-label="Email."><GitHub className="icon"/></a></span>
          </div>
          <div className="itemContainer">
            
            <span><a href="https://www.linkedin.com/in/joan-kalanzi-b53877207/" target="_blank" rel="noreferrer" aria-label="Email."><LinkedIn className="icon"/></a></span>
          </div>
        </div>
      
        <div className="right">
          <div className= "hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className ="line 1"></span>
          <span className ="line 2"></span>
          <span className ="line 3"></span>
          <span className ="line 4"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
