import { Parisienne, Playfair_Display, DM_Serif_Display } from 'next/font/google';
import './globals.css';

// Font definitions
const parisienne = Parisienne({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-parisienne',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

export const metadata = {
  title: "D&M Delight's Cheesecakes",
  description: "Artisan cheesecakes crafted with premium ingredients",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${parisienne.variable} ${playfair.variable} ${dmSerif.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}