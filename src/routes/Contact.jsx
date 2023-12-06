import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import Banner2 from '../Components/Banner/Banner2'
import ContactUs from '../Components/ContactUs/ContactUs'


const Contact = () => {
  return (
    <div>
    <NavBar/>
    <Banner2 heading="CONTACT_" text="me"/>
    <ContactUs/>
    <Footer/>
    </div>
  )
}

export default Contact