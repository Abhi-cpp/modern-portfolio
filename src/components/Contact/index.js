import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const subject = e.target.subject.value
    const message = e.target.message.value
    const obj = {
      name, email, subject, message
    }
    emailjs
      .send(process.env.REACT_APP_SERVICEID, 'template_5ghubx9', obj, process.env.REACT_APP_PUBLICKEY)
      .then(
        (response) => {
          console.log('SUCCESS!', response)
          window.location.reload(false)
          alert('Message successfully sent!')
        },
        (erro) => {
          console.log('FAILED...', erro)
          alert('Failed to send the message, please try again')
        }
      )

  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            If you have any questions or want to contact me, please fill the
            form below. I will try to reply as soon as possible. I am currently
            looking for a job as a Software Developer. I am also open to any
            freelance work and internship opportunities.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>

        </div>
        {/* <div className="info-map">
          <a href="/portfolio/1/Abhishek_Kumar.pdf" download>
            <button style={
              {
                backgroundColor: "yellow",
                color: "black",
                borderRadius: "7px",
                padding: "7px",
                border: "none",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold"
              }
            } className="flat-button" >Download Resume</button>
          </a> <br />
          <br />
          <span>abhishekkumar986874@gmail.com</span>
        </div> */}
        <div className="map-wrap">
          <embed src="/portfolio/1/Abhishek_Kumar.pdf" className='pdf' />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
