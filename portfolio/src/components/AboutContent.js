
import { Link } from "react-router-dom"
import "./AboutContent.css"
import sleet from "../assets/sleet.jpg"
import senior from "../assets/senior.jpg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>ABOUT ME</h1>
        <p>Currently in the process of pursuing my degree and excited about entering the world of web development. Although, relatively new to this field, I'm highly enthusiastic about learning and progressing.

I've been actively working with HTML, CSS, and WordPress. It's fascinating how these elements come together to create the websites we interact with daily. Lately, I've also started to explore Javascript & React.js, a library that allows for more interactive web applications. It's a challenge I'm embracing wholeheartedly.

Even though I'm still a student, I've managed to accumulate about a year's worth of experience in WordPress website development. This hands-on experience has taught me a lot about bringing ideas to life on the web.

I take pride in my ability to communicate effectively. Whether it's collaborating with teammates or discussing project details with clients, I believe that clear communication is essential in achieving successful outcomes.

I'm here with the intention to learn, grow, and contribute to the field of web development. If you're searching for someone who's eager to apply their academic knowledge, passionate about web development, and ready to take on new challenges, I'd be delighted to connect. Let's explore how my fresh perspective and enthusiasm can contribute to your projects.</p>
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