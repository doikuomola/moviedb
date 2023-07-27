'use client';

import Link from 'next/link';
import Avatar from 'react-avatar';

export default function AvatarComponent() {
  return (
    <Link href="/">
      <Avatar name="Wim Mostmans" size="60" textSizeRatio={1.75} round={true} />
    </Link>
  );
}
