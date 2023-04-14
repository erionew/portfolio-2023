import React from 'react'
import '../stylesheets/nav.css'
import { Link } from 'react-router-dom'

export default function Nav({homeLink, skillsLink, projectsLink, contactLink}) {
    const handleMenuClick = (e) => {
        document.querySelector('.mobile--nav__links').classList.toggle('active')
    }
    const handleLinkClick = (e) => {
      document.querySelector('.mobile--nav__links').classList.toggle('active')
    }
    return (
    <nav className='container--nav'>
      <div className='mobile-nav--container'>
        <div className='mobile-nav'>
            <button onClick={handleMenuClick}><i className="las la-bars"></i></button>
            <p className='nav__name'>erione white</p>
        </div>
        <ul className='mobile--nav__links nav-links__ul'>
            <li className='nav-links__li'><Link onClick={handleLinkClick} to={homeLink} className='nav-links__link'>Home</Link></li>
            <li className='nav-links__li'><Link onClick={handleLinkClick} to={skillsLink} className='nav-links__link'>Skills</Link></li>
            <li className='nav-links__li'><Link onClick={handleLinkClick} to={projectsLink} className='nav-links__link'>Projects</Link></li>
            <li className='nav-links__li'><Link onClick={handleLinkClick} to={contactLink} className='nav-links__link'>Contact</Link></li>
        </ul>
      </div>

      <div className='desktop-nav--container'>
        <ul className='desktop--nav_links nav-links__ul'>
            <li className='nav-links__li'><Link to={homeLink} className='nav-links__link'>Home</Link></li>
            <li className='nav-links__li'><Link to={skillsLink} className='nav-links__link'>Skills</Link></li>
            <li className='nav-links__li'><Link to={projectsLink} className='nav-links__link'>Projects</Link></li>
            <li className='nav-links__li'><Link to={contactLink} className='nav-links__link'>Contact</Link></li>
        </ul>
        <p className='nav__name'>erione white</p>
      </div>
    </nav>
  )
}
