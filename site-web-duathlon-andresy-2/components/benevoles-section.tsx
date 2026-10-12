import Image from 'next/image'
import { ArrowUpRight, HeartHandshake } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const BENEVOLES_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSer6fFh06R6cUYALVlBz8w-vxs1hYQmp-s3SwmCGOALS5eUbw/viewform?usp=dialog'

const missions = [
  'Samedi : montage du parc à vélos et du village partenaires',
  'Dimanche : sécurisation des parcours (signaleurs)',
  'Logistique : matériel, véhicules, ravitaillements',
]

export function BenevolesSection() {
  return (
    <section id="benevoles" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[3/2] overflow-hidden rounded-xl ring-1 ring-border">
            <Image
              src="/images/benevoles.jpg"
              alt="Les bénévoles du Triath'Club d'Andrésy réunis en t-shirts rouges devant l'Hôtel de Ville"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[50%_70%] saturate-[1.05] contrast-[1.05]"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Bénévoles"
              title="Rejoignez l'équipe !"
              description="Cette compétition ne peut avoir lieu qu'avec l'action des bénévoles. Pour que l'épreuve se passe dans de bonnes conditions, nous avons besoin de vous."
            />
            <ul className="mt-6 space-y-3">
              {missions.map((m) => (
                <li key={m} className="flex items-start gap-3 text-muted-foreground">
                  <HeartHandshake className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {"Être bénévole, c'est être acteur d'un événement régional, au plus près des athlètes, dans une ambiance conviviale. Entraînez parents et amis !"}
            </p>
            <a
              href={BENEVOLES_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              {'Je deviens bénévole'}
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">{'(formulaire Google, nouvel onglet)'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
