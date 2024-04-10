import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
// import Hero from './components/Hero/Hero.jsx';
// import Section from './components/Section/Section.jsx';
import React from 'react';
import {Outlet} from 'react-router-dom';
import { fetchTopAlbums,fetchNewAlbums,fetchSongs } from './components/api/api.js';
import { useEffect,useState } from 'react';


function App(){

  const [data,setData] = useState({});
  const generateData = (key,source) => {
    source().then((resource)=>{
      setData((prevResource)=>{
        return{...prevResource,[key]:resource};
      });
    });
  }

  useEffect(()=>{
    generateData('topAlbums',fetchTopAlbums);
    generateData('newAlbums',fetchNewAlbums);
    generateData('songs',fetchSongs);
  },[]);

  const {topAlbums =[],newAlbums=[]} = data;

  return(
    <>
      <Navbar/>
      <Outlet context={{data:{topAlbums,newAlbums}}}/>
    </>
  )
}
export default App;
