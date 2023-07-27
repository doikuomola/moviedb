import { Movie } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type TrendingCardProp = {
  movie: Movie;
};

export default function TrendingCard({ movie }: TrendingCardProp) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
      <div className="h-40 group">
        <Link className="" href={`movie/${movie.id}`}>
          <Image
            src={`
          https://image.tmdb.org/t/p/w500/${movie.poster_path}
          `}
            width={500}
            height={500}
            alt="banner image"
            className="h-full w-full object-cover object-center group-hover:scale-110 transition duration-200 ease-out"
          />
        </Link>
      </div>
      <div className="flex-1 flex-col flex justify-between p-4 md:p-6">
        <h2 className="text-lg font-bold text-black mb-2">
          <Link
            className="transition duration-100 hover:text-teal-300 active:text-teal-600 ease-out"
            href={`movie/${movie.id}`}
          >
            {movie.title}
          </Link>
        </h2>
        <p className="text-gray-500 line-clamp-3 text-sm md:text-base">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
