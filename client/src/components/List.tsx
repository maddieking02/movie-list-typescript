import React, { SetStateAction } from 'react';
import Entry from './Entry';

interface Movies {
  title: string;
  watched?: boolean;
}

interface MovieProps {
  master: Movies[];
  setMaster: React.Dispatch<SetStateAction<Movies[]>>;
}

const List = (props: MovieProps): JSX.Element => {

  return (
    <div>
      {props.master.map((entry, idx) => {
        return <Entry entry={entry} key={idx}></Entry>
      })}
    </div>
  )
};

export default List;