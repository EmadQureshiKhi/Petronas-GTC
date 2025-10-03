import Navbar from "@/components/navbar"
import { HeroSection } from "@/components/about/hero-section"
import { StorySection } from "@/components/about/story-section"
import { MissionVisionSection } from "@/components/about/mission-vision"
import { IndustriesSection } from "@/components/about/industries-section"
import { ValuesSection } from "@/components/about/values-section"
import { CTASection } from "@/components/about/cta-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        <StorySection />
        <MissionVisionSection />
        <IndustriesSection />
        <ValuesSection />
        <CTASection />
      </main>
    </div>
  )
}