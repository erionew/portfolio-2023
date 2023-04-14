import React, { useState } from 'react'

export default function Project({img, name, liveLink, repoLink}) {

  const [infoShown, setInforShown] = useState(false)

    const handleClick = (e) => {
        setInforShown(!infoShown)
        if(infoShown){
          if(e.target.className === 'project__info'){
            e.target.style.opacity = 1
          }
        } else {
          if(e.target.className === 'project__info'){
            e.target.style.opacity = 0
          }
        }
    }
    function showInfo(e){
      if(e.target.className == 'project__info'){
        e.target.style.opacity = 1
      }
    }
    function hideInfo(e){
        if(e.target.className == 'project__info'){
          e.target.style.opacity = 0
        }
    }
    

  return (
    <div className='container--project'>
      <img className='project__img' src={img} alt="website screenshot"></img>
      <div onClick={handleClick} onMouseOver={showInfo} onMouseLeave={hideInfo}className='project__info'>
        <h2 className='project__name'><strong>{name}</strong></h2>
        <div className='project__link-container'>
            <a href={liveLink} className='project__link_container__link' target="_blank">Live Demo</a>
            <a href={repoLink} className='project__link_container__link' target="_blank">Source Code</a>
        </div>
      </div>
    </div>
  )
}
