import React, { useEffect,useState } from 'react';
import styles from './Section.module.css';
import Card from '../Card/Card';
import axios from 'axios';




export default function Section({first,last}) {

    const [topSong,setTopSong] = useState([]);
    const [newSong,setNewSong] = useState([]);

    const fetchTopSongs =async () => {
        const songs = (await axios.get('https://qtify-backend-labs.crio.do/albums/top')).data;
        setTopSong(songs);    
    }

    const fetchNewSongs =async () => {
        const songs = (await axios.get('https://qtify-backend-labs.crio.do/albums/new')).data;
        setNewSong(songs);    
    }

    useEffect(() =>{
        fetchTopSongs();
        fetchNewSongs();
    },[])

    return(
        <>
            <div className={styles.parent}>
                <div className={styles.section}>
                    <div className={styles.first}>{first}</div>
                    <button className={styles.last}>{last}</button>
                </div>
                <div className={styles.albumContainer}>
                    {topSong.length>0 ? (
                        topSong.map((item) => {
                            return <Card topSong={item}/>
                        }))
                    : ''}
                </div>
            </div>
            <div className={styles.parent}>
                <div className={styles.section}>
                    <div className={styles.first}>New Albums</div>
                    <button className={styles.last}>{last}</button>
                </div>
                <div className={styles.albumContainer}>
                    {newSong.length>0 ? (
                        newSong.map((item) => {
                            return <Card topSong={item}/>
                        }))
                    : ''}
                </div>
            </div>              
        </>
    )
}


