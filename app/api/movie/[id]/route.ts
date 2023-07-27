import { NextResponse } from 'next/server';

type Params = {
  params: { id: string };
};

export async function GET(request: Request, { params: { id } }: Params) {
  if (!id) {
    return NextResponse.next(
      new Response('Missing movie ID!', { status: 400 })
    );
  }

  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TDMB_API}`,
    },
    cache: 'no-store',
  });

  const data = await response.json();

  return NextResponse.json(data);
}
