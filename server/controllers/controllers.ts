import { Request, Response } from 'express';
import { models } from '../models/models';
import { searchMovie, getMovie } from '../helpers/tmdb';

interface MovieInfo {
  overview: string,
  release_date: string,
  runtime: number,
  vote_average: number,
}

export const controllers = {
  getInfo: (req: any, res: any) => {
    searchMovie(req.query.title)
    .then((res: any) => {
      getMovie(res.data.results[0].id)
      .then((res: any) => {
        const movieInfo: MovieInfo = {
          overview: res.data.overview,
          release_date: res.data.release_date,
          runtime: res.data.runtime,
          vote_average: res.data.vote_average,
        }
        console.log('this is movieInfo', movieInfo)
        res.status(200).send(movieInfo);
      })
      .catch((err: unknown) => {
        console.log('error inside getMovie', err);
        res.status(400).send();
      })
    })
    .catch((err: unknown) => {
      console.log('error inside searchMovie');
      res.status(400).send();
    })
  }
}
