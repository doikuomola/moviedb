'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function Submit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="bg-teal-500 text-white px-4 rounded-lg py-1 hover:bg-white hover:text-teal-500 transition duration-200 ease-out">
      {pending ? 'Adding comment' : 'Add comment'}
    </button>
  );
}
