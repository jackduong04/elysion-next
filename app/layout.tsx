import type { Metadata } from 'next';
import { Playfair_Display, Work_Sans } from 'next/font/google';
import './globals.css';

const displayFont = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
});

const bodyFont = Work_Sans({
  variable: '--font-body',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Elysion Gardens',
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
        <header className="sticky top-0 z-50 border-b border-elysion-sand bg-[rgba(246,241,231,0.92)] backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="text-lg font-semibold uppercase tracking-[0.2em] text-elysion-forest">
              Elysion
            </div>
            <nav aria-label="Primary">
              <ul className="flex flex-wrap items-center gap-6 text-sm font-medium uppercase tracking-[0.18em] text-elysion-forest">
                {[
                  { href: '#hero', label: 'Story' },
                  { href: '#services', label: 'Services' },
                  { href: '#reviews', label: 'Reviews' },
                  { href: '#highlights', label: 'Process' },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      className="transition duration-300 hover:text-elysion-rust focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--elysion-olive)]"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
