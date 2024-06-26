import axios from 'axios';

export const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbums = async () => {
    try {
        const songs = (await axios.get(`${BACKEND_ENDPOINT}/albums/top`)).data;        
        return songs;         
    } catch (error) {
        console.log(error)
    }
}

export const fetchNewAlbums = async () => {
    try {
        const songs = (await axios.get(`${BACKEND_ENDPOINT}/albums/new`)).data;        
        return songs;         
    } catch (error) {
        console.log(error)
    }
}

export const fetchSongs = async () => {
    try {
        const songs = (await axios.get(`${BACKEND_ENDPOINT}/songs`)).data;        
        return songs;         
    } catch (error) {
        console.log(error)
    }
}

export const fetchGenre = async () => {
    try {
        const songs = (await axios.get(`${BACKEND_ENDPOINT}/genres`)).data;        
        return songs;         
    } catch (error) {
        console.log(error)
    }
}

export const fetchFaq = async () => {
    try {
        const songs = (await axios.get(`${BACKEND_ENDPOINT}/faq`)).data;        
        return songs;         
    } catch (error) {
        console.log(error)
    }
}

