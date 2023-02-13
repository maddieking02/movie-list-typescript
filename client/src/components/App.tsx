import React, {useState, useEffect } from 'react';
import List from './List';

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

  return (
    <div id='app'>
      <h1>Movie List</h1>
      <div>
        <List master={master} setMaster={setMaster}></List>
      </div>
    </div>
  )
};

export default App;