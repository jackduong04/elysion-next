'use client';

// Node modules
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Data
import { navigationConfig } from '../../data/navigation';

// Types
import type { NavItem } from './types';

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        setOpenAccordion(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMobileMenuOpen]);

  const renderNavItem = (item: NavItem) => {
    const hasChildren = item.children && item.children.length > 0;

    if (!hasChildren) {
      return (
        <li key={item.id}>
          <Link
            href={item.href ?? '/'}
            className={`
              rounded-full px-3 py-2 text-xs font-semibold uppercase transition duration-200
              text-white text-shadow-lg tracking-[0.28em] hover:text-elysion-gold focus-visible:outline-2
              focus-visible:outline-offset-4 focus-visible:outline-(--elysion-olive)
            `}
          >
            {item.label}
          </Link>
        </li>
      );
    }

    return (
      <li
        key={item.id}
        className="relative"
        onMouseEnter={() => setOpenDropdown(item.id)}
        onMouseLeave={() => setOpenDropdown(null)}
        onFocus={() => setOpenDropdown(item.id)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setOpenDropdown(null);
          }
        }}
      >
        <button
          type="button"
          aria-expanded={openDropdown === item.id}
          className={`
            flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition
            text-white text-shadow-lg duration-200 uppercase tracking-[0.28em] hover:text-elysion-gold
            focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--elysion-olive)
          `}
        >
          <span>{item.label}</span>
          <span
            className={`transition duration-200 ${
              openDropdown === item.id ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          >
            ▾
          </span>
        </button>
        <div
          className={`
            absolute left-0 top-full min-w-55 rounded-2xl transition duration-200
            border border-elysion-sand bg-elysion-cream/95 text-elysion-forest shadow-xl ${
              openDropdown === item.id
                ? 'opacity-100 translate-y-0'
                : 'pointer-events-none -translate-y-2 opacity-0'
            }
          `}
        >
          <ul className="flex flex-col gap-1 p-3">
            {item.children?.map((child) => (
              <li key={child.id}>
                <Link
                  href={child.href}
                  className={`
                    block rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em]
                    hover:bg-elysion-sand/60 focus-visible:outline-2 focus-visible:outline-offset-4
                    focus-visible:outline-(--elysion-olive)
                  `}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  };

  return (
    <header
      className={`
      fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b
      border-elysion-cream/10 bg-elysion-forest/70 shadow-xl backdrop-blur-sm
    `}
    >
      <div className="flex w-full items-center justify-between px-9 2xl:px-12 py-3 2xl:py-4">
        <Link
          href="/"
          className={`
            flex items-center gap-5 focus-visible:outline-2
            focus-visible:outline-offset-4 focus-visible:outline-(--elysion-gold)
          `}
        >
          <div className="relative w-12 h-12">
            <Image
              src="/vectors/elysion_logo_light.svg"
              alt="Elysion Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg text-white font-semibold uppercase tracking-[0.3em] invisible sm:visible">
            Elysion
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden 2xl:block"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <ul className="flex items-center gap-3 2xl:gap-4">
            {navigationConfig.map(renderNavItem)}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className={`
              rounded-full px-4 py-2 text-xs font-semibold uppercase transition duration-200 text-shadow-lg
              tracking-[0.26em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--elysion-gold)
              border border-elysion-cream text-white hover:text-elysion-gold hover:border-elysion-gold
            `}
          >
            Cart
          </button>

          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs
              font-semibold uppercase tracking-[0.26em] focus-visible:outline-2 focus-visible:outline-offset-4
              focus-visible:outline-(--elysion-gold) 2xl:hidden border-elysion-cream text-white
              hover:text-elysion-gold hover:border-elysion-gold text-shadow-lg
            `}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              setIsMobileMenuOpen((open) => !open);
              setOpenAccordion(null);
            }}
          >
            Menu
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`2xl:hidden transition-all duration-200 ${
          isMobileMenuOpen
            ? 'max-h-250 opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 border-t border-elysion-sand bg-elysion-cream/95 px-4 pb-6 pt-4 text-elysion-forest shadow-xl">
          {navigationConfig.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            if (!hasChildren) {
              return (
                <Link
                  key={item.id}
                  href={item.href ?? '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-[0.28em]
                    hover:bg-elysion-sand/60 focus-visible:outline-2 focus-visible:outline-offset-4
                    focus-visible:outline-(--elysion-olive)
                  `}
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = openAccordion === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-elysion-sand"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className={`
                    flex w-full items-center justify-between px-3 py-3 text-sm font-semibold uppercase
                    tracking-[0.28em] hover:bg-elysion-sand/60 focus-visible:outline-2 focus-visible:outline-offset-4
                    focus-visible:outline-(--elysion-olive)
                  `}
                  onClick={() =>
                    setOpenAccordion((current) =>
                      current === item.id ? null : item.id,
                    )
                  }
                >
                  <span>{item.label}</span>
                  <span
                    className={`transition duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    isOpen ? 'max-h-225 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="flex flex-col gap-1 px-3 pb-3 pt-1">
                    {item.children?.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={child.href}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenAccordion(null);
                          }}
                          className={`
                            block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em]
                            hover:bg-elysion-sand/60 focus-visible:outline-2 focus-visible:outline-offset-4
                            focus-visible:outline-(--elysion-olive)
                          `}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
