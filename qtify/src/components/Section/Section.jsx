import React, { useEffect,useState } from 'react';
import styles from './Section.module.css';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import {CircularProgress} from '@mui/material';



export default function Section({title,data,type}) {

    const [carouselToggle,setCarouselToggle] = useState(true);

    const handleCarousel = () =>{
        setCarouselToggle(!carouselToggle);
    }

    return(
        <>
            <div className={styles.parent}>
                <div className={styles.section}>
                    <h3 className={styles.first}>{title}</h3>
                    <h4 className={styles.carouselToggle} onClick={handleCarousel}>{carouselToggle ? 'Show All' : 'Collapse'}</h4>
                </div>
                {data.length === 0 ? (<CircularProgress/>) : (
                    <>
                        {carouselToggle ? 
                        (
                            <div className={styles.albumContainer}>
                                {data.map((item) => {
                                        return <Card key={item.id} topSong={item}/>
                                    })};                                
                            </div>
                        ):                         
                        (<Carousel data={data}/>) }

                    </>
                )}
            </div>
        </>
    )
}


