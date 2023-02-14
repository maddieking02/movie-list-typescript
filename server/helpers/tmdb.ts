require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config();
import axios from 'axios';


let getMovies = () => {
  const auth = {
    url: `https://api.themoviedb.org/3/movie/550?api_key=${process.env.API_KEY}`,
    // url: 'https://api.themoviedb.org/3/movie/550?api_key=2989654f904cb9c939ae1ea6e072c122',
  }
  return axios.get(auth.url);
}

module.exports = getMovies;