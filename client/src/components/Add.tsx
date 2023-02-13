import React, { SetStateAction } from 'react'

interface MovieProps {
  newEntry: string;
  setNewEntry: React.Dispatch<SetStateAction<string>>;
  handleNewEntry: any;
}

const Add = ({ newEntry, setNewEntry, handleNewEntry }: MovieProps): JSX.Element => {
  return (
    <div>
      <input type='text' placeholder='Add movie title here' value={newEntry} onChange={(e) => {setNewEntry(e.target.value)}}></input>
      <button onClick={() => handleNewEntry(newEntry)}>Add</button>
    </div>
  )
};

export default Add;