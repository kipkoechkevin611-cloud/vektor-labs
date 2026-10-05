export default function Technologies() {
  const categories = [
    {
      name: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      name: 'Backend',
      technologies: ['Node.js', 'PHP', 'Python', 'REST APIs'],
    },
    {
      name: 'Database',
      technologies: ['MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      name: 'Infrastructure',
      technologies: ['Git', 'GitHub', 'Vercel', 'Cloud services'],
    },
    {
      name: 'Integrations',
      technologies: ['Payment APIs', 'Email APIs', 'Third-party APIs'],
    },
  ]

  return (
    <section className="py-24 bg-[#07111F]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Modern tools and frameworks I use to build digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#0D1B2A] p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#2F80FF]/20 text-[#2F80FF] px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
