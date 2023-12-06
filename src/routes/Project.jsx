import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import Banner2 from '../Components/Banner/Banner2'
import WorkCard from '../Components/Cards/WordCard'


const Project = () => {
  return (
    <div >
    <NavBar/>
    <Banner2 heading="PROJECT_" text="Some of the Project "/>
   <WorkCard/>

    <Footer/>
    </div>
  )
}

export default Project