import React from 'react';
import axios from 'axios';

type Binary = 0 | 1;

interface MovieProps {
  entry: { title: string; watched?: Binary; };
  toggle: any;
}

const handleTitleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const title: string = e.currentTarget.getAttribute('data-title');
  console.log('title', title);
  axios.get('/api/movies/info', { params: { title } })
    .then((res) => {
      console.log('successful retrieval of movies')
    })
    .catch((err) => {
      console.log('failure to retrieve movies')
    })
}

const Entry = ({ entry, toggle }: MovieProps): JSX.Element => {
  return (
    <div>
      <div data-title={entry.title} onClick={ handleTitleClick.bind(this) }>{entry.title}
        <button onClick={() => toggle(entry)}>{entry.watched === 0 ? 'To Watch' : 'Watched'}</button>
      </div>
    </div>
  )
};

export default Entry;