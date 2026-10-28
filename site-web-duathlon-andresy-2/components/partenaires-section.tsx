import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

type Partenaire = {
  name: string
  logo: string
  url?: string
  grand?: boolean // logo qui a besoin de plus de hauteur
}

// Ajouter / retirer un partenaire = une ligne
const partenaires: Partenaire[] = [
  { name: 'IPPON', logo: '/images/logos/logo ippon 2.png', url: 'https://fr.ippon.tech/' },
  { name: 'Maisons Wedgwood', logo: '/images/logos/logo wedgwood.png', url: 'https://www.maisonswedgwood.com' },
  { name: 'Oger', logo: '/images/logos/oger.png' , grand: true  },
  { name: 'Ktalyst', logo: '/images/logos/Ktalyst.jpg' },
  { name: 'La Cucina', logo: '/images/logos/logo La Cucina.jpeg' },
  { name: 'Crédit Mutuel', logo: '/images/logos/Crédit-Mutuel-logo-650x366.png' },
  { name: 'Hesprie', logo: '/images/logos/Hesprie Logo N&B.png', grand: true  },
  { name: 'All Sport Vision', logo: '/images/logos/Logo ASV HD.png' },
  { name: 'La Rationnelle', logo: '/images/logos/logo la rationelle foncé.png' },
  { name: 'RRUNNING', logo: '/images/logos/Logo-RRUNNING-Noir-RVB.png' },
  { name: 'We Rise', logo: '/images/logos/logo we rise.png' },
  { name: 'Bières & Cidres', logo: '/images/logos/Bières & Cidres.jpg' },
  { name: 'Boulangerie Beaufils Andrésy', logo: '/images/logos/Boulangerie Beaufils.jpg' },
  { name: "Ville d'Andrésy", logo: '/images/logos/Ville andresy.jpeg', url: 'https://www.andresy.com' },
  { name: 'Comité Départemental des Yvelines', logo: '/images/logos/ConseilDepartementalYvelines.png', url: 'https://www.yvelines.fr/' },
]

export function PartenairesSection() {
  return (
    <section id="partenaires" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Partenaires"
          title="Nos partenaires"
          description="Le duathlon d'Andrésy existe grâce à eux. Cliquez sur un logo pour découvrir le partenaire."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partenaires.map((p) => {
            const logo = (
              <Image
                src={p.logo}
                alt={`Logo ${p.name}`}
                width={200}
                height={100}
                className={`mx-auto ${p.grand ? 'h-24' : 'h-16'} w-auto object-contain`}
              />
            )
            return p.url ? (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Découvrir ${p.name} (nouvel onglet)`}
                className="flex items-center justify-center rounded-lg border border-border bg-white px-6 py-8 transition-shadow hover:shadow-md"
              >
                {logo}
              </a>
            ) : (
              <div
                key={p.name}
                className="flex items-center justify-center rounded-lg border border-border bg-white px-6 py-8"
              >
                {logo}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
