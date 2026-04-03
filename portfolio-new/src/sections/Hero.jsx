const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#FAF7F4] text-[#1F1F1F] flex flex-col items-center justify-center px-6">
      
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
        Hi, I’m <span className="text-[#C8A27A]">Sri Vaishnavi</span>
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl text-center mb-8">
        CSE (AI) undergraduate passionate about building clean, real-world software with modern technologies.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-[#1F1F1F] text-white rounded-lg hover:bg-black transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-[#C8A27A] rounded-lg hover:bg-[#C8A27A]/10 transition"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
};

export default Hero;
