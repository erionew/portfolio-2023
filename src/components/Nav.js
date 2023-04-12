import {React, useState} from 'react'
import '../stylesheets/nav.css'

export default function Nav({homeLink, skillsLink, projectsLink, contactLink}) {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenuClick = (e) => {
        document.querySelector('.mobile--nav__links').classList.toggle('active')
    }
    
    return (
    <nav className='nav--container'>
      <div className='mobile-nav--container'>
        <div className='mobile-nav'>
            <button onClick={handleMenuClick}><i className="las la-bars"></i></button>
            
        </div>
        <ul className='mobile--nav__links nav-links__ul'>
            <li className='nav-links__li'><a href={homeLink} className='nav-links__link'>Home</a></li>
            <li className='nav-links__li'><a href={skillsLink} className='nav-links__link'>Skills</a></li>
            <li className='nav-links__li'><a href={projectsLink} className='nav-links__link'>Projects</a></li>
            <li className='nav-links__li'><a href={contactLink} className='nav-links__link'>Contact</a></li>
        </ul>
      </div>

      <p className='nav__name'>erione white</p>
    </nav>
  )
}
