import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

type Partenaire = {
  name: string
  logo?: string // sans logo → le nom s'affiche en texte
  url?: string
  grand?: boolean
}

// Ajouter / retirer un partenaire = une ligne
const partenaires: Partenaire[] = [
  { name: 'IPPON', logo: '/images/logos/logo ippon 2.png', url: 'https://fr.ippon.tech/' },
  { name: 'Maisons Wedgwood', logo: '/images/logos/logo wedgwood.png', url: 'https://www.maisonswedgwood.com' },
  { name: 'Oger', logo: '/images/logos/Oger père et fils.jpeg' , grand: true , url: 'https://oger-pereetfils.com/' },
  { name: 'Ktalyst', logo: '/images/logos/Ktalyst.jpg' , url: 'https://ktalyst.fr/' },
  { name: 'La Cucina', logo: '/images/logos/logo La Cucina.jpeg' , url:'https://lacucina-andresy.fr/' },
  { name: 'Crédit Mutuel', logo: '/images/logos/674844bf8cbae_creditMutuel.jpeg', url:'https://www.creditmutuel.fr/fr/caisse/ile-de-france/yvelines/10278-06365-01?y_source=1_MTE2ODUzNDUtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D' },
  { name: 'Bouticycle Chambourcy', logo: '/images/logos/logo-btc-sans-fond.png', grand: true , url:'https://bouticycle.com/-Chambourcy-' },
  { name: 'Renault', logo: '/images/logos/logo renault.png' },
  { name: 'U Express', logo: '/images/logos/uexpress-andresy.photopresentation.jpg', url:'https://www.magasins-u.com/magasin/uexpress-andresy.m20161' },
  { name: 'RRUNNING', logo: '/images/logos/Logo-RRUNNING-Noir-RVB.png', url:'https://rrunning.com/rr-store/rrunning-conflans/' },
  { name: 'We Rise', logo: '/images/logos/logo we rise.png', url:'https://werise.fr/' },
  { name: 'Bières & Cidres', logo: '/images/logos/logo bières et cidres.png', url:'https://www.biereetcidre.com/' },
  { name: 'Boulangerie Beaufils Andrésy', url:'https://www.facebook.com/boulangeriebeaufils/?locale=fr_FR' },
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
                     const logo = p.logo ? (
              <Image
                src={p.logo}
                alt={`Logo ${p.name}`}
                width={200}
                height={100}
                className={`mx-auto ${p.grand ? 'h-28' : 'h-20'} w-auto object-contain`}
              />
            ) : (
              <span className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                {p.name}
              </span>
            )
            return p.url ? (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Découvrir ${p.name} (nouvel onglet)`}
                           className="flex items-center justify-center p-2 transition-opacity hover:opacity-70"
              >
                {logo}
              </a>
            ) : (
              <div
                key={p.name}
                               className="flex items-center justify-center p-2"
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
