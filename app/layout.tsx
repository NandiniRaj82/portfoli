import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nandini Raj - Software Developer | Portfolio',
  description: 'Full-Stack Developer specializing in React.js, Node.js, Flutter, and modern web technologies. Explore my projects and experience in frontend, backend, and mobile app development.',
  keywords: 'Full-Stack Developer, React.js, Node.js, Flutter, JavaScript, TypeScript, Web Development, Mobile App Development',
  authors: [{ name: 'Nandini Raj' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Nandini Raj - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React.js, Node.js, Flutter, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:," />
      </head>
      <body className="bg-gray-900 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}