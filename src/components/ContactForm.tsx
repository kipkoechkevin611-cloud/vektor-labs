'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    projectDescription: '',
    additionalInfo: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      setSubmitStatus('success')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        projectDescription: '',
        additionalInfo: '',
      })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('An error occurred. Please try again or contact us at 0740272542, 0798350035, or kevinkips611@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-[#0D1B2A]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Your Project
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Tell us about your project and we'll get back to you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-400">
              <a href="tel:0740272542" className="hover:text-white transition-colors">
                0740272542
              </a>
              <span>•</span>
              <a href="tel:0798350035" className="hover:text-white transition-colors">
                0798350035
              </a>
              <span>•</span>
              <a href="mailto:kevinkips611@gmail.com" className="hover:text-white transition-colors">
                kevinkips611@gmail.com
              </a>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-500/20 border border-green-500/50 text-green-200 p-6 rounded-lg mb-8">
              Thank you. Your project request has been received. I'll review the details and get back to you.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-6 rounded-lg mb-8">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#07111F] border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#2F80FF] transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#07111F] border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#2F80FF] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#07111F] border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#2F80FF] transition-colors"
                  placeholder="+254 7XX XXX XXX"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company / Business
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#07111F] border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#2F80FF] transition-colors"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  What do you need? *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#07111F] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#2F80FF] transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="Business Website">Business Website</option>
                  <option value="E-Commerce Website">E-Commerce Website</option>
                  <option value="Custom Web Application">Custom Web Application</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="API Integration">API Integration</option>
                  <option value="Payment Integration">Payment Integration</option>
                  <option value="Website Maintenance">Website Maintenance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#07111F] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#2F80FF] transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="Under KSh 30,000">Under KSh 30,000</option>
                  <option value="KSh 30,000 – 75,000">KSh 30,000 – 75,000</option>
                  <option value="KSh 75,000 – 150,000">KSh 75,000 – 150,000</option>
                  <option value="KSh 150,000+">KSh 150,000+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                Timeline
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary-bg border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue transition-colors"
                placeholder="e.g., 2-3 weeks, 1 month, etc."
              />
            </div>

            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-300 mb-2">
                Project Description *
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                required
                rows={5}
                value={formData.projectDescription}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary-bg border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue transition-colors resize-none"
                placeholder="Describe your project, goals, and any specific requirements..."
              />
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={3}
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary-bg border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue transition-colors resize-none"
                placeholder="Any other details you'd like to share..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Project Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
