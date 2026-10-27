function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5H17V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9V11H8.5v3H11v7h2.5Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

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
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/triathlonandresy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram du Triath'Club d'Andrésy (nouvel onglet)"
              className="transition-opacity hover:opacity-70"
            >
              <InstagramIcon />
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
