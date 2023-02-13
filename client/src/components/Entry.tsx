import React from 'react';

type Binary = 0 | 1;

interface MovieProps {
  entry: { title: string; watched?: Binary; };
  toggle: any;
}

const Entry = ({ entry, toggle }: MovieProps): JSX.Element => {
  return (
    <div>
      <div>{entry.title}
        <button onClick={() => toggle(entry)}>{entry.watched === 0 ? 'To Watch' : 'Watched'}</button>
      </div>
    </div>
  )
};

export default Entry;