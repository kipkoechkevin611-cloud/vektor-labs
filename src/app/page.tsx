import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import About from '@/components/About'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'
import DevelopmentProcess from '@/components/DevelopmentProcess'
import Technologies from '@/components/Technologies'
import LeadCTA from '@/components/LeadCTA'
import ContactInfo from '@/components/ContactInfo'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <WhyWorkWithMe />
      <DevelopmentProcess />
      <Technologies />
      <LeadCTA />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </main>
  )
}
