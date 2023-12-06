import React from "react";
import "./AboutContStyle.css";
import av from '../../assets/AV.jpg'
import { Link } from "react-router-dom";

const AboutCont = () => {
  return (
    <div className="aboutMain">
    <div className="Head">
    <h1 >ABOUT ME</h1>
    </div>
     <div className="new">
     <div className="al">
     <h1>Get to know me!</h1>
         <p>A Passionate FrontEnd Web Developer & I am Actively seeking a job in the Field of Web & Software Development</p>
         <p>Iam always excited to learn new things and develop my skills ,especially in the field of new technologies.</p>
         
     <Link to="/contact">
     <button className="btn">Contact</button>
     </Link>
   </div>
   <div className="ar">
   <img src={av} alt="" />
   </div></div>
    </div>
  );
};

export default AboutCont;
