import Link from 'next/link';
import Image from 'next/image';
import { navigationConfig } from '../../data/navigation';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-elysion-forest text-elysion-cream pt-16 pb-8 border-t border-elysion-cream/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Branding Column */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/vectors/elysion_logo_light.svg"
                  alt="Elysion Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                Elysion
              </span>
            </Link>
            <p className="text-elysion-cream/70 text-sm leading-relaxed max-w-xs font-body">
              Nostalgic landscapes for modern living. We craft living
              sanctuaries that bridge the gap between human comfort and wild
              beauty.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-[0.25em] mb-6">
              Contact
            </h3>
            <ul className="space-y-4 font-body">
              <li>
                <p className="text-elysion-cream/50 text-[10px] uppercase tracking-widest mb-1">
                  Phone
                </p>
                <a
                  href="tel:+6490000000"
                  className="text-elysion-cream/90 hover:text-elysion-gold transition-colors text-sm"
                >
                  +64 9 000 0000
                </a>
              </li>
              <li>
                <p className="text-elysion-cream/50 text-[10px] uppercase tracking-widest mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@elysion.co.nz"
                  className="text-elysion-cream/90 hover:text-elysion-gold transition-colors text-sm"
                >
                  hello@elysion.co.nz
                </a>
              </li>
              <li>
                <p className="text-elysion-cream/50 text-[10px] uppercase tracking-widest mb-1">
                  Address
                </p>
                <p className="text-elysion-cream/90 text-sm">
                  Greater Auckland Area,
                  <br />
                  New Zealand
                </p>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-[0.25em] mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navigationConfig.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href || '#'}
                    className="text-elysion-cream/70 hover:text-elysion-gold transition-colors duration-200 text-sm font-medium uppercase tracking-widest"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-2 ml-4 space-y-2">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            href={child.href}
                            className="text-elysion-cream/50 hover:text-elysion-gold transition-colors duration-200 text-xs font-medium uppercase tracking-widest"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-[0.25em] mb-6">
              Follow Us
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-elysion-cream/70 hover:text-elysion-gold transition-colors"
              >
                <span className="text-xs font-medium uppercase tracking-widest">
                  Instagram
                </span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-elysion-cream/70 hover:text-elysion-gold transition-colors"
              >
                <span className="text-xs font-medium uppercase tracking-widest">
                  Facebook
                </span>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-elysion-cream/70 hover:text-elysion-gold transition-colors"
              >
                <span className="text-xs font-medium uppercase tracking-widest">
                  Pinterest
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-elysion-cream/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-elysion-cream/40">
          <p>© {currentYear} Elysion Landscapes Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="hover:text-elysion-cream transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-elysion-cream transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
