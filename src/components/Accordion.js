import React,{useState} from 'react'
import '../css/Accordion.css'
import { questions } from '../api'
import MyAccordion from './MyAccordion';
import threeDots from '../assets/three-dots.png'

function Accordion() {
    const [data,setData] = useState(questions);
  return (
    <div className='accordion'>
    <section>
        <div className='acc-div'>
        <span>People also ask</span>
        <img src={threeDots} alt=''></img>
        </div>
      {
        data.map((curElem) =>  {
            return <MyAccordion key={curElem.id} {...curElem}/>;
        } )   
    }
    </section>
    </div>
  )
}

export default Accordion
