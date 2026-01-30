import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BrandStorySection } from "@/components/brand-story-section"
import { ValuesSection } from "@/components/values-section"
import { TeamSection } from "@/components/team-section"
import { CollectionSection } from "@/components/collection-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BrandStorySection />
      <ValuesSection />
      <TeamSection />
      <CollectionSection />
      <CTASection />
      <Footer />
    </main>
  )
}
