import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      name: 'Majesty Compucare Limited',
      description: 'Professional website for a computer and IT services company.',
      website: 'https://www.majestycompucarelimited.com/',
      technologies: ['Web Development', 'Responsive Design'],
    },
    {
      name: 'Career Account Support',
      description: 'Online platform providing career and account support services.',
      website: 'https://www.careeraccountsupport.com/',
      technologies: ['Web Development', 'User Authentication'],
    },
    {
      name: 'TopTank Kenya',
      description: 'Water tank solutions company website showcasing products and services.',
      website: 'https://www.toptankkenya.co.ke/',
      technologies: ['Web Development', 'Product Catalog'],
    },
  ]

  return (
    <section className="py-24 bg-[#07111F]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real websites and digital solutions we've built for clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0D1B2A] p-8 rounded-xl border border-white/10 hover:border-[#2F80FF]/50 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-[#0D1B2A] to-[#07111F] rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Project Screenshot</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.name}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-[#2F80FF]/20 text-[#2F80FF] px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#2F80FF] hover:text-[#2F80FF]/80 font-medium transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block border-2 border-[#2F80FF] text-[#2F80FF] hover:bg-[#2F80FF] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
