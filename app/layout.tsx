import { Navbar } from '@/components';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movie-DB',
  description: 'Movie database web.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="p-2 md:p-10 lg:p-20">{children}</main>
      </body>
    </html>
  );
}
