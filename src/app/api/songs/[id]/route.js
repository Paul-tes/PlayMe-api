// src/app/api/songs/[id]/route.js
import { getSongById, updateSong, deleteSong } from '@/app/data/songs';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const song = getSongById(params.id);
  
  if (!song) {
    return NextResponse.json({ error: 'Song not found' }, { status: 404 });
  }
  
  return NextResponse.json(song);
}

export async function PUT(req, { params }) {
  const { name, description, genre } = await req.json();
  const updatedSong = updateSong(params.id, { name, description, genre });

  if (!updatedSong) {
    return NextResponse.json({ error: 'Song not found' }, { status: 404 });
  }

  return NextResponse.json(updatedSong);
}

export async function DELETE(req, { params }) {
  const song = getSongById(params.id);
  
  // Check if the song exists
  if (!song) {
    return NextResponse.json({ error: 'Song not found' }, { status: 404 });
  }

  // Delete the song
  deleteSong(params.id);

  // Return a 204 No Content status with no body
  return new NextResponse(null, { status: 204 });
}