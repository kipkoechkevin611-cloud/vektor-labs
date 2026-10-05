import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#07111F] via-[#0D1B2A] to-[#07111F] opacity-50" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#2F80FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#FF8A3D]/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Building Digital Experiences That Help Businesses Grow
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Vektor Labs designs and develops fast, professional websites, e-commerce platforms and custom digital solutions that help businesses establish a stronger online presence and turn visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact"
              className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              Start Your Project
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              View Our Work
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            Vektor Labs • Full-Stack Development • E-Commerce • Business Websites • Digital Solutions
          </p>
        </div>
      </div>
    </section>
  )
}
