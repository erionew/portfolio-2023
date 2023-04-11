import React from 'react'

export default function Nav({homeLink, skillsLink, projectsLink, contactLink}) {
  return (
    <nav className='nav--container'>
      <ul className='nav__ul'>
        <li className='nav__li'><a href={homeLink} className='nav__link'>Home</a></li>
        <li className='nav__li'><a href={skillsLink} className='nav__link'>Skills</a></li>
        <li className='nav__li'><a href={projectsLink} className='nav__link'>Projects</a></li>
        <li className='nav__li'><a href={contactLink} className='nav__link'>Contact</a></li>
      </ul>
      <p>erione white</p>
    </nav>
  )
}
