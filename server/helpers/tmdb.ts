require('dotenv').config();
import axios from 'axios';

export const searchMovie = (query: string) => {
  const auth = {
    url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${query}`,
  }
  return axios.get(auth.url);
}

export const getMovie = (id: number) => {
  const auth = {
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`,
  }
  return axios.get(auth.url);
}
