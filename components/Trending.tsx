import { Movie } from '@/typings';
import React from 'react';
import { TrendingCard } from '.';

type TrendingProps = {
  movies: Movie[];
};

export default function Trending({ movies }: TrendingProps) {
  return (
    <section>
      <h1 className="text-center font-bold text-4xl mb-8">
        Top Trending Movies
      </h1>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <TrendingCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
