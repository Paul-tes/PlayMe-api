// src/app/data/songs.js
let songs = [
  { id: 1, name: 'Song One', description: 'First song', genre: 'Pop' },
  { id: 2, name: 'Song Two', description: 'Second song', genre: 'Rock' },
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
