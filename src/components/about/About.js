import "./About.scss"
import { ExpandMore } from "@material-ui/icons"

export default function About() {
  return (
    <div className="about" id="about">
      <div class="custom-shape-divider-bottom-1629921459">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className="left">
        <div className="leftText">

          <h2>Who Is Joan ?</h2>
        </div>
        <div className="imgContainer">
          <img src="asserts/profile-picture.png" alt="Joan's profile img" />
        </div>
      </div>
      <div className="right">
        <h4>A curiosity-driven Front-End Developer with a background in Nursing.</h4>
        <p> I found my passion for programming during the pandemic when I initially decided to teach myself HTML, CSS and JavaScript before deciding to accelerate  my knowledge and partake in a bootcamp with <a href="https://generalassemb.ly/" target="_blank" rel="noreferrer" aria-label="open to Genereal Assembly.">Genereal Assembly.</a> </p>
        <p>Having graduated with a <a href="https://www.uwl.ac.uk/course/undergraduate/bnursing-adult-nursing-london" target="_blank" rel="noreferrer" aria-label="open to Nursing degree.">Nursing degree</a>, I have a strong passion in contributing back to society, my goal is to combine my web development skills and my knowledge in Nursing to build platforms for people  that can help tranform unstainable healthcare systmes into sustainable ones.</p>
        <p>Aside from web developing, I am happiest when I’m creating, learning and exploring new places in the worlds (unfortunately have to put a halt due to the pandemic). </p>
        <p>In my free time, you would find me cycling across london looking for the best green spaces to chill with friends and family ,  watching Anime on Netfilx (currently watching <a href="https://www.imdb.com/title/tt3398540/" target="_blank" rel="noreferrer" aria-label="open to HAIKYU!!.">HAIKYU!!</a>) , or caring for my 15 plant babies.</p>
        <div className="arrow">
          <a href="#skills">
            <ExpandMore style={{ fontSize: 100 }} />
          </a>
        </div>
      </div>

    </div>
  )
}
