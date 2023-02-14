import React, { useState } from 'react';
import axios from 'axios';

type Binary = 0 | 1;

interface MovieProps {
  entry: { title: string; watched?: Binary; };
  toggle: any;
}

const Entry = ({ entry, toggle }: MovieProps): JSX.Element => {
  const [overview, setOverview] = useState<string | null>(null);
  const [poster, setPoster] = useState<string | null>(null);
  const [release, setRelease] = useState<string | null>(null);
  const [runtime, setRuntime] = useState<number | null>(null);
  const [vote, setVote] = useState<number | null>(null);

  const handleTitleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const title: string = e.currentTarget.getAttribute('data-title');
    console.log('title', title);
    axios.get('/api/movies/info', { params: { title } })
      .then((res: any) => {
        console.log('successful retrieval of movies', res.data)
        setOverview(res.data.overview);
        setPoster(res.data.poster_path);
        setRelease(res.data.release_date);
        setRuntime(res.data.runtime);
        setVote(res.data.vote_average);
      })
      .catch((err) => {
        console.log('failure to retrieve movies')
      })
  }

  return (
    <div>
      <div data-title={entry.title} onClick={ handleTitleClick.bind(this) }>{entry.title}
        <button onClick={() => toggle(entry)}>{entry.watched === 0 ? 'To Watch' : 'Watched'}</button>
        <div id="movie-container">
          {overview !== null ? <div id="movie-overview">Summary: {overview}</div> : null}
          {poster !== null ? <img id="movie-img" src={poster} alt=''></img> : null}
          {release !== null ? <div id="movie-release">Release Date: {release}</div> : null}
          {runtime !== null ? <div id="movie-runtime">Runtime: {runtime}</div> : null}
          {vote !== null ? <div id="movie-vote">Rating Average: {vote}</div> : null}
        </div>
      </div>
    </div>
  )
};

export default Entry;