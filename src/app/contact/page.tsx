import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact | Vektor Labs - Start Your Project',
  description: 'Contact Vektor Labs to start your web development project. Get a professional website, e-commerce platform or custom digital solution.',
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </main>
  )
}
