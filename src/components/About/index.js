import { useEffect, useState } from 'react'
import {
  faNodeJs,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import cpp from '../../assets/images/cpp.svg'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
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
            I am a passionate and dedicated BTech student at Bharati Vidyapeeth's
            College of Engineering in New Delhi.
            I am passionate about technology and aim to become a successful software engineer.
          </p>
          <p align="LEFT">
            I am particularly drawn to the exciting world of competitive programming, which I find both thrilling and fulfilling.
            Through my dedication and hard work,I secured a global rank of 136 in TCS CodeVita programming competition,
            which attracted over 100,000 participants worldwide.
          </p>
          <p>
            I also have skills in web development. Currently, I am actively working on CodeCast,
            a collaborative code editor project that showcases my ability to create innovative solutions.
          </p>
          <p align="LEFT">
            Furthermore, I hold the position of Tech-head at the Computer Society of India (CSI),
            where I demonstrate my leadership skills and deep understanding of technology.

          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={cpp} height="100px" alt="C++" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNodeJs} color="#8CC84B" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
