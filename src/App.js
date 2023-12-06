import React, { Fragment } from 'react'
import "./index.css"
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import { Route, Routes } from 'react-router-dom';
import FooterCR from './Components/Footer/FooterCR';

function App() {
  return (
   <Fragment>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <FooterCR/>
   </Fragment>
  );
}

export default App;
