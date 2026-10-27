import { Facebook, Instagram } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <p className="font-display text-3xl font-extrabold uppercase italic">
            {'Duathlon '}
            <span className="text-accent">{"d'Andrésy"}</span>
            {' 2027'}
          </p>
          <p className="mt-2 text-primary-foreground/70">
            {'Organisation assurée par le '}
            <strong className="font-semibold text-primary-foreground">{"Triath'Club d'Andrésy (TCA)"}</strong>
          </p>
        </div>
        <div className="text-sm text-primary-foreground/70 md:text-right">
          <div className="flex items-center gap-5 md:justify-end">
            <a
              href="https://www.facebook.com/Andresytriathlon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook du Triath'Club d'Andrésy (nouvel onglet)"
              className="transition-opacity hover:opacity-70"
            >
              <Facebook className="size-6" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/triathlonandresy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram du Triath'Club d'Andrésy (nouvel onglet)"
              className="transition-opacity hover:opacity-70"
            >
              <Instagram className="size-6" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-4">
            {'Contact : '}
            <a href="mailto:andresytriathlon@outlook.fr" className="font-medium text-primary-foreground underline-offset-4 hover:underline">
              andresytriathlon@outlook.fr
            </a>
          </p>
          <p className="mt-1">{'Épreuve organisée sous l’égide de la FFTRI'}</p>
        </div>
      </div>
    </footer>
  )
}
