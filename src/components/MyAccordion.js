import React, {useState} from 'react';
import '../css/MyAccordion.css'
import up from '../assets/up.jpg'
import drop from '../assets/drop.jpg'

function MyAccordion({question, answer}) {
    const [show,setShow]= useState(false);
  return (
    <div className='drop-div' id='faq'>
    <div className='ques' onClick={()=> setShow(!show)}>
        <span>{question}</span>
        <img src={show ? up : drop} alt=''></img>
    </div>
      { show && <p className='answers'>{answer}</p> }
    </div>
  )
}

export default MyAccordion
