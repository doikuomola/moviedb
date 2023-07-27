import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import React from 'react';

export default function loading() {
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      <Skeleton count={5} className="bg-gray-400 h-80 w-40 rounded-lg" />
      <Skeleton count={5} className="bg-gray-400 h-80 w-40 rounded-lg" />
      <Skeleton count={5} className="bg-gray-400 h-80 w-40 rounded-lg" />
      <Skeleton count={5} className="bg-gray-400 h-80 w-40 rounded-lg" />
      <Skeleton count={5} className="bg-gray-400 h-80 w-40 rounded-lg" />
      <Skeleton count={5} className="bg-gray-400 h-80 w-40 rounded-lg" />
      <Skeleton count={5} className="bg-gray-400 h-80 w-40 rounded-lg" />
      <Skeleton count={5} className="bg-gray-400 h-80 w-40 rounded-lg" />
    </div>
  );
}
