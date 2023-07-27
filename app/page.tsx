import { Trending } from '@/components';
import { Movie } from '@/typings';

async function getMovies() {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TDMB_API}`,
      },
      next: {
        revalidate: 300,
      },
    }
  );

  const data = await response.json();

  const movies = data.results;

  return movies;
}

export default async function Home() {
  const movies = (await getMovies()) as Movie[];

  return (
    <main className="">
      <Trending movies={movies} />
    </main>
  );
}
