import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const faqs = [
  {
    q: 'Y a-t-il plusieurs vagues de départ ?',
    a: "Non : en format duathlon, un seul départ pour tout le monde, devant la Mairie, à 15h00.",
  },
  {
    q: 'Barrières horaires : lesquelles et pourquoi ?',
    a: "L'organisation prévoit une fermeture du parcours après 2h30 maximum, pour des raisons de sécurité et de logistique. Les routes sont fermées de 14h à 18h et pourront être rouvertes plus tôt si tous les participants ont terminé.",
  },
  {
    q: 'Parc à vélos : quand puis-je récupérer mon vélo ?',
    a: "Une fois le dernier concurrent parti sur la seconde course à pied, et après confirmation des arbitres ou de l'organisation, vous pourrez récupérer votre vélo sous le marché couvert.",
  },
  {
    q: 'Quels vélos sont autorisés ?',
    a: "Vélo de route, gravel, vélo de contre-la-montre, VTC, VTT, et même vélo électrique en retirant la batterie. Voir le règlement pour le détail.",
  },
  {
    q: 'Handisport : comment s’inscrire ?',
    a: "Contactez-nous avant de vous inscrire. Un départ séparé sera prévu.",
  },
  {
    q: 'Y aura-t-il une consigne pour les effets personnels ?',
    a: "Oui, à l'Espace Julien Green, là où vous retirerez votre dossard, à proximité de l'arrivée dans le parc de la Mairie. Prévoyez de la marge : tout le monde y va en même temps !",
  },
  {
    q: 'Peut-on se changer ou se doucher ?',
    a: "Vous pourrez vous changer à l'Espace Julien Green. Malheureusement, pas de douche possible.",
  },
  {
    q: 'À quelle heure arriver ?',
    a: "Venir 2 heures avant le départ est un timing raisonnable pour retirer son dossard et s'installer au parc à vélos sans stress.",
  },
  {
    q: 'Quelle est l’offre de restauration ?',
    a: "Une buvette vous accueillera avec grand plaisir. Paiement en espèces ou par carte bancaire.",
  },
  {
    q: 'Où encourager les coureurs ?',
    a: "Autour du marché couvert, centre névralgique de la course, dans la côte de Verdun où les coureurs sont au maximum de leur effort, et autour de l'arrivée dans le parc de la Mairie. Attention à ne pas gêner la course.",
  },
  {
    q: 'Les photos de l’épreuve seront-elles disponibles ?',
    a: 'Oui, elles seront partagées après la course.',
  },
  {
    q: 'Quel dispositif médical est prévu ?',
    a: "Un dispositif médical adapté, validé par la Préfecture, avec plusieurs équipes de secours. On espère qu'ils ne serviront à rien : ne prenez pas de risque inutile !",
  },
  {
    q: 'Y a-t-il des podiums ?',
    a: 'Oui, dans le parc de la Mairie, pour les 4 catégories mixtes : cadet, junior, senior et master.',
  },
  {
    q: 'Où trouver les informations de dernière minute ?',
    a: "Sur notre page Instagram @triathlonandresy et notre page Facebook.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.4fr] md:px-6">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Vos questions"
            description="Tout ce que vous devez savoir pour préparer votre course."
          />
          <p className="mt-6 text-muted-foreground">
            {"Une autre question ? "}
            <a
              href="mailto:contact@andresytriathlon.fr"
              className="font-semibold text-foreground underline decoration-accent underline-offset-4"
            >
              contact@andresytriathlon.fr
            </a>
          </p>
        </div>

        <div className="divide-y divide-border rounded-xl bg-card ring-1 ring-border">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                {f.q}
                <ChevronDown
                  className="size-5 shrink-0 text-accent transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
