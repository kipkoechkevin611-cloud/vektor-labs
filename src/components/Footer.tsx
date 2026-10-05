import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#07111F] border-t border-white/10 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.jpeg"
                alt="Vektor Labs Logo"
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold text-white">
                Vektor Labs
              </h3>
            </div>
            <p className="text-gray-400 mb-2">
              Full-Stack Development & Digital Solutions
            </p>
            <p className="text-gray-400 mb-4">
              Owner: Kevin Kipkoech
            </p>
            <div className="space-y-2">
              <a
                href="mailto:kevinkips611@gmail.com"
                className="text-[#2F80FF] hover:text-[#2F80FF]/80 transition-colors block"
              >
                kevinkips611@gmail.com
              </a>
              <a
                href="tel:0740272542"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                0740272542
              </a>
              <a
                href="tel:0798350035"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                0798350035
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Business Websites</li>
              <li>E-Commerce Development</li>
              <li>Custom Web Applications</li>
              <li>API & Payment Integration</li>
              <li>Website Redesign</li>
              <li>Website Maintenance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>© 2026 Kevin Kipkoech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
