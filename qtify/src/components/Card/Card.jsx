import React from "react";
import styles from './Card.module.css';


export default function Card({topSong}) {

  return (
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
  );
}
