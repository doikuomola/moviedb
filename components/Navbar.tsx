import Link from 'next/link';
import { AvatarComponent } from '.';

export default function Navbar() {
  return (
    <nav>
      <div className="px-2 md:px-10 py-5 flex justify-between items-center">
        <Link
          className="flex items-center gap-2 font-bold bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text hover:text-teal-500 transition-all duration-300 ease-in"
          href="/"
        >
          Movie <span className="text-teal-500 font-bold text-xl">DB</span>
        </Link>
        <AvatarComponent />
      </div>
    </nav>
  );
}
