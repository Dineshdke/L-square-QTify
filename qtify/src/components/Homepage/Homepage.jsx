import Section from '../Section/Section.jsx';   
import Hero from '../Hero/Hero.jsx';
import Faq from '../Faq/Faq.jsx';
import React from 'react';
import {useOutletContext} from 'react-router-dom';

export default function Homepage(){

    const { data } = useOutletContext();
    const { topAlbums,newAlbums,songs,faq} = data;

    return(

        <>
            <Hero/>
            <Section title="Top Albums" data={topAlbums} type='album'/>
            <Section title="New Albums" data={newAlbums} type='album'/>
            <Section title="Songs" data={songs} type='songs'/>
            <Faq data={faq}/>
        </>

    )

    
}