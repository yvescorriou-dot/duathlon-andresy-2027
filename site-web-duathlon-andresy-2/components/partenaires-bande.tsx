import Image from 'next/image'

// Logos qui défilent — ajouter ou retirer des lignes librement
// (affichés en blanc uni sur fond bleu, quelle que soit leur couleur d'origine)
const logos = [
  '/images/logos/logo ippon 2.png',
  '/images/logos/logo wedgwood.png',
  '/images/logos/Ktalyst.jpg',
  '/images/logos/oger.png',
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
      className="overflow-hidden bg-primary py-8"
    >
      <div className="flex w-max animate-marquee items-center gap-12 hover:[animation-play-state:paused]">
        {[...logos, ...logos].map((src, i) => (
          <div key={i} className="flex shrink-0 items-center px-6">
            <Image
              src={src}
              alt="Partenaire du duathlon d'Andrésy"
              width={150}
              height={60}
              className="h-14 w-auto object-contain brightness-0 invert opacity-80"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
