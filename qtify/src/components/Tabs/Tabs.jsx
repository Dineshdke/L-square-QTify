import {React,useEffect,useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styles from './Tabs.module.css';
import Carousel from '../Carousel/Carousel.jsx';

export default function BasicTabs({data,genre,type}) {

  const [value, setValue] = useState('All');

  const handleChange = async (event,newValue) => {
    console.log(newValue,"Selected Value");
    await setValue(newValue);  
  };

  return (
    <TabContext value={value} >
        <TabList onChange={handleChange} aria-label="lab API tabs example" className={styles.tabs}>
          <Tab label='All' value="All" className={styles.tabs}/>
          {genre.length>0 ?
            (genre.map((item)=>{
              return <Tab label={item.label} value={item.label} className={styles.tabs}/>
            })) :''}
        </TabList>
      {genre.length>0 && data.length>0 && value!=='All'?
          (genre.map((item)=>{
            const result = data.filter((songs)=>songs.genre.label === value);
            console.log(result);
            return <TabPanel value={item.label}><Carousel data={result} type={type}/></TabPanel>
          })) :
          <TabPanel value={value}><Carousel data={data} type={type}/></TabPanel>}
    </TabContext>
  );
}
