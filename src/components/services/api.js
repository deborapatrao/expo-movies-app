import axios from "axios"
import qs from 'qs'
import { APP_KEY, BASE_URL } from "../config/api_config"

export const getSearchTitles = async (keyword, type) => {
    
    const url = `${BASE_URL}search/${type}${APP_KEY}&page=1&query=${keyword}`
    const axios = require('axios');
    try {
        const response = await axios.get(url);

        const titles = response.data.results;
        return titles 
        
    } catch (error) {
        console.error(error);
    }
}

export const getTitles = async (media, type) => {
    const url = `${BASE_URL}${media}/${type}${APP_KEY}&page=1`
    const axios = require('axios');
    try {
        const response = await axios.get(url);

        const titles = response.data.results;
        return titles 
        
    } catch (error) {
        console.error(error);
    }
}

export const getTitle = async (id, type) => {
    const url = `${BASE_URL}${type}/${id}${APP_KEY}&page=1`
    const axios = require('axios');
    try {
        const response = await axios.get(url);

        const title = response.data;
        return title 
        
    } catch (error) {
        console.error(error);
    }
}

