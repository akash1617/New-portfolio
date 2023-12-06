import React from 'react'
import "./FooterStyle.css"
import { FaFacebook, FaGithub, FaHome,FaInstagram,FaMailBulk,FaPhoneVolume, FaTwitter, FaWhatsapp, } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerCon">
        <div className="leftFoot">
          <div className="loc">
            <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <div>
              <p>#2/273,3rd st,Kiruba Nagar,Thorapadi,</p>
              <p>Vellore.</p>
            </div>
          </div>
          <div className="phone">
          <h4>
          <FaPhoneVolume size={20} style={{color:"#fff", marginRight:"2rem"}}/>
          +91 8105045960
          </h4>
          </div>
          <div className="email">
          <h4>
          <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
          akashav1617@gmail.com
          </h4>
          </div>
        </div>
        <div className="rightFoot">
        <h4>Follow Me by...</h4>
        <div className="media">
        <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
        <FaWhatsapp size={30} style={{color:"#fff", marginRight:"1rem"}}/>
        <a href="https://github.com/akash1617"><FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
        <a href="https://www.instagram.com/mr_akash.av_1617/"><FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
        
        </div>
        </div>
      </div>
    </div>
  
  );
}

export default Footer