// src/app/data/songs.js
let songs = [
  {
    id: 1,
    name: 'Song One',
    description: 'A short description for  First song',
    genre: 'Pop' 
  },
  {
    id: 2,
    name: 'Song Two',
    description: 'A short description for  Second song',
    genre: 'Rock'
  },
  {
    id: 3,
    name: 'Song Three',
    description: 'A short description for  Second song',
    genre: 'Rock'
  },
  {
    id: 4,
    name: 'Song Four',
    description: 'A short description for  Second song',
    genre: 'Rock'
  },
  {
    id: 5,
    name: 'Song Five',
    description: 'A short description for  Second song',
    genre: 'Rock'
  },
  {
    id: 6,
    name: 'Song Six',
    description: 'A short description for  Second song',
    genre: 'Rock'
  },
];

export const getAllSongs = () => songs;

export const getSongById = (id) => songs.find((song) => song.id === parseInt(id));

export const createSong = (song) => {
  const newSong = { id: songs.length + 1, ...song };
  songs.push(newSong);
  return newSong;
};

export const updateSong = (id, updatedSong) => {
  const index = songs.findIndex((song) => song.id === parseInt(id));
  if (index !== -1) {
    songs[index] = { ...songs[index], ...updatedSong };
    return songs[index];
  }
  return null;
};

export const deleteSong = (id) => {
  songs = songs.filter((song) => song.id !== parseInt(id));
};
