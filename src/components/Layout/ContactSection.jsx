import React from 'react';

const ContactSection = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/path-to-your-image.jpg")', // Add your background image
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg">
            The Ultimate Guide To Ace SDE Interviews.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h3 className="text-xl text-white font-semibold mb-6">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your Phone Number"
                  className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter your Subject"
                  className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full bg-transparent border border-gray-600 text-white px-4 py-3 rounded focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>

              {/* reCAPTCHA */}
              <div className="mb-4">
                {/* Add your reCAPTCHA component here */}
              </div>

              <button
                type="submit"
                className="w-32 bg-black text-white px-6 py-3 rounded flex items-center justify-between hover:bg-gray-900 transition-colors"
              >
                Submit
                <span className="ml-2">→</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-[#3B4BDF] text-white p-8 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="mb-8">
                <a
                  href="mailto:support@codehelp.in"
                  className="text-white hover:underline flex items-center mb-4"
                >
                  <span className="text-lg">support@codehelp.in</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">YouTube</span>
                {/* Add YouTube icon */}
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                {/* Add LinkedIn icon */}
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Telegram</span>
                {/* Add Telegram icon */}
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Discord</span>
                {/* Add Discord icon */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
