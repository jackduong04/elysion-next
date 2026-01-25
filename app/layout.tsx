import type { Metadata } from 'next';
import { Playfair_Display, Work_Sans } from 'next/font/google';

// Components
import './globals.css';
import { NavBar } from './components/navbar/NavBar';
import { ContactForm } from './components/forms/ContactForm';
import { Footer } from './components/sections/Footer';

const displayFont = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
});

const bodyFont = Work_Sans({
  variable: '--font-body',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Elysion',
  description: 'Nostalgic landscape design and modern outdoor living.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
        <ContactForm />
      </body>
    </html>
  );
}
