import axios from "axios"
import qs from 'qs'
import { APP_KEY, BASE_URL } from "../config/api_config"

export const getTitles = async (keyword, type) => {
    
    const url = `${BASE_URL}search/${type}?api_key=${APP_KEY}&page=1&query=${keyword}`
    const axios = require('axios');
    try {
        const response = await axios.get(url);

        const titles = response.data.results;
        return titles 
        
    } catch (error) {
        console.error(error);
    }
}