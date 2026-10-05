export default function Services() {
  const services = [
    {
      title: 'Business Websites',
      description: 'Professional responsive websites designed to establish credibility and generate enquiries.',
    },
    {
      title: 'E-Commerce Development',
      description: 'Online stores with product catalogs, shopping carts, checkout and payment integrations.',
    },
    {
      title: 'Custom Web Applications',
      description: 'Business systems and web applications designed around specific operational requirements.',
    },
    {
      title: 'API & Payment Integration',
      description: 'Integration with APIs, payment platforms, messaging systems and third-party services.',
    },
    {
      title: 'Website Redesign',
      description: 'Modernizing outdated websites into faster, cleaner and more conversion-focused experiences.',
    },
    {
      title: 'Website Maintenance',
      description: 'Ongoing updates, improvements, troubleshooting, security and technical support.',
    },
  ]

  return (
    <section className="py-24 bg-[#0D1B2A]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#07111F] p-8 rounded-xl border border-white/10 hover:border-[#2F80FF]/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
