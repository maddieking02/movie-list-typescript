import React from 'react';

interface MovieProps {
  entry: { title: string; watched?: boolean; };
}

const Entry = ({ entry }: MovieProps): JSX.Element => {
  return (
    <div>
      <div>{entry.title}</div>
    </div>
  )
};

export default Entry;