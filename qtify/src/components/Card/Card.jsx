import React from "react";
import styles from './Card.module.css';


export default function Card({data}) {

  return (
      <div className={styles.card}>
            <div className={styles.wrapper}>
                <img className={styles.image} src={data.image}alt='cardImage'/>
            </div>
            <div className={styles.pills}>
                <div className={styles.pillsContainer}>
                    {data.follows} Follows
                </div>
            </div>
            <div className={styles.subtitle}>{data.title}</div>
        </div>
  );
}
