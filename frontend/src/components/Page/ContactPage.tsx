"use client"
import { useState } from 'react';
import Navbar from '../ui/nav';
import FooterDemo from '../ui/FooterDemo';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f8fb]">
      <Navbar />
      <main className="flex-1 flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-8">
              Email, call, or complete the form to learn how Zordie can solve your AI needs.
            </p>
            <div className="mb-6">
              <div className="text-gray-800 text-lg mb-2">support@zordie.com</div>
              <div className="text-gray-800 text-lg mb-2">+916388404088</div>
              <a href="mailto:support@zordie.com" className="underline text-blue-700 hover:text-blue-900">Customer Support</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div>
                <div className="font-semibold mb-2">Customer Support</div>
                <div className="text-gray-600 text-sm">
                  Our support team is available around the clock to address any concerns or queries you may have.
                </div>
              </div>
              <div>
                <div className="font-semibold mb-2">Feedback and Suggestions</div>
                <div className="text-gray-600 text-sm">
                  We value your feedback and are continuously working to improve Zordie. Your input is crucial in shaping our future.
                </div>
              </div>
              <div>
                <div className="font-semibold mb-2">Media Inquiries</div>
                <div className="text-gray-600 text-sm">
                  For media or press, contact us at <a href="mailto:media@zordie.ai" className="underline text-blue-700">media@zordie.ai</a>.
                </div>
              </div>
            </div>
          </div>
          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <p className="text-gray-500 mb-6">You can reach us anytime</p>
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-1/2 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-1/2 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={4}
                  maxLength={120}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
                <div className="text-xs text-gray-500 text-center mt-2">
                  By contacting us, you agree to our <a href="#" className="underline font-semibold">Terms of service</a> and <a href="#" className="underline font-semibold">Privacy Policy</a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
        {/* FAQ Section */}
        <div className="w-full max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is Zordie AI?</h3>
              <p className="text-gray-600">Zordie AI is a platform that provides intelligent automation solutions powered by artificial intelligence to enhance productivity and streamline workflows.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I get started with Zordie AI?</h3>
              <p className="text-gray-600">You can sign up for pre-access on our website. Once approved, you'll receive an email with instructions on how to set up your account and start using our platform.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial available?</h3>
              <p className="text-gray-600">Yes, we offer a limited free trial for new users. You can explore our core features and see how Zordie AI can benefit your workflow before committing to a subscription.</p>
            </div>
          </div>
        </div>
      </main>
      <FooterDemo />
    </div>
  );
};

export default ContactPage;