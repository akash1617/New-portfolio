import React from 'react'
import "./WordCardStyle.css"
import pimg from '../../assets/movieapp.png'
import { NavLink } from 'react-router-dom';

const WordCard = () => {
  return (
    <div className="workcard">
      <h1 className="projHead">Project</h1>
      <div className="projCon">
        <div className="projCard">
          <img src={pimg} alt="no-image" />
          <h2 className="projT">Movies App</h2>
          <div className='projDel'>
          <p>
          "Explore and discover movies effortlessly with our Movie Reviews App. Get insightful reviews and information on a wide range of films for an enhanced cinematic experience."
          </p>
          <div className="projBtns">
          <NavLink to="https://av-movies-app.vercel.app/~" className="btn">View</NavLink>  
          </div>
          </div>
        </div>
        <div className="projCard">
          <img src={pimg} alt="no-image" />
          <h2 className="projT">Movies App</h2>
          <div className='projDel'>
          <p>
          "Explore and discover movies effortlessly with our Movie Reviews App. Get insightful reviews and information on a wide range of films for an enhanced cinematic experience."
          </p>
          <div className="projBtns">
          <NavLink to="https://av-movies-app.vercel.app/~" className="btn">View</NavLink>  
          </div>
          </div>
        </div>
        <div className="projCard">
          <img src={pimg} alt="no-image" />
          <h2 className="projT">Movies App</h2>
          <div className='projDel'>
          <p>
          "Explore and discover movies effortlessly with our Movie Reviews App. Get insightful reviews and information on a wide range of films for an enhanced cinematic experience."
          </p>
          <div className="projBtns">
          <NavLink to="https://av-movies-app.vercel.app/~" className="btn">View</NavLink>  
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordCard