import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import React from 'react';
import {Outlet} from 'react-router-dom';
import { fetchTopAlbums,fetchNewAlbums,fetchSongs } from './components/api/api.js';
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
  },[]);

  const {topAlbums =[],newAlbums=[],songs=[]} = data;

  return(
    <>
      <StyledEngineProvider injectFirst>
        <Navbar/>
        <Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
      </StyledEngineProvider>
    </>
  )
}
export default App;
