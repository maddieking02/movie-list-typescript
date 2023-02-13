import React, {useState, useEffect } from 'react';
import List from './List';
import Search from './Search';
import Add from './Add';

interface Movies {
  title: string;
  watched?: number; // binary
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
        <List filtered={filtered} setMaster={setMaster}></List>
      </div>
    </div>
  )
};

export default App;