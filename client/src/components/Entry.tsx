import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup  } from "react-icons/io";
import axios from 'axios';

type Binary = 0 | 1;

interface MovieProps {
  entry: { title: string; watched?: Binary; };
  toggle: any;
}

const Entry = ({ entry, toggle }: MovieProps): JSX.Element => {
  const [open, setOpen] = useState<boolean | false>(false);
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
        setOpen(true);
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

  const handleCollapse = (): void => {
    setOpen(false);
    setOverview(null);
    setPoster(null);
    setRelease(null);
    setRuntime(null);
    setVote(null);
  }

  return (
    <div>
      <div>
          {entry.title}
          {open === false
            ? <IoMdArrowDropdown data-title={entry.title} onClick={ handleTitleClick.bind(this) }/>
            : <IoMdArrowDropup onClick={ () => handleCollapse() }/>}
        <div id="movie-container">
          {open === true ? <button id="watched-btn" onClick={ () => { toggle(entry); handleCollapse(); } }>{entry.watched === 0 ? 'To Watch' : 'Watched'}</button> : null}
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