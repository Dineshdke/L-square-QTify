import React from "react";
import HeroImage from "../../assets/Group 7483.png";
import styles from './Hero.module.css'


export default function Hero() {
  return (
      <div className={styles.wrapper}>
        <img src={HeroImage} alt="HeroImage"/>
      </div>
  );
}
