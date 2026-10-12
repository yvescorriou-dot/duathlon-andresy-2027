import Image from 'next/image'
import { Calendar, Clock, MapPin } from 'lucide-react'

const stats = [
  { value: '5', unit: 'km', label: 'Course à pied' },
  { value: '20', unit: 'km', label: 'Vélo' },
  { value: '2,5', unit: 'km', label: 'Course à pied' },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <Image
        src="/images/depart-arche.jpg"
        alt="Départ du duathlon d'Andrésy 2026 sous l'arche, encouragé par le public"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[60%_60%] saturate-[1.1] contrast-[1.05]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/75 to-primary/30" aria-hidden="true" />

      <div className="pointer-events-none absolute right-6 top-24 hidden w-64 rounded-2xl bg-white p-3 shadow-2xl lg:block xl:right-[max(1.5rem,calc((100vw-72rem)/2))] xl:w-80">
        <Image
          src="/images/logo-duathlon-2027.png"
          alt="Logo du Duathlon d'Andrésy 2027"
          width={640}
          height={640}
          priority
          className="h-auto w-full"
        />
      </div>

      <div className="mx-auto flex min-h-[85svh] max-w-6xl flex-col justify-end px-4 pb-12 pt-32 md:px-6 md:pb-16">
        <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">
          {"Format S · Intra-urbain · Yvelines"}
        </p>
        <h1 className="font-display text-6xl font-extrabold uppercase italic leading-[0.9] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-9xl">
          {"Duathlon"}
          <br />
          {"d'Andrésy "}
          <span className="text-accent">2027</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85 text-pretty">
          {"Course à pied le long de la Seine, deux ascensions de la mythique côte de Verdun et un final à travers les sentes du village. Le Triath'Club d'Andrésy vous donne rendez-vous pour la 2e édition."}
        </p>
        <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
          {'Organisation : '}
          <span className="text-accent">{"Triath'Club d'Andrésy (TCA)"}</span>
        </p>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
          <li className="flex items-center gap-2">
            <Calendar className="size-4 text-accent" aria-hidden="true" />
            {"Dimanche 30 mai 2027"}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="size-4 text-accent" aria-hidden="true" />
            {"Départ 15h00"}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            {"Départ devant la Mairie, Andrésy (78)"}
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#inscriptions"
            className="inline-flex h-12 items-center rounded-md bg-accent px-6 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {"Je m'inscris"}
          </a>
          <a
            href="#parcours"
            className="inline-flex h-12 items-center rounded-md border border-primary-foreground/30 px-6 font-semibold transition-colors hover:bg-primary-foreground/10"
          >
            {'Découvrir le parcours'}
          </a>
        </div>

        <dl className="mt-12 grid max-w-2xl grid-cols-3 divide-x divide-primary-foreground/20 border-t border-primary-foreground/20 pt-6">
          {stats.map((s, i) => (
            <div key={i} className="px-3 first:pl-0">
              <dt className="text-xs uppercase tracking-widest text-primary-foreground/70">{s.label}</dt>
              <dd className="mt-1 font-display text-4xl font-extrabold italic md:text-5xl">
                {s.value}
                <span className="ml-1 text-lg font-semibold not-italic text-accent">{s.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
