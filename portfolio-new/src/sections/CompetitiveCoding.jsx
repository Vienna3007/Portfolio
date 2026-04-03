const CompetitiveCoding = () => {
  return (
    <section id="competitive" className="py-24 bg-[#FAF7F4]">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Competitive Coding
        </h2>

        <div className="bg-white border rounded-2xl p-8">
          <ul className="space-y-4 text-gray-700">
            {[
              "Problem Solving using Data Structures & Algorithms",
              "LeetCode – Practice & Interview Preparation",
              "CodeChef – Competitive Programming",
              "HackerRank – Skill Assessments",
              "GitHub – Code & Practice Repositories",
            ].map((item, i) => (
              <li
                key={i}
                className="
                  flex items-center
                  px-4 py-3
                  rounded-lg
                  transition-all
                  duration-300
                  hover:bg-blue-50
                  hover:text-blue-600
                  hover:translate-x-2
                "
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CompetitiveCoding;
