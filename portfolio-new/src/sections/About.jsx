const About = () => {
  const points = [
    "I am a Computer Science and Artificial Intelligence undergraduate, interested in building meaningful and practical software solutions.",
    "My journey into programming began with C and Python, where I developed strong logical thinking and problem-solving fundamentals.",
    "Over time, I transitioned into full-stack development, working with modern web technologies to build complete applications.",
    "I enjoy working on UI design, focusing on clean layouts, spacing, and subtle interactions that enhance user experience.",
    "Currently, I am exploring Artificial Intelligence, particularly Deep Learning and Natural Language Processing (NLP).",
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF7F4]">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid gap-6">
          {points.map((text, i) => (
            <div
              key={i}
              className="
                bg-white
                border
                rounded-2xl
                p-6
                text-gray-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
