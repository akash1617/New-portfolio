import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import Banner2 from '../Components/Banner/Banner2'
import AboutCont from '../Components/About_detalis/AboutCont'
import Education from '../Components/Edu/Education'

const About = () => {
  return (
    <div>
    <NavBar/>
    <Banner2 heading="ABOUT_" text="web dev.  "/>
    <AboutCont/>
    <Education/>
    <Footer/>
    </div>
  )
}

export default About