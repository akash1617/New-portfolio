import React from "react";
import AboutContStyle from "./AboutContStyle.css";
import av from '../../assets/AV.jpg'
import { Link } from "react-router-dom";

const AboutCont = () => {
  return (
    <div className="aboutMain">
      <div className="al">
        <h1>who am I?</h1>
        <p> Im web font-end developer. </p>
        <Link to="/contact">
        <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="ar">
      <img src={av} alt="" />
      </div>
    </div>
  );
};

export default AboutCont;
