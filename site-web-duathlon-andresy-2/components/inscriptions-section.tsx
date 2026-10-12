import { Mail } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const tiers = [
  { label: '75 premiers dossards', price: '30' },
  { label: '75 dossards suivants', price: '35' },
  { label: '150 derniers dossards', price: '40' },
]

const CONTACT_EMAIL = 'andresytriathlon@outlook.fr'

export function InscriptionsSection() {
  return (
    <section id="inscriptions" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Inscriptions"
          title="Prends ton dossard"
          description="Les inscriptions se font exclusivement en ligne. Aucune inscription papier n'est possible. Tarifs progressifs, limité à 300 participants."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-xl bg-card p-6 ring-1 ring-border md:p-8">
            <h3 className="font-display text-2xl font-bold uppercase italic text-foreground">{'Licenciés FFTRI'}</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {tiers.map((tier, i) => (
                <li
                  key={tier.label}
                  className={
                    i === 0
                      ? 'rounded-lg bg-primary p-5 text-primary-foreground'
                      : 'rounded-lg bg-muted p-5 text-foreground'
                  }
                >
                  <p className="font-display text-5xl font-extrabold italic">
                    {tier.price}
                    <span className={i === 0 ? 'text-accent' : 'text-accent'}>{'€'}</span>
                  </p>
                  <p className={i === 0 ? 'mt-2 text-sm text-primary-foreground/80' : 'mt-2 text-sm text-muted-foreground'}>
                    {tier.label}
                  </p>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-2xl font-bold uppercase italic text-foreground">{'Non licenciés'}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {"Achat obligatoire d'un « Pass compétition » FFTRI au moment de l'inscription. Son coût s'ajoute au tarif de l'épreuve."}
            </p>

            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              {"L'inscription vous engage à respecter le code de la route, le règlement de l'épreuve et la réglementation générale de la FFTRI."}
            </p>
          </div>

          <aside className="flex flex-col justify-between gap-8 rounded-xl bg-accent p-6 text-accent-foreground md:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest">{'Ouverture des inscriptions'}</p>
              <p className="mt-2 font-display text-4xl font-extrabold uppercase italic leading-none">{'Bientôt en ligne'}</p>
              <p className="mt-4 leading-relaxed">
                {"La plateforme d'inscription sera ouverte prochainement. Retrait des dossards sur le lieu de l'épreuve, à l'Espace Julien Green."}
              </p>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Duathlon%20d'Andr%C3%A9sy%202027`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Mail className="size-4" aria-hidden="true" />
              {'Nous contacter'}
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
