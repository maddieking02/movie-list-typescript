import React, { SetStateAction } from 'react';
import Entry from './Entry';

type Binary = 0 | 1;

interface Movies {
  title: string;
  watched?: Binary;
}

interface MovieProps {
  filtered: Movies[];
  setMaster: React.Dispatch<SetStateAction<Movies[]>>;
}

const List = ({ filtered }: MovieProps): JSX.Element => {

  return (
    <div>
      {filtered.length > 0 ? filtered.map((entry, idx) => {
        return <Entry entry={entry} key={idx}></Entry>
      }) : <div>no movie by that name found</div>}
    </div>
  )
};

export default List;