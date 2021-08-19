import "./Navbar.scss"
import {GitHub, Email } from "@material-ui/icons"

export default function Navbar({ menuOpen,setMenuOpen }) {
  return(
    <div className= { "navbar " + (menuOpen && "active")}>
      <div className ="wrapper">
        <div className ="left">
          <a href ="#intro" className="logo" >Joan</a>
          <div className="itemContainer">
            <Email className="icon"/>
            <span>joan.kalanzi1@gmail.com</span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon"/>
            <span>https://github.com/JoanKalanzi</span>
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
