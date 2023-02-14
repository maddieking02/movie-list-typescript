import React, { useState } from 'react';
import axios from 'axios';

type Binary = 0 | 1;

interface MovieProps {
  entry: { title: string; watched?: Binary; };
  toggle: any;
}

const Entry = ({ entry, toggle }: MovieProps): JSX.Element => {
  const [display, setDisplay] = useState<boolean | false>(false);
  const [overview, setOverview] = useState<string | null>(null);
  const [poster, setPoster] = useState<string | null>(null);
  const [release, setRelease] = useState<string | null>(null);
  const [runtime, setRuntime] = useState<number | null>(null);
  const [vote, setVote] = useState<number | null>(null);

  const handleTitleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const title: string = e.currentTarget.getAttribute('data-title');
    console.log('title', title);
    axios.get('/api/movies/info', { params: { title } })
      .then((res: any) => {
        setDisplay(true);
        setOverview(res.data.overview);
        setPoster(res.data.poster_path);
        setRelease(res.data.release_date);
        setRuntime(res.data.runtime);
        setVote(res.data.vote_average);
      })
      .catch((err: unknown) => {
        console.log('retrieval failure', err)
      })
  }

  return (
    <div>
      <div data-title={entry.title} onClick={ handleTitleClick.bind(this) }>{entry.title}
        <div id="movie-container">
          {display === true ? <button id="watched-btn" onClick={() => toggle(entry)}>{entry.watched === 0 ? 'To Watch' : 'Watched'}</button> : null}
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