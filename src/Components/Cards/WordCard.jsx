import React from 'react'
import "./WordCardStyle.css"
import Mimg from '../../assets/movieapp.png'
import Simg from '../../assets/searchapp.png'
import { NavLink } from 'react-router-dom';

const WordCard = () => {
  return (
    <div className="workcard">
      <h1 className="aboutHead">PROJECT</h1>
      <div className="projCon">
        <div className="projCard">
          <img src={Mimg} alt="no-image" />
          <h2 className="projT">Movies App</h2>
          <div className="projDel">
            <p>
              "Explore and discover movies effortlessly with our Movie Reviews
              App. Get insightful reviews and information on a wide range of
              films for an enhanced cinematic experience."
            </p>
            <div className="projBtns">
              <NavLink to="https://av-movies-app.vercel.app/~" className="btn">
                View
              </NavLink>
            </div>
          </div>
        </div>

        <div className="projCard">
          <img src={Simg} alt="no-image" />
          <h2 className="projT">Image Search App</h2>
          <div className="projDel">
            <p>
              "Unleash the power of visual search with Image Seeker, your go-to
              app for effortlessly finding information through images. Get
              instant and relevant results within seconds."
            </p>
            <div className="projBtns">
              <NavLink
                to="https://av-image-search-app-rosy.vercel.app/"
                className="btn"
              >
                View
              </NavLink>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default WordCard



// <div className="projCard">
// <img src={pimg} alt="no-image" />
// <h2 className="projT">App</h2>
// <div className='projDel'>
// <p>
// dummy
// </p>
// <div className="projBtns">
// <NavLink to="https://av-movies-app.vercel.app/~" className="btn">View</NavLink>  
// </div>
// </div>
// </div>