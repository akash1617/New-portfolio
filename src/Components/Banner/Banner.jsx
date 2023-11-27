import React from 'react'
import "./BanStyle.css"

import BanImg from '../../assets/banner.jpg'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="mask">
          <img className="banimg" src={BanImg} alt='BannerImage'/>
     </div>
     <div className="content">
     <h1> <span className='s0'>HI, I'm a</span> <span className='s1'>AKASH</span>  <span className='s2'>VISHWA</span> </h1>
     <h2>Web Developer</h2>
     <div className='twobtn'>
      <Link to="/about" className='btn'>About Me</Link>
      <Link to="/contact" className='btn-light'>Contact</Link>
     </div>
     </div>
    </div>
  )
}

export default Banner