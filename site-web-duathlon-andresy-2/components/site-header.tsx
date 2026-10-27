'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

  const links = [
  { href: '#epreuve', label: "L'épreuve" },
  { href: '#parcours', label: 'Parcours' },
  { href: '#programme', label: 'Programme' },
  { href: '#acces', label: 'Accès' },
  { href: '#inscriptions', label: 'Inscriptions' },
  { href: '#reglement', label: 'Règlement' },
  { href: '#benevoles', label: 'Bénévoles' },
  { href: '#partenaires', label: 'Partenaires' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-3 font-display text-xl font-extrabold uppercase italic tracking-tight">
          <span className="flex size-11 items-center justify-center overflow-hidden rounded-md bg-white p-0.5">
            <Image src="/images/logo-duathlon-2027.png" alt="" width={88} height={88} className="size-full object-contain" />
          </span>
          <span className="flex items-baseline gap-2">
            <span>Duathlon</span>
            <span className="text-accent">Andrésy</span>
            <span className="text-sm font-semibold not-italic text-primary-foreground/70">2027</span>
          </span>
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-primary-foreground/80 transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#inscriptions"
          className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          {"S'inscrire"}
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navigation mobile" className="border-t border-primary-foreground/10 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-medium text-primary-foreground/90 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
