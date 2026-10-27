import Image from 'next/image'

// Logos qui défilent — ajouter ou retirer des lignes librement
const logos = [
  '/images/logos/logo ippon 2.png',
  '/images/logos/logo wedgwood.png',
  '/images/logos/Ktalyst.jpg',
  '/images/logos/Oger père et fils.jpeg',
  '/images/logos/logo La Cucina.jpeg',
  '/images/logos/674844bf8cbae_creditMutuel.jpeg',
  '/images/logos/Hesprie Logo N&B.png',
  '/images/logos/Logo ASV HD.png',
  '/images/logos/Logo-1-fonce.png',
  '/images/logos/Logo-RRUNNING-Noir-RVB.png',
  '/images/logos/We Rise logo bicheline (son, eclairage, video)_.png',
  '/images/logos/uexpress-andresy.photopresentation.jpg',
]

export function PartenairesBande() {
  if (logos.length === 0) return null

  return (
    <section
      aria-label="Nos partenaires et supporters"
      className="overflow-hidden border-y border-border bg-muted/40 py-6"
    >
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {[...logos, ...logos].map((src, i) => (
          <div key={i} className="flex shrink-0 items-center px-5">
            <Image
              src={src}
              alt="Partenaire du duathlon d'Andrésy"
              width={150}
              height={50}
              className="h-12 w-auto object-contain opacity-70"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
