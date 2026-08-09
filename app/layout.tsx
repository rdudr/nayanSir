import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../src/styles/globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Naran M. Pindoriya - Power Systems & Smart Grid Lab',
  description: 'Faculty profile and research portfolio at IIT Gandhinagar - Power Systems and Smart Grid Lab',
  keywords: [
    'power systems',
    'smart grid',
    'renewable energy',
    'microgrid',
    'energy management',
    'research',
    'IIT Gandhinagar',
    'Naran Pindoriya',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={jakarta.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
