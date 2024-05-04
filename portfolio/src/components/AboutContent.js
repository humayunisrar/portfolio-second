
import { Link } from "react-router-dom"
import "./AboutContent.css"
import sleet from "../assets/sleet.jpg"
import senior from "../assets/senior.jpg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>ABOUT ME</h1>
        <p>Hi! I'm a web developer based in New York City. I have a passion for web development and love to create websites that are both beautiful and functional. I have experience with HTML, CSS, JavaScript, React, and Node.js. I'm always looking to learn new technologies and improve my skills. In my free time, I enjoy reading, hiking, and playing video games.</p>
        <Link to="/contact" >
            <button className="btn" style={{ marginTop: '25px' }}>Contact</button>
        </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={senior} className="img" alt="about"/>

                </div>
                <div className="img-stack bottom">
                    <img src={sleet} className="img" alt="about"/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent