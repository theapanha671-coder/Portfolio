import { useState } from 'react';
import axios from 'axios';
import { FaCheckCircle, FaEnvelope, FaExclamationCircle, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      await axios.post(`${apiUrl}/contact`, formData);
      setStatus({ type: 'success', message: "Message sent successfully! I\'ll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0f0d0a] py-24 text-[#f5efe6]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Get In Touch</h2>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-white">Let&apos;s Connect</h3>
            <p className="mt-4 text-sm leading-7 text-[#b9afa3]">
              I&apos;m always interested in new projects and opportunities. Reach out through the form or
              use the contact details below.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#d4a373]">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm text-[#b9afa3]">your@email.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#d4a373]">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-sm text-[#b9afa3]">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#d4a373]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-sm text-[#b9afa3]">San Francisco, CA, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="dark-input"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="dark-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="dark-input"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="dark-input resize-none"
                  placeholder="Your message..."
                />
              </div>

              {status && (
                <div
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-sm ${
                    status.type === 'success'
                      ? 'border-green-400/20 bg-green-400/10 text-green-100'
                      : 'border-red-400/20 bg-red-400/10 text-red-100'
                  }`}
                >
                  {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                  <p>{status.message}</p>
                </div>
              )}

              <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
