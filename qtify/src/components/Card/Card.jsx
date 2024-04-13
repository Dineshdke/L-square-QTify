import React, { useEffect,useState } from "react";
import styles from './Card.module.css';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';




export default function Card({topSong,type}) {

  return (
        <>  
            {type!=='songs'?
            <Tooltip title={`${topSong.songs.length} Songs`} placement='top'>
                <Link to={`/album/${topSong.slug}`} style={{ textDecoration: 'none',color:'white'}} >    
                    <div className={styles.card}>
                        <div className={styles.wrapper}>
                            <img className={styles.image} src={topSong.image}alt='cardImage'/>
                        </div>
                        <div className={styles.pills}>
                            <div className={styles.pillsContainer}>
                                {topSong.follows} Follows
                            </div>
                        </div>
                        <div className={styles.subtitle}>{topSong.title}</div>
                    </div>
                </Link>
            </Tooltip>
            :
            <>
                <div className={styles.card}>
                    <div className={styles.wrapper}>
                        <img className={styles.image} src={topSong.image}alt='cardImage'/>
                    </div>
                    <div className={styles.pills}>
                        <div className={styles.pillsContainer}>
                            {topSong.likes} Likes
                        </div>
                    </div>
                    <div className={styles.subtitle}>{topSong.title}</div>
                </div>
            </>
            }
        </>
  );
}
