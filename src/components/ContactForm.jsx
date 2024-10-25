'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Sending...' });

    // TODO: Implement actual form submission
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you for your message. We\'ll get back to you soon!'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-secondary/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-secondary/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-secondary/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Your phone number (optional)"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-secondary/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="How can we help?"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 rounded-lg border border-secondary/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Tell us more about what you need..."
        />
      </div>

      {/* Status Message */}
      {status.message && (
        <div className={`p-4 rounded-lg ${
          status.type === 'success' ? 'bg-green-50 text-green-800' : 
          status.type === 'error' ? 'bg-red-50 text-red-800' : 
          'bg-blue-50 text-blue-800'
        }`}>
          {status.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
