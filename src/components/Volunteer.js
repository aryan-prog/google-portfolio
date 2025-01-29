import React from 'react'
import '../css/Volunteer.css'

function Volunteer() {

  const volunteerRoles = [
    { organization: "AC-SAC", role: "Student Representative" },
    { organization: "Debate Society, LNMIIT", role: "Vice President" },
    { organization: "Counselling and Guidance Cell, LNMIIT", role: "Associate Coordinator" },
    { organization: "Rendition(Drama Club), LNMIIT", role: "Creative Writer" }
  ];

  return (
    <div className='volunteer-div'>
    <div className='volunteer-heading'>Volunteer Experiences</div>
    <div className='volunteer-body'>
    {volunteerRoles.map((volunteer, index) => (
        <div key={index}>
          <span id='capital'>{volunteer.organization} : </span>
          <span>{volunteer.role}</span>
          <br />
        </div>
      ))}
      </div>
      </div>
  )
}

export default Volunteer
