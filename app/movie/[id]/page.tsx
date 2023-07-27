export const dynamic = 'force-dynamic';

import { Submit } from '@/components';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

type MoviePageProps = { params: { id: string }; searchParams: {} };

async function getData(id: string) {
  const data = await db.comment.findMany({
    where: {
      movieId: id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

async function postData(formData: FormData) {
  'use server';

  await db.comment.create({
    data: {
      message: formData.get('comment') as string,
      movieId: formData.get('id') as string,
    },
  });

  revalidatePath('/movie/[id]');
}

export default async function MoviePage({
  params: { id },
  searchParams,
}: MoviePageProps) {
  const data = await getData(id);

  return (
    <section className="rounded-lg border p-3">
      <h1 className="text-xl font-semibold mb-5">Your opinion</h1>

      <div className="">
        <form action={postData} className="space-y-2">
          <textarea
            name="comment"
            id="comment"
            className="w-full h-16 resize-none border-teal-500 border p-2 rounded-lg"
            placeholder="Add your comment..."
          ></textarea>
          <input type="hidden" name="id" value={id} />
          <Submit />
        </form>

        <div className="flex flex-col mt-5 gap-y-3">
          {data.map((post) => (
            <div className="" key={post.id}>
              <p>{post.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
