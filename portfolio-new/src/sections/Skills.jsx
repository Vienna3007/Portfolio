const SkillCard = ({ title, skills }) => (
  <div
    className="
      bg-white
      border
      rounded-2xl
      p-6
      transition-all
      duration-300
      hover:shadow-lg
      hover:-translate-y-1
    "
  >
    <h3 className="text-xl font-semibold mb-5 text-gray-800">
      {title}
    </h3>

    <ul className="space-y-3">
      {skills.map((skill, i) => (
        <li
          key={i}
          className="
            flex items-center
            px-3 py-2
            rounded-lg
            text-gray-600

            transition-all
            duration-300
            hover:bg-blue-50
            hover:text-blue-600
            hover:translate-x-2
          "
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#FAF7F4]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard
            title="Problem Solving"
            skills={[
              "Data Structures & Algorithms",
              "Logical Thinking",
              "Debugging & Optimization",
              "Time & Space Complexity",
            ]}
          />

          <SkillCard
            title="Full Stack Development"
            skills={[
              "HTML, CSS, JavaScript",
              "React",
              "Tailwind CSS",
              "REST APIs",
            ]}
          />

          <SkillCard
            title="Artificial Intelligence"
            skills={[
              "Python for AI",
              "Machine Learning",
              "Deep Learning",
              "Natural Language Processing",
            ]}
          />

          <SkillCard
            title="Tech & Tools"
            skills={[
              "Git & GitHub",
              "VS Code",
              "Postman",
              "Figma",
            ]}
          />
        </div>

      </div>
    </section>
  );
};

export default Skills;
