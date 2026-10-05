import Link from 'next/link'

export default function LeadCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0D1B2A] to-[#07111F]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's turn your idea into a professional digital solution.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}
