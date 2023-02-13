import React, {useState, useEffect } from 'react';
import List from './List';
import Search from './Search';

interface Movies {
  title: string;
  watched?: boolean;
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

  const filtered: Movies[] = [];
  master.forEach((movie: Movies) => {
    if (movie.title.toLowerCase().includes(query.toLowerCase())) {
      filtered.push(movie);
    }
  })

  return (
    <div id='app'>
      <h1>Movie List</h1>
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