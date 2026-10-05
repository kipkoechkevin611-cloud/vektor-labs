import Navbar from '@/components/Navbar'
import About from '@/components/About'
import WhyWorkWithMe from '@/components/WhyWorkWithMe'
import Technologies from '@/components/Technologies'
import LeadCTA from '@/components/LeadCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About | Vektor Labs - Full-Stack Development',
  description: 'Learn more about Vektor Labs, a full-stack development and digital solutions company owned by Kevin Kipkoech, specializing in professional websites, e-commerce platforms and custom digital solutions.',
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <About />
      <WhyWorkWithMe />
      <Technologies />
      <LeadCTA />
      <Footer />
    </main>
  )
}
