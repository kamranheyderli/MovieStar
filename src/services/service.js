
import axios from 'axios';

export const fetchData = async (baseUrl, apiKey) => {
    const url = `${baseUrl}/discover/movie?api_key=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        throw error;
    }
};


export const searchMovies = async (baseUrl, apiKey, query) => {
    const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`;

    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        throw error;
    }
};
