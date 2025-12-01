import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TechStrip } from "@/components/tech-strip"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { PackagesSection } from "@/components/packages-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechStrip />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ProcessSection />
      <AboutSection />
      <PackagesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
