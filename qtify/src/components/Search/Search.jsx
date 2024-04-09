import React from "react";
import SearchIcon from "../../assets/Search icon.png";
import styles from "./Search.module.css"

export default function Searchbar({placeholder}){

    const onSubmit = (e) =>{
        e.preventDefault();
        //write submission logic here
    }
    return( 
            <form className={styles.wrapper} onSubmit={onSubmit}>
                    <input className={styles.search} placeholder={placeholder} required/>
                    <button className={styles.searchButton}>
                        <img src={SearchIcon} alt='Search'/>
                    </button>
            </form>
    )
}