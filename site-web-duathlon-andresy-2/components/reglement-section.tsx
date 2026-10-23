import { ArrowUpRight, ChevronDown, FileText } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const rules = [
  {
    q: 'Acceptation du règlement',
    a: "Toute inscription au Duathlon d'Andrésy suppose que le participant a pris connaissance du règlement de l'organisation ainsi que de la Réglementation Générale Fédérale de la FFTRI, et qu'il s'engage à s'y soumettre.",
  },
  {
    q: 'Licence et pass compétition',
    a: "Les licenciés FFTRI présentent leur licence au retrait des dossards. Les non-licenciés doivent souscrire un Pass compétition lors de l'inscription en ligne.",
  },
  {
    q: 'Équipement obligatoire',
    a: "Casque à coque rigide homologué, attaché avant de prendre le vélo et jusqu'au dépôt du vélo dans le parc. Dossard visible à l'avant en course à pied et à l'arrière à vélo.",
  },
  {
    q: 'Sécurité et code de la route',
    a: "Les participants respectent les consignes des signaleurs, des arbitres et le code de la route. Tout comportement dangereux peut entraîner une disqualification.",
  },
  {
    q: "Annulation ou modification de l'épreuve",
    a: "L'organisation se réserve le droit de modifier les parcours, les horaires ou d'annuler l'épreuve en cas de décision préfectorale ou de conditions mettant en jeu la sécurité des participants.",
  },
]

export function ReglementSection() {
  return (
    <section id="reglement" className="scroll-mt-16 bg-muted py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.4fr] md:px-6">
        <div>
          <SectionHeading
            eyebrow="Règlement"
            title="Les règles du jeu"
            description="L'essentiel à connaître avant de prendre le départ. Le règlement complet fait foi."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <a
              href="https://drive.google.com/file/d/1sk_JbzND2wmhV8bZQei2FgTL4Q1XE1Ax/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <FileText className="size-4" aria-hidden="true" />
              {'Règlement complet (PDF)'}
            </a>
            <a
              href="https://www.fftri.com/actualite/reglementation-sportive-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-card px-5 font-semibold text-foreground transition-colors hover:border-accent"
            >
              {'Réglementation FFTRI'}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="divide-y divide-border rounded-xl bg-card ring-1 ring-border">
          {rules.map((rule) => (
            <details key={rule.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                {rule.q}
                <ChevronDown
                  className="size-5 shrink-0 text-accent transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{rule.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
