import React, { SetStateAction } from 'react';

interface MovieProps {
  query: string;
  setQuery: React.Dispatch<SetStateAction<string>>;
}

const Search = ({ query, setQuery }: MovieProps): JSX.Element => {
  return (
    <div>
      <input type='text' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)}></input>
      <button onClick={() => setQuery(query)}>Go!</button>
    </div>
  )
};

export default Search;