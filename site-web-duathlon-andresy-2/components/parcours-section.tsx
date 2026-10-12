import Image from 'next/image'
import { Bike, Footprints, Flag, Mountain } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const segments = [
  {
    step: '01',
    icon: Footprints,
    title: 'Course à pied',
    distance: '5 km',
    text: "Départ devant la Mairie pour une boucle le long de la Seine et dans le centre-ville. De quoi se placer avant la transition au parc à vélos du marché couvert.",
    image: '/images/cap1.jpg',
    position: 'object-[45%_40%]',
    alt: 'Peloton de coureurs juste après le départ du duathlon',
  },
  {
    step: '02',
    icon: Bike,
    title: 'Vélo',
    distance: '20 km',
    text: "Deux ascensions de la mythique côte de Verdun et beaucoup de pilotage dans les rues d'Andrésy, sur routes fermées à la circulation.",
    image: '/images/velo-verdun.jpg',
    position: 'object-[40%_50%]',
    alt: 'Cyclistes en pleine ascension de la côte de Verdun',
  },
  {
    step: '03',
    icon: Flag,
    title: 'Course à pied',
    distance: '2,5 km',
    text: "Un final court et intense à travers les sentes du village, entre murs de pierre et verdure, jusqu'à l'arche d'arrivée dans le parc de la Mairie.",
    image: '/images/cap2.jpg',
    position: 'object-[50%_40%]',
    alt: "Deux duathlètes du TCA souriants sur la seconde course à pied, rue Georges Delamare",
  },
]

const sites = [
  { label: 'Départ', value: 'Devant la Mairie' },
  { label: 'Parc à vélos', value: 'Sous le marché couvert' },
  { label: 'Arrivée', value: 'Parc de la Mairie' },
]

export function ParcoursSection() {
  return (
    <section id="parcours" className="scroll-mt-16 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          inverted
          eyebrow="Parcours"
          title="Trois enchaînements, une seule ligne d'arrivée"
          description="Distances officielles duathlon format S : 5 km de course à pied, 20 km de vélo et 2,5 km de course à pied."
        />

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {sites.map((site) => (
            <div key={site.label} className="rounded-lg border border-primary-foreground/15 px-5 py-4">
              <dt className="text-xs font-bold uppercase tracking-widest text-accent">{site.label}</dt>
              <dd className="mt-1 font-display text-xl font-bold uppercase italic">{site.value}</dd>
            </div>
          ))}
        </dl>

        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {segments.map((seg) => (
            <li
              key={seg.step}
              className="group flex flex-col overflow-hidden rounded-xl bg-primary-foreground/5 ring-1 ring-primary-foreground/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={seg.image}
                  alt={seg.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={`object-cover ${seg.position} contrast-[1.05] saturate-[1.08] transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute left-4 top-4 font-display text-5xl font-extrabold italic text-primary-foreground drop-shadow">
                  {seg.step}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2 font-display text-2xl font-bold uppercase italic">
                    <seg.icon className="size-5 text-accent" aria-hidden="true" />
                    {seg.title}
                  </h3>
                  <span className="rounded-md bg-accent px-2 py-1 font-display text-lg font-bold text-accent-foreground">
                    {seg.distance}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-primary-foreground/80">{seg.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="mt-6 flex flex-col gap-4 rounded-xl border-2 border-dashed border-accent/60 p-6 md:flex-row md:items-center">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Mountain className="size-5" aria-hidden="true" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-2xl font-bold uppercase italic">{'Challenge des grimpeurs'}</h3>
              <span className="rounded-full bg-primary-foreground/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest text-accent">
                {'Optionnel · à confirmer'}
              </span>
            </div>
            <p className="mt-2 leading-relaxed text-primary-foreground/80">
              {"Comme en 2026, un classement spécifique pourrait récompenser les plus rapides dans la côte de Verdun. Sa reconduction pour 2027 sera confirmée prochainement."}
            </p>
          </div>
        </aside>

        <p className="mt-10 text-sm text-primary-foreground/70">
          {"Les tracés détaillés (GPX et cartes) seront publiés quelques semaines avant l'épreuve."}
        </p>
      </div>
    </section>
  )
}
