import { SectionHeading } from '@/components/section-heading'

const schedule = [
  { time: '12h30', title: 'Retrait des dossards', text: "Espace Julien Green, sur présentation d'une pièce d'identité et de la licence ou du pass compétition." },
  { time: '13h30', title: 'Ouverture du parc à vélos', text: 'Sous le marché couvert. Dépôt du vélo, casque attaché, contrôle par les arbitres.' },
  { time: '14h45', title: 'Briefing de course', text: 'Consignes de sécurité et présentation des parcours devant la Mairie.' },
  { time: '15h00', title: 'Départ du duathlon', text: 'Départ groupé devant la Mairie. Arrivée dans le parc de la Mairie.', highlight: true },
  { time: '17h30', title: 'Remise des prix', text: 'Podiums scratch et par catégorie, suivis du pot de l’amitié.' },
]

export function ProgrammeSection() {
  return (
    <section id="programme" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.4fr] md:px-6">
        <div>
          <SectionHeading
            eyebrow="Programme"
            title="Le jour J"
            description="Dimanche 30 mai 2027. Horaires indicatifs, susceptibles d'être ajustés."
          />
        </div>

        <ol className="relative border-l-2 border-border">
          {schedule.map((item) => (
            <li key={item.time} className="relative pb-8 pl-8 last:pb-0">
              <span
                className={
                  item.highlight
                    ? 'absolute -left-[9px] top-1.5 size-4 rounded-full bg-accent ring-4 ring-accent/20'
                    : 'absolute -left-[7px] top-2 size-3 rounded-full bg-primary'
                }
                aria-hidden="true"
              />
              <p className="font-display text-2xl font-bold italic text-accent">{item.time}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
