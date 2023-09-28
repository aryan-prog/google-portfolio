import React from 'react'
import "../css/ProfileBlock.css";
import pic from "../assets/profile-pic.jpg";
import Qualifications from './Qualifications';
import Skills from './Skills';
import ProfileAccount from './ProfileAccount';
import Volunteer from './Volunteer';

function ProfileBlock() {
  return (
    <div className='profile-body'>
      <div className='profileDiv' id='skills'>
        <img src={pic} alt='Profile Pic'></img>
        <div className='nameDiv'>
          <span id='name'>Aryan Seth</span>
          <br/>
          <span id='designation'>Software Engineer</span>
        </div>
      </div>
      <Qualifications/>
      <Skills/>
      <ProfileAccount/>
      <Volunteer/>
    </div>
  )
}

export default ProfileBlock
