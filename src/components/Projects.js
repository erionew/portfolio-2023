import React from 'react'
import Project from './Project'
import '../stylesheets/projects.css'
import dictionaryImg from '../images/dictionaryapp.png'
import lawfirmImg from '../images/lawfirm.png'
import clockImg from '../images/clock.png'

export default function Projects() {
  return (
    <div className='container--projects page'>
      <Project img={dictionaryImg} name='Dictionary App' liveLink='https://erionew.github.io/dictionary-app/' repoLink='https://github.com/erionew/dictionary-app' />
      <Project img={lawfirmImg} name='Justice Law Firm Website' liveLink='https://erionew.github.io/law-firm-website/' repoLink='https://github.com/erionew/law-firm-website' />
      <Project img={clockImg} name='Live Clock App' liveLink='https://erionew.github.io/clock-app/' repoLink='https://github.com/erionew/clock-app' />
    </div>
  )
}
