import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Section from './components/Section/Section.jsx';
import React from 'react';

function App(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <Section first='Top Albums' last='Collapse'/>
    </>
  )
}
export default App;
