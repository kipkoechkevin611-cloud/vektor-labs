import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Vektor Labs | Full-Stack Development & Digital Solutions',
  description: 'Vektor Labs - Professional full-stack development and digital solutions. Owner Kevin Kipkoech builds websites, e-commerce platforms, and custom digital solutions for businesses.',
  keywords: ['Vektor Labs', 'web developer Kenya', 'full-stack developer Kenya', 'website developer Kenya', 'e-commerce developer Kenya', 'business website developer', 'web development services'],
  authors: [{ name: 'Kevin Kipkoech' }],
  openGraph: {
    title: 'Vektor Labs | Full-Stack Development & Digital Solutions',
    description: 'Vektor Labs - Building professional websites, e-commerce platforms, and custom digital solutions for businesses.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vektor Labs | Full-Stack Development & Digital Solutions',
    description: 'Vektor Labs - Building professional websites, e-commerce platforms, and custom digital solutions for businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
