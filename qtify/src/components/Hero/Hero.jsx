import React from "react";
import HeroImage from "../../assets/headphone.png";
import styles from './Hero.module.css'


export default function Hero() {
  return (
      <div className={styles.wrapper}>
        <div className={styles.textHero}>
            <div>
                100 Thousand Songs, ad-free
            </div>
            <div>
                Over thousands podcast episodes
            </div>
        </div>
        <img src={HeroImage} alt="HeroImage"/>
      </div>
  );
}
