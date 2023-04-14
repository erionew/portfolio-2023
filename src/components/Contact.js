import React from 'react'
import '../stylesheets/contact.css'

export default function Contact() {
  return (
    <div className='container--contact page'>
      <h1><strong>My Contact Info</strong></h1>
      <div className='contact__info'>
        <i className="las la-envelope"></i>
        <a href = "mailto: erione.white@gmail.com">erione.white@gmail.com</a>
      </div>
      <div className='contact__info'>
        <i className="fa-brands fa-linkedin"></i>
        <a href='https://www.linkedin.com/in/erione-white-68a676262/'  target="_blank">Erione White</a>
      </div>
    </div>
  )
}
