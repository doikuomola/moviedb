import { Movie, MovieResponse } from '@/typings';
import { data } from 'autoprefixer';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const response = await fetch(
    'https://api.themoviedb999.org/3/trending/movie/day',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TDMB_API}`,
      },
      cache: 'no-cache',
    }
  );

  const data: MovieResponse = await response.json();

  if (data.results.length === 0) {
    return NextResponse.next(
      new Response('No Trending movie found!', { status: 404 })
    );
  }

  const movieResult: Movie[] = data.results;

  return NextResponse.json(movieResult);
}
