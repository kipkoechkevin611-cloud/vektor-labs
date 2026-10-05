export default function WhyWorkWithMe() {
  const reasons = [
    {
      title: 'Business-focused development',
      description: 'I build around the client\'s goals rather than simply writing code.',
    },
    {
      title: 'Responsive by default',
      description: 'Websites should work properly across phones, tablets and desktops.',
    },
    {
      title: 'Modern technology',
      description: 'Use modern frameworks and scalable architecture.',
    },
    {
      title: 'Clear communication',
      description: 'Clients should understand what is being built and what happens next.',
    },
    {
      title: 'Performance',
      description: 'Build fast, optimized websites.',
    },
    {
      title: 'Long-term support',
      description: 'The relationship should not end when the website goes live.',
    },
  ]

  return (
    <section className="py-24 bg-[#07111F]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Work With Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Client-focused approach to every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-[#2F80FF] rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
