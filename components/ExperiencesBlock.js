import React, { useState } from 'react'
import Experiences from './Experiences'
import "../css/ExperiencesBlock.css";
import sfslogo from "../assets/sfs.jpg";
import lnmiit from "../assets/lnmiit.png";

function ExperiencesBlock() {
  const [info, setInfo] =useState(
    [
      {
        id:1,
        compLogo:sfslogo,
        companyName: "Start From Scratch",
        positionName:"Web Developer",
        duration: "  ( July 2021 - July 2022 )",
        description:"Collaborated on the creation of an interactive and dynamic website for SFS, incorporating modern web technologies to deliver a seamless user experience. Developed custom features, optimized performance, and ensured cross-browser compatibility. Contributed to enhancing the online presence of SFS, effectively engaging audiences and promoting their services.",
        link:"https://www.sfslive.com/"
      },
      {
        id:2,
        compLogo:lnmiit ,
        companyName:"LNMIIT, Jaipur",
        positionName:"Computer Networks Teaching Assistant" ,
        duration: "  ( Jan 2023 - Apr 2023 )",
        description:"Mentored and tutored a lab section of 80 engineering undergraduates to encourage learning and hone their programming skills. Worked closely with the professor to Grade and coach the students’ writtenassignments, approximately 60 each week. Streamlined discussion forums by building a total of 5 forums with separate subject threads to improve student communication.",
        link:"https://www.lnmiit.ac.in/"
      },
      {
        id:3,
        compLogo:lnmiit,
         companyName:"LNMIIT, Jaipur" ,
         positionName:"DSA Teaching Assistant", 
         duration: "  ( Apr 2022 - June 2022 )",
         description:"Implemented lesson plans independently for classrooms of over 180 students per week. Collaborated with the professor to devise and implement appropriate lessons aligning with the school’s teaching philosophy and mission.This included providing general support and 1-1 assistance for the children, helping students with their technical development and ocassional teaching.",
         link:"http://surl.li/jwkyc"
      },
      {
        id:4,
        compLogo:lnmiit ,
        companyName:"LNMIIT, Jaipur" ,
        positionName:"Computer Programming Teaching Assistant",
        duration: "  ( Dec 2021 - Mar 2022 )", 
        description:"Mentored a lab section of engineering undergraduates to encourage learning and hone their Computer Programming skills. This included providing general support and 1-1 assistance for the children." ,
        link:"http://surl.li/jwkys"
      }
    ]);
  return (
    <div className='exp'>
      {
        info.map((curElem) =>  {
            return (<Experiences 
            key={curElem.id} 
            compLogo={curElem.compLogo} 
            companyName={curElem.companyName}
            positionName={curElem.positionName}
            duration={curElem.duration}
            description={curElem.description}
            link={curElem.link}/>
            );
        } )   
    } 
    </div>
  )
}

export default ExperiencesBlock
