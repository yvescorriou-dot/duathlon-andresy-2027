import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

export function EpreuveSection() {
  return (
    <section id="epreuve" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <SectionHeading
            eyebrow="L'épreuve"
            title="Le duathlon au cœur de la ville"
          />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              {"Après le succès de l'édition 2026, le Triath'Club d'Andrésy (TCA), organisateur de l'épreuve, reconduit son épreuve en format "}
              <strong className="font-semibold text-foreground">duathlon S intra-urbain</strong>
              {" : course à pied, vélo, course à pied, le tout au cœur d'Andrésy."}
            </p>
            <p>
              {"Une première boucle le long de la Seine et dans la ville pour se mettre en jambes, un peu de D+ en vélo avec deux passages de la côte de Verdun et beaucoup de pilotage dans les rues, puis un final qui te fera découvrir toutes les petites sentes du village."}
            </p>
            <p className="border-l-4 border-accent pl-4 font-medium text-foreground">
              {"Bien plus qu'une course : un moment convivial, sportif et engagé, en terre familière."}
            </p>
          </div>
        </div>

        <figure className="flex flex-col">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl ring-1 ring-border">
            <Image
              src="/images/ambiance.jpg"
              alt="Deux participantes sautent de joie sur le parcours de course à pied"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[50%_35%] saturate-[1.08] contrast-[1.05]"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            {"L'ambiance de l'édition 2026 : on vient pour la course, on repart avec le sourire."}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
