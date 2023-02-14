import { Request, Response } from 'express';
import { models } from '../models/models';
import { searchMovie, getMovie } from '../helpers/tmdb';

interface MovieInfo {
  overview: string,
  poster_path: string,
  release_date: string,
  runtime: number,
  vote_average: number,
}

export const controllers = {
  getInfo: (req: any, res: any) => {
    searchMovie(req.query.title)
    .then((response: any) => {
      getMovie(response.data.results[0].id)
      .then((result: any) => {
        const movieInfo: MovieInfo = {
          overview: result.data.overview,
          poster_path: `https://image.tmdb.org/t/p/original/${result.data.poster_path}`,
          release_date: result.data.release_date,
          runtime: result.data.runtime,
          vote_average: result.data.vote_average,
        }
        console.log('this is movieInfo', movieInfo)
        res.status(200).send(movieInfo);
      })
      .catch((err: unknown) => {
        res.status(400).send();
      })
    })
    .catch((err: unknown) => {
      res.status(400).send();
    })
  }
}
