import React from 'react'
import "../css/Experiences.css";

function Experiences(props) {
  return (
    <div className='experiences-body' id='experiences'>
      <div className='company'>
        <img src={props.compLogo} alt='Company Logo'></img>
        <div className='name-and-link'>
          <span>{props.companyName}</span>
          <span id="link">{props.link}</span>
        </div>
      </div>
      <div className='position'>
        <a href={props.link} target='_blank' rel='noopener noreferrer'>{props.positionName}{props.duration}</a>
      </div>
      <p id='description'>{props.description}</p>

    </div>
  )
}

export default Experiences
