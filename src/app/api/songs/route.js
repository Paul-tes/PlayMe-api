// src/app/api/songs/route.js
import { getAllSongs, createSong } from '@/app/data/songs';
import { NextResponse } from 'next/server';

// Handle GET and POST requests
export async function GET() {
  const songs = getAllSongs();
  return NextResponse.json(songs);
}

export async function POST(req) {
  const { name, description, genre } = await req.json();
  
  if (!name || !description || !genre) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  
  const newSong = createSong({ name, description, genre });
  return NextResponse.json(newSong, { status: 201 });
}
