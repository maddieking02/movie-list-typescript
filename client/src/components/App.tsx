import React, {useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';
import Search from './Search';
import Add from './Add';

type Binary = 0 | 1;

interface Movies {
  title: string;
  watched?: Binary;
}

var movies: Movies[]  = [
  {title: 'Mean Girls', watched: 0},
  {title: 'Hackers', watched: 0},
  {title: 'The Grey', watched: 0},
  {title: 'Sunshine', watched: 0},
  {title: 'Ex Machina', watched: 0},
];

const App = (): JSX.Element => {
  const [master, setMaster] = useState<Movies[] | []>(movies);
  const [query, setQuery] = useState<string | ''>('');
  const [newEntry, setNewEntry] = useState<string | ''>('');
  const [watched, setWatched] = useState<Binary | 0>(0);

  const filtered: Movies[] = [];
  master.forEach((movie: Movies) => {
    if (movie.watched === watched && movie.title.toLowerCase().includes(query.toLowerCase())) {
      filtered.push(movie);
    }
  })

  const handleNewEntry = (newEntry: string) : void => {
    var newMovie: Movies = {title: newEntry, watched: 0};
    var temp = [newMovie, ...master];
    setMaster(temp);
    setNewEntry('');
  }

  const toggle = (entry: Movies) : void => {
    var temp = [...master];
    temp.forEach((movie) => {
      if (movie.title === entry.title && entry.watched === 0) {
        entry.watched = 1;
      } else if (movie.title === entry.title && entry.watched === 1) {
        entry.watched = 0;
      }
    })
    setMaster(temp);
  }

  return (
    <div id='app'>
      <h1 id="app-header">MovieList</h1>
      <div>
        <Add newEntry={newEntry} setNewEntry={setNewEntry} handleNewEntry={handleNewEntry}></Add>
      </div>
      <div>
        <Search query={query} setQuery={setQuery}></Search>
      </div>
      <div>
        <button onClick={() => {setWatched(0)}}>To Watch</button>
        <button onClick={() => {setWatched(1)}}>Watched</button>
      </div>
      <div>
        <List filtered={filtered} setMaster={setMaster} toggle={toggle}></List>
      </div>
    </div>
  )
};

export default App;
