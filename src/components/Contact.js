import React from 'react'
import '../stylesheets/contact.css'
import { Fade } from 'react-awesome-reveal'

export default function Contact() {
  return (
    <div className='container--contact page'>
      <h1><strong>My Contact Info</strong></h1>
      <Fade delay='50'>
        <div className='contact__container--info'>
          <div className='contact__info'>
            <i className="las la-envelope"></i>
            <a href = "mailto: erione.white@gmail.com">erione.white@gmail.com</a>
          </div>
          <div className='contact__info'>
            <i className="fa-brands fa-linkedin"></i>
            <a href='https://www.linkedin.com/in/erione-white-68a676262/'  target='_blank'>Erione White</a>
          </div>
        </div>
      </Fade>
    </div>
  )
}
