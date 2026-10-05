import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import LeadCTA from '@/components/LeadCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Services | Vektor Labs - Web Development Services',
  description: 'Vektor Labs offers professional web development services including business websites, e-commerce development, custom web applications, API integration, website redesign and maintenance.',
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <Services />
      <LeadCTA />
      <Footer />
    </main>
  )
}
