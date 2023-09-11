import React from 'react'
import linkedin from '../assets/linkedin.png'
import '../css/ProfileAccount.css'
import github from '../assets/guthub.png'
import leetcode from '../assets/leetcode.png'
import mail from '../assets/gmail.png'

function ProfileAccount() {
  return (
    <div className='skills-body'>
        <div className='skills-heading'>Profile Links</div>
        <div className='skills-image'>
            <a href="https://www.linkedin.com/in/aryan-seth-9190b1196/" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={linkedin} alt='c programming language'></img></a>
            <a href="https://leetcode.com/mandelakalam12364/" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={leetcode} alt='cpp programming language'></img></a>
            <a href="https://github.com/aryan-prog?tab=repositories" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={github} alt='JAVA programming language'></img></a>
            <a href="mailto:seth.aryan605@gmail.com" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={mail} alt='HTML programming language'></img></a>
        </div>
      
    </div>
  )
}

export default ProfileAccount
