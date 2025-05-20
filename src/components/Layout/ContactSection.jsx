const ContactSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">Contact</h2>
      <form className="bg-white rounded-xl shadow p-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-field"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-field"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="input-field"
            placeholder="Type your message..."
            required
          />
        </div>
        <button
          type="submit"
          className="btn-primary w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
