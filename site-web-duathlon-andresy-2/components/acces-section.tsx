import { Bike, Car, MapPin, Train } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const modes = [
  {
    icon: Train,
    title: 'En train',
    items: [
      'Gare d’Andrésy ou de Maurecourt (ligne J, depuis Paris Saint-Lazare)',
      'Gare de Conflans Fin d’Oise (RER A)',
      'Puis 10 à 20 min à pied jusqu’à l’Espace Julien Green',
    ],
  },
  {
    icon: Bike,
    title: 'À vélo',
    items: ['Parkings à vélos à proximité de la zone de départ', 'Accès par les bords de Seine'],
  },
  {
    icon: Car,
    title: 'En voiture',
    items: [
      'A13 ou A14 : sortie Poissy, puis direction Andrésy',
      'A15 : sortie Saint-Ouen-l’Aumône, direction Versailles, sortie Andrésy',
      'Parkings gratuits : gare d’Andrésy, Intermarché',
    ],
  },
]

export function AccesSection() {
  return (
    <section id="acces" className="scroll-mt-16 bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Infos pratiques"
          title="Venir à Andrésy"
          description="Départ devant la Mairie, parc à vélos sous le marché couvert, arrivée dans le parc de la Mairie. Remise des dossards à l'Espace Julien Green."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {modes.map((mode) => (
            <article key={mode.title} className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-border">
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <mode.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase italic text-foreground">{mode.title}</h3>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {mode.items.map((item) => (
                  <li key={item} className="flex gap-2 leading-relaxed">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-xl border-2 border-accent bg-card p-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl leading-relaxed text-foreground">
            <strong className="font-semibold">{'Important : '}</strong>
            {"un arrêté interdit la circulation sur le parcours de 14h à 18h (réouverture possible plus tôt si tous les participants ont terminé). Évitez de vous engager vers le centre et les quais, et suivez les indications vers les parkings."}
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Espace+Julien+Green+Andr%C3%A9sy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <MapPin className="size-4" aria-hidden="true" />
            {'Voir sur la carte'}
          </a>
        </div>
      </div>
    </section>
  )
}
