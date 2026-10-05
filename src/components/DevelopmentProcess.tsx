export default function DevelopmentProcess() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understand the business, audience and project requirements.',
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Define the structure, features and technical approach.',
    },
    {
      number: '03',
      title: 'Design & Development',
      description: 'Build the website/application with responsive design and modern technology.',
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Test responsiveness, functionality, forms, performance and user experience.',
    },
    {
      number: '05',
      title: 'Launch',
      description: 'Deploy the completed project and connect the required domain/services.',
    },
    {
      number: '06',
      title: 'Support',
      description: 'Provide maintenance and future improvements where required.',
    },
  ]

  return (
    <section className="py-24 bg-[#0D1B2A]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Development Process
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A structured approach to delivering successful projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#07111F] p-8 rounded-xl border border-white/10 hover:border-[#2F80FF]/50 transition-colors"
            >
              <div className="text-4xl font-bold text-[#2F80FF] mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
