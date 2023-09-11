import React from 'react'
import "../css/FirstBlock.css";
import threedots from '../assets/three-dots.png'
import pic1 from '../assets/pic4.jpg'
import pic2 from '../assets/profile-pic.jpg'
import pic3 from '../assets/pic6-2.jpg'
import leetcode from '../assets/linkedin.png'
import'../css/Navbar.css'

function FirstBlock() {
  return (
    <div className='firstblock'>
      <div className='firstblock-1'>
        <div className='firstblock-1-text'>
          <span>About O(logn) results (0.46 seconds)</span>
          <br/>
          <br/>
          <span id='name'>Aryan Seth</span>
          <br/>
          <span>Showing results for Aryan Seth</span>
          <img src={threedots} alt='three-dots'></img>
        </div>
        <div className='firstblock-1-buttons'>
                <a href="https://github.com/aryan-prog?tab=repositories" target='_blank' rel='noopener noreferrer'> <button  id='accessButtons'>Github</button> </a>
                <a href="https://www.linkedin.com/in/aryan-seth-9190b1196/" target='_blank' rel='noopener noreferrer'><button id='accessButtons'>Linkedin</button> </a>
                <a href="https://leetcode.com/mandelakalam12364/" target='_blank' rel='noopener noreferrer'><button id='accessButtons'>Leetcode</button> </a>
                <a href="tel:+918299821151" target='_blank' rel='noopener noreferrer'><button id='accessButtons'>Contact</button> </a>
                <a href="mailto:seth.aryan605@gmail.com" target='_blank' rel='noopener noreferrer'><button id='accessButtons'>Mail</button> </a>
        </div>
      </div>
      <div className='firstblock-2'>
      <div className='photos-div'>
          <img id='photos-1' src={pic1} alt='photos'></img>
          <img id='photos-2' src={pic2} alt='photos'></img>
          <img id='photos-3' src={pic3} alt='photos'></img>
      </div>
      <div className='info-div-1'>
        <span>About</span>
          <p>A dynamic B.Tech graduate with fervor for Software Development & Javscript. LeetCode T-shirt awardee, constant learner, and tech enthusiast. 
          Guided by curiosity, driven by challenges. Grateful for unwavering family & friend support. Ready to shape the digital world. 
          🚀👨‍💻📚</p>
      </div>
      <div className='info-div-2'>
        <div className='info-div-2-top'>
          <div className='age'> 
          <div id='age-span'>Age</div>
          <br/>
          <div id='years-span'>23 years</div>
          </div>
          <div className='skills-div'>
          <div id='age-span'>Skills</div>
          <br/>
          <div id='skills-span'>C/C++, DSA, HTML, CSS, Javascript, ReactJs, Firebase, JAVA</div>
          </div>
        </div>
        <div className='info-div-2-bottom'>
        <a href="https://www.linkedin.com/in/aryan-seth-9190b1196/" target='_blank' rel='noopener noreferrer'><img id='link2'src={leetcode} alt=''></img></a>
      </div>
      </div>
    </div>
    </div>
  )
}
export default FirstBlock;
