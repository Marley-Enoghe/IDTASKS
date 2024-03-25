import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetter"
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  
  useEffect(() => {
    let timeoutid = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutid)
    }
  }, [])

    return (
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a self-taught web developer driven by an insatiable curiosity
            for all things related to technology and problem-solving. As a web
            developer, I have embarked on an incredible journey of continuous
            learning and growth, constantly pushing myself to explore new
            frontiers in the digital realm.
          </p>
          <p>
            One of my greatest strengths lies in my ability to approach problems
            with a creative mindset. I relish in the opportunity to analyze,
            dissect, and strategize the best course of action to overcome
            obstacles and find innovative solutions. I believe that effective
            problem-solving is not just about technical know-how; it requires
            critical thinking, adaptability, and a keen attention to detail.
          </p>
          <p>
            In addition to my technical skills, I pride myself on my passion for
            learning. The field of web development is ever-evolving, and I am
            committed to staying at the forefront of the industry by
            continuously expanding my knowledge and exploring new technologies.
            Whether it's diving into new frameworks or experimenting with
            emerging tools, I am always ready to embrace the challenge of
            mastering the next big thing.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSass} color="#1E3050" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default About 