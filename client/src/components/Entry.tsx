import React from 'react';

interface MovieProps {
  entry: { title: string; watched?: boolean; };
}

const Entry = (props: MovieProps): JSX.Element => {
  return (
    <div>
      <div>{props.entry.title}</div>
    </div>
  )
};

export default Entry;