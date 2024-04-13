import React, { useEffect, useState } from 'react';
import styles from './Section.module.css';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import {CircularProgress} from '@mui/material';
import BasicTabs from "../Tabs/Tabs.jsx";
import { fetchGenre } from '../api/api.js';


export default function Section({title,data,type}) {

    const [carouselToggle,setCarouselToggle] = useState(false);
    const [genre,setGenre]= useState([]);

    const handleCarousel = () =>{
        setCarouselToggle(!carouselToggle);
    }

    useEffect(()=>{
        let result = fetchGenre().then(item => {setGenre(item.data)});
        
    },[]);  
    

    return(
        <>
            {type !=='songs' ?
            <div className={styles.parent}>
                <div className={styles.section}>
                    <h3 className={styles.first}>{title}</h3>
                    
                    <h4 className={styles.carouselToggle} onClick={handleCarousel}>{carouselToggle ? 'Collapse' : 'Show All'}</h4>
                </div>
                {data.length === 0 ? (<CircularProgress/>) : (
                    <>
                        {carouselToggle && data ? 
                        (
                            <div className={styles.albumContainer}>
                                {data.map((item) => {
                                        console.log(data,'BEfore passing to card')
                                        return <Card key={item.id} topSong={item} type={type}/>
                                    })}                               
                            </div>
                        ):                         
                        (<Carousel data={data} type={type}/>) }

                    </>
                )}
            </div> :
            <div className={styles.parent}>
                <div className={styles.section}>
                    <h3 className={styles.first}>{title}</h3>
                </div>
                
                {data.length === 0 ? (<CircularProgress/>) : (
                    <>
                        {genre.length>0 ? <BasicTabs genre={genre} data={data} type={type}/> : ''}
                    </>
                )}
            </div> 
            
            }

        </>
    )
}


