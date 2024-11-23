'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNo: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold relative">
        Get in Touch
        <span className="absolute -bottom-2 left-0 w-32 h-1 bg-cyan-400/20"></span>
      </h2>
      <p className="text-gray-400">
        If you have any inquiries, please feel free to reach out. You can contact us via email at{' '}
        <a href="mailto:prasenjitt4e@gmail.com" className="text-cyan-400 hover:underline">
          prasenjitt4e@gmail.com
        </a>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone No"
            className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400"
            value={formData.phoneNo}
            onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-400"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 hover:border-cyan-400 transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

