import React from 'react'
import  './EducationStyle.css'
import edu from '../../assets/edu.webp'
const Education = () => {
  return (
    
    <div className="education">
    <h1>EDUCATION</h1>

    <div className='middle'>
    <div className="left">
            <img src={edu} alt="true" className="image"/>
    </div>
<div className="edu-list">

  <div className="edu-list-contain">
  <div className="edu-container">
    <h3>Bachelor of Engineering (CSE)</h3>
    <ul>
      <li>Global Institute of Engineering and Technology , Vellore, TamilNadu.</li>
      <li>Year : 2020 - 2023</li>
    </ul>
  </div>
  <div  className="edu-container">
    <h3>Diploma in Computer Science Enginneering </h3>
    <ul>
      <li>Bharath Polytechnic, Bangarapet, Karnataka.</li>
      <li>Year : 2015 - 2018</li>
    </ul>
  </div>
  </div>
</div>
</div>



</div>
  )
}

export default Education