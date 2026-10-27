import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

type Partenaire = {
  name: string
  logo?: string
  url?: string
  role: string
}

// Ajouter un partenaire = ajouter une ligne ici
const mecenes: Partenaire[] = [
  {
    name: 'IPPON',
    logo: '/images/logos/logo la Cucina.jpeg',
    url: 'https://fr.ippon.tech/',
    role: 'Mécène du Triath\'Club d\'Andrésy',
  },
  {
    name: 'Maisons Wedgwood',
    logo: '/images/logos/logo wedgwood.png',
    url: 'https://www.maisonswedgwood.com',
    role: 'Mécène du Triath\'Club d\'Andrésy',
  },
]

const institutionnels: Partenaire[] = [
  {
    name: "Ville d'Andrésy",
    logo: '/images/logos/530589785_1188204843325777_100555503459991461_n.jpeg',
    url: 'https://www.andresy.com',
    role: 'Mairie, Services techniques, police municipale, accueil de l\'épreuve',
  },
  {
    name: 'Comité Départemental des Yvelines',
    logo: '/images/logos/ConseilDepartementalYvelines.png',
    url: 'https://www.yvelines.fr/',
    role: 'Soutien et participation financière',
  },
]

function PartenaireCard({ p, big }: { p: Partenaire; big?: boolean }) {
  const inner = (
    <>
      {p.logo ? (
        <Image
          src={p.logo}
          alt={`Logo ${p.name}`}
          width={big ? 400 : 220}
          height={big ? 200 : 110}
          className="mx-auto w-auto max-h-[90px] md:max-h-[110px] object-contain grayscale opacity-70 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        />
      ) : (
        <span className="font-display text-lg font-bold uppercase">{p.name}</span>
      )}
      <span className="mt-3 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {p.role}
      </span>
    </>
  )
  return p.url ? (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-border bg-white px-6 py-8 text-center ring-1 ring-border transition-shadow hover:shadow-md"
      title={`Visiter le site de ${p.name}`}
    >
      {inner}
    </a>
  ) : (
    <div className="group rounded-lg border border-border bg-white px-6 py-8 text-center">
      {inner}
    </div>
  )
}

export function PartenairesSection() {
  return (
    <section id="partenaires" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Partenaires"
          title="Ils nous soutiennent"
          description="Le duathlon d'Andrésy existe grâce à la générosité de nos mécènes, partenaires et des institutions qui nous accompagnent."
        />

        <h3 className="mt-12 font-display text-xl font-bold uppercase italic">Nos mécènes</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {mecenes.map((p) => (
            <PartenaireCard key={p.name} p={p} big />
          ))}
        </div>

        <h3 className="mt-14 font-display text-xl font-bold uppercase italic">Nos partenaires institutionnels</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {institutionnels.map((p) => (
            <PartenaireCard key={p.name} p={p} />
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          {'Vous souhaitez soutenir le club ou l\'épreuve ? Écrivez-nous à '}
          <a href="mailto:andresytriathlon@outlook.fr" className="font-semibold text-accent underline underline-offset-4 hover:opacity-80">
            andresytriathlon@outlook.fr
          </a>
          {'.'}
        </p>
      </div>
    </section>
  )
}
