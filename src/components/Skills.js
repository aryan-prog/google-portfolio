import React from 'react'
import '../css/Skills.css'
import c from '../assets/c.png'
import cpp from '../assets/c++.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
// import java from '../assets/java.png'
import html from '../assets/html.png'
import firebase from '../assets/Firebase.png'
import react from '../assets/react.jpg'
import redux from '../assets/redux.png'



function Skills() {
  return (
    <div className='skills-body'>
        <div className='skills-heading'>Skills Summary</div>
        <div className='skills-image'>
            <a href="https://www.w3schools.com/c/c_intro.php" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={c} alt='c programming language'></img></a>
            <a href="https://www.w3schools.com/cpp/cpp_intro.asp" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={cpp} alt='cpp programming language'></img></a>
            {/* <a href="https://www.javatpoint.com/java-tutorial" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={java} alt='JAVA programming language'></img></a> */}
            <a href="https://www.javatpoint.com/what-is-html" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={html} alt='HTML programming language'></img></a>
            <a href="https://www.w3schools.com/css/" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={css} alt='CSS programming language'></img></a>
            <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={js} alt='Javascript programming language'></img></a>
            <a href="https://legacy.reactjs.org/docs/getting-started.html" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={react} alt='React Library'></img></a>
            <a href="https://firebase.google.com/" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={firebase} alt='Firebase'></img></a>
            <a href="https://redux.js.org/" target='_blank' rel='noopener noreferrer'> <img id='skills-image-s' src={redux} alt='Redux'></img></a>
        </div>
      
    </div>
  )
}

export default Skills
