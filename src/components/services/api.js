import axios from "axios"
import qs from 'qs'
import { APP_KEY, BASE_URL } from "../config/api_config"

export const getTitles = async (keyword, type) => {
    
    const url = `${BASE_URL}/search/${type}?api_key=${APP_KEY}&page=1&query=${keyword}`
    const axios = require('axios');
    try {
        // const params = {
        //     keyword: keyword,
        //     type: type,
        //     app_key: APP_KEY,
        //     field: ['id', 'original_title', 'popularity', 'release_date', 'poster_path', 'overview' ]
        // }
        const response = await axios.get(url);
        console.log('RESPONSE: ', response);

        const results = response;
        return results 
        
    } catch (error) {
        console.error(error);
    }
}