import React from 'react'
import '../stylesheets/skills.css'

export default function Skills() {

  return (
    <div className='container--skills page'>
      <h2>I make websites come to life with these skills, tools, and technologies.</h2>
        <div className='skills__icons'>
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      <h2>Here is what I'm learning right now: </h2>
        <div className='skills__icons'>
          <i className="fa-brands fa-python"></i>
        </div>

    </div>
  )
}