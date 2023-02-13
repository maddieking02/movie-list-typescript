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
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (): JSX.Element => {
  const [master, setMaster] = useState<Movies[] | []>(movies);
  const [query, setQuery] = useState<string | ''>('');
  const [newEntry, setNewEntry] = useState<string | ''>('');
  const [watched, setWatched] = useState<Binary | 0>(0);

  const filtered: Movies[] = [];
  master.forEach((movie: Movies) => {
    if (movie.title.toLowerCase().includes(query.toLowerCase())) {
      filtered.push(movie);
    }
  })

  const handleNewEntry = (newEntry: string) : void => {
    var newMovie: Movies = {title: newEntry, watched: 0};
    var temp = [newMovie, ...master];
    setMaster(temp);
    setNewEntry('');
  }

  return (
    <div id='app'>
      <h1>Movie List</h1>
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
        <List filtered={filtered} setMaster={setMaster}></List>
      </div>
    </div>
  )
};

export default App;