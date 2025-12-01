import Navbar from "@/components/navbar"
import { HeroSection } from "@/components/services-clients/hero-section"
import { ServicesGrid } from "@/components/services-clients/services-grid"
import { ProcessSection } from "@/components/services-clients/process-section"
import { StatsSection } from "@/components/services-clients/stats-section"
import { IndustriesSection } from "@/components/services-clients/industries-section"
import { CTASection } from "@/components/services-clients/cta-section"

export default function ServicesClientsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        <ServicesGrid />
        <ProcessSection />
        <StatsSection />
        <IndustriesSection />
        <CTASection />
      </main>
    </div>
  )
}