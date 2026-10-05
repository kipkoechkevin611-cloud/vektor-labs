import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import LeadCTA from '@/components/LeadCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Projects | Vektor Labs - Portfolio',
  description: 'View featured projects by Vektor Labs including Majesty Compucare Limited, Career Account Support, and TopTank Kenya.',
}

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <Projects />
      <LeadCTA />
      <Footer />
    </main>
  )
}
