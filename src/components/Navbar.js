import React from 'react';
import googlelogo from '../assets/googlelogo.png';
import "../css/Navbar.css";
import searchIcon from '../assets/search-icon.png'
import voiceIcon from '../assets/voice-icon.png'
import cameraIcon from '../assets/camera-icon.png'
import launcher from '../assets/launcher.png'
import profile from '../assets/profile-pic.jpg'
import settings from '../assets/settings.png'


function Navbar() {
  return (
      <nav>
        <div className='searchArea'>
        <img className='google-logo' src={googlelogo} alt='Google'/>
        <div className='search-and-buttons'>
            <div className="searchBar">
                <input  type="text" placeholder="    Aryan Seth"></input>
                <span className='line'></span>
                <div className='afterSpan'> 
                    <img className='voiceIcon' src={voiceIcon} alt='Voice'></img>
                    <img className='cameraIcon' src={cameraIcon} alt='Camera'></img>
                    <img className='searchIcon' src={searchIcon} alt='Search'></img>
                </div>
            </div>
            <div className='accountLinkButtons'>
                <a href="#experiences"><button  id='linkButtons'>Work Experiences</button> </a>
                <a href="#skills"><button  id='linkButtons'>Skills</button> </a>
                <a href="#faq"><button  id='linkButtons'>FAQ</button> </a>
                <a href="#projects"><button  id='linkButtons'>Projects</button> </a>
                {/* <a href="https://www.linkedin.com/in/aryan-seth-9190b1196/" target='_blank' rel='noopener noreferrer'><button id='linkButtons'>Linkedin</button> </a>
                <a href="https://leetcode.com/mandelakalam12364/" target='_blank' rel='noopener noreferrer'><button id='linkButtons'>Leetcode</button> </a>
                <a href="tel:+918299821151" target='_blank' rel='noopener noreferrer'><button id='linkButtons'>Contact</button> </a>
                <a href="mailto:seth.aryan605@gmail.com" target='_blank' rel='noopener noreferrer'><button id='linkButtons'>Mail</button> </a> */}
            </div>
        </div>
          <div className='left-div'>
          <img src={settings} alt='Settings'></img>
          <img src={launcher} alt='Launcher'></img>
          <img id='profile' src={profile} alt='Profile Pic'></img>
        </div>
        </div>
      </nav>
      
  
  )
}

export default Navbar
