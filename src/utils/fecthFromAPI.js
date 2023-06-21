import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': 'b56f620bb2msh8f307bb403cb672p174aa0jsn0cb573e93ab2',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }

  };

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }