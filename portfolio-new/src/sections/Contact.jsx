const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#FAF7F4]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-3">Contact Me</h2>
        <p className="text-gray-600 mb-10">
          Have a project in mind or just want to connect? I’d love to hear from you.
        </p>

        <form
          action="mailto:pydi.srivaishnavi2006@gmail.com"
          method="POST"
          encType="text/plain"
          className="
            max-w-lg
            mx-auto
            bg-white
            rounded-2xl
            p-8
            shadow-sm
            border
          "
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="
              w-full
              bg-black
              text-white
              py-3
              rounded-lg
              transition-all
              duration-300
              hover:bg-gray-800
            "
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
