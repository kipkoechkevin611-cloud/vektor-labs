import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07111F]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
