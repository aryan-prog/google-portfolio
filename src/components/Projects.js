import React from 'react'
import '../css/Projects.css'

function Projects(props) {
  return (
    <div className='project-body'>
      <span id='project-name'>{props.name}</span>
      <a href={props.link} target='_blank' rel='noopener noreferrer' id='project-link'>Know More</a>
      <p id='project-description'>{props.description}</p>
      <span id="bold">Tech Stack : </span>
      <span>{props.TechStack}</span>
    </div>
  )
}

export default Projects
