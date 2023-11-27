import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Eudcation from '../Components/Edu/Education'
import AboutCont from '../Components/About_detalis/AboutCont'

const Home = () => {
  return (
    <div>
    <NavBar/>
    <Banner/>
    <AboutCont/>
    <Eudcation/>
    <Footer/>
    </div>
  )
}

export default Home