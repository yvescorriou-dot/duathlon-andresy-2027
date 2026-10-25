import Image from 'next/image'
import { HeartHandshake } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const missions = [
  'Dimanche matin : montage du parc à vélos , arches, sécurité, buvette, arrivée et village partenaires',
  'Dimanche après-midi : sécurisation des parcours (signaleurs)',
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
                    <div className="mt-8 rounded-md border border-border bg-muted/50 px-6 py-5">
              <p className="font-semibold">Recrutement des bénévoles 2027 : bientôt ouvert !</p>
              <p className="mt-2 text-muted-foreground">
                {"Nous préparons la campagne de recrutement de l'édition 2027. D'ici là, écrivez-nous à "}
                <a href="mailto:andresytriathlon@outlook.fr" className="font-semibold text-accent underline underline-offset-4 hover:opacity-80">
                  andresytriathlon@outlook.fr
                </a>
                {" pour manifester votre envie de nous rejoindre — nous vous recontacterons dès l'ouverture."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
