import React, { useState } from 'react'

export default function Project({img, name, liveLink, repoLink}) {
    function showInfo(e){
        e.target.style.opacity = 1
    }

    function hideInfo(e){
        e.target.style.opacity = 0
    }


  return (
    <div className='container--project'>
      <img className='project__img' src={img}></img>
      <div onMouseOver={showInfo} onMouseLeave={hideInfo} className='project__info'>
        <h2 className='project__name'><strong>{name}</strong></h2>
        <div className='project__link-container'>
            <a href={liveLink} className='project__link_container__link' target="_blank">Live Demo</a>
            <a href={repoLink} className='project__link_container__link' target="_blank">Source Code</a>
        </div>
      </div>
    </div>
  )
}
