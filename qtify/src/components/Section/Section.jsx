import React, { useEffect,useState } from 'react';
import styles from './Section.module.css';
import Card from '../Card/Card';
import axios from 'axios';




export default function Section({first,last}) {

    const [data,setData] = useState([]);
    const fetchSongs =async () => {
        const songs = (await axios.get('https://qtify-backend-labs.crio.do/albums/top')).data;
        console.log(songs[0].follows)
        setData(songs)
    
    }
    useEffect(() =>{
        fetchSongs();
    },[])

    return(
        <>
            <div className={styles.parent}>
                <div className={styles.section}>
                    <div className={styles.first}>{first}</div>
                    <button className={styles.last}>{last}</button>
                </div>
                <div className={styles.albumContainer}>
                    {data.length>0 ? (
                        data.map((item) => {
                            return <Card data={item}/>
                        }))
                    : ''}
                </div>
            </div>            
        </>
    )
}


