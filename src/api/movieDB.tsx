import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'5976e49a5d02f83ebb405d8ad447e3c0',
        lenguage:'es-ES'
    }
})

export default movieDB;