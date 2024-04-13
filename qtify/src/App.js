import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import React from 'react';
import {Outlet} from 'react-router-dom';
import { fetchTopAlbums,fetchNewAlbums,fetchSongs,fetchFaq } from './components/api/api.js';
import { useEffect,useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';



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
    generateData('faq',fetchFaq);
  },[]);

  const {topAlbums =[],newAlbums=[],songs=[],faq=[]} = data;

  return(
    <>
      <StyledEngineProvider injectFirst>
        <Navbar/>
        <Outlet context={{data:{topAlbums,newAlbums,songs,faq}}}/>
      </StyledEngineProvider>
    </>
  )
}
export default App;
