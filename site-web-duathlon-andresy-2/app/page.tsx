import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { EpreuveSection } from '@/components/epreuve-section'
import { ParcoursSection } from '@/components/parcours-section'
import { ProgrammeSection } from '@/components/programme-section'
import { AccesSection } from '@/components/acces-section'
import { InscriptionsSection } from '@/components/inscriptions-section'
import { ReglementSection } from '@/components/reglement-section'
import { BenevolesSection } from '@/components/benevoles-section'
import { FaqSection } from '@/components/faq-section'
import { PartenairesSection } from '@/components/partenaires-section'
// import { PartenairesBande } from '@/components/partenaires-bande'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <EpreuveSection />
        <ParcoursSection />
        <ProgrammeSection />
        <AccesSection />
        <InscriptionsSection />
        <ReglementSection />
        <BenevolesSection />
        <PartenairesSection />
        <FaqSection />
      </main>
       {/* <PartenairesBande /> */}
      <SiteFooter />
    </>
  )
}
