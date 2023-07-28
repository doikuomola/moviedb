import { imageUrl } from '@/lib';
import { Movie } from '@/movie';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type MovieProps = {
  params: { id: string };
  children: ReactNode;
};

async function getMovie(id: string) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TDMB_API}`,
    },
    cache: 'no-store',
    next: {
      revalidate: 300,
    },
  });

  const data = await response.json();

  return data;
}

export default async function Movie({ params: { id }, children }: MovieProps) {
  const movie = (await getMovie(id)) as Movie;

  return (
    <main className="min-h-screen ">
      {movie.poster_path ? (
        <div className="h-[40vh] relative">
          <Image
            fill
            src={imageUrl(movie.poster_path)}
            alt="image detail"
            className="w-full object-cover object-center rounded-lg"
          />
        </div>
      ) : null}
      <h1 className="text-4xl text-center font-bold py-5">{movie.title}</h1>

      <div className="flex gap-x-10 mt-10">
        <div className="w-1/2 font-medium space-y-2">
          <h2 className="">
            <span className="underline">Homepage:</span>{' '}
            <Link
              href={movie.homepage}
              target="_blank"
              className="text-teal-500 animate-pulse"
            >
              Link
            </Link>
          </h2>
          <h2>
            <span className="underline">Original Language:</span>
            {movie.original_language}
          </h2>

          <p className="">
            <span className="underline">Overview:</span> {movie.overview}
          </p>

          <p className="">
            <span className="underline">Release Date:</span>{' '}
            {movie.release_date}
          </p>
        </div>
        <div className="w-1/2 font-medium bg-gray-100">{children}</div>
      </div>
    </main>
  );
}
