export default function ContactInfo() {
  return (
    <section className="py-24 bg-[#07111F]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Contact Us
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <div className="space-y-2">
                <a
                  href="tel:0740272542"
                  className="text-[#2F80FF] hover:text-[#2F80FF]/80 text-lg transition-colors"
                >
                  0740272542
                </a>
                <br />
                <a
                  href="tel:0798350035"
                  className="text-[#2F80FF] hover:text-[#2F80FF]/80 text-lg transition-colors"
                >
                  0798350035
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a
                href="mailto:kevinkips611@gmail.com"
                className="text-[#2F80FF] hover:text-[#2F80FF]/80 text-lg transition-colors"
              >
                kevinkips611@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
