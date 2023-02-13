import React from 'react';

type Binary = 0 | 1;

interface MovieProps {
  entry: { title: string; watched?: Binary; };
}

const Entry = ({ entry }: MovieProps): JSX.Element => {
  return (
    <div>
      <div>{entry.title}</div>
    </div>
  )
};

export default Entry;