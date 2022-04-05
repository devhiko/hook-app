import React, { useState, useEffect } from 'react';
import { v1 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {

  const [songs, setSongs] = useState([
    { title: "Song 1", id: 1 },
    { title: "Song 2", id: 2 },
    { title: "Song 3", id: 3 }
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title, id: v1() }]);
  }

  useEffect(() => {
    console.log('hook ran', songs);
  }, [songs]);

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return (<li key={song.id}>{song.title}</li>)
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add age</button>
      <p>New age is: {age}</p>
    </div>
  );
}

export default SongList;