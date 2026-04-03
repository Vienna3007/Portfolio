const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#FAF7F4]">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


          <ProjectCard
            title="StudyWiz"
            description="Student productivity dashboard integrating calendar scheduling, habit tracking and task planning. Built using React and Firebase authentication with cloud synchronization."
            demo="https://studywiz.vercel.app"
            github="https://github.com/Vienna3007/engineering-hub"
          />


          <ProjectCard
            title="Sentiment Analysis using NLP"
            description="Machine learning model for sentiment classification using NLP preprocessing techniques implemented using Python and Scikit-learn."
            github="https://github.com/Vienna3007"
          />


          <ProjectCard
            title="AI Resume Analyzer"
            description="AI-powered resume evaluation system using NLP keyword extraction and ATS-style scoring logic built with Python and Streamlit."
            demo="https://ai-resume-analyzer-by-yv.streamlit.app/"
            github="https://github.com/yagyeshVyas/ai-resume-analyzer"
          />


          <ProjectCard
            title="Smart Expense Tracker"
            description="Expense tracking web application with category-based analytics dashboard built using React and Firebase integration."
            demo="https://pradeish29.github.io/ExpenseTracker/"
            github="https://github.com/Vienna3007/ExpenseTracker"
          />


          <ProjectCard
            title="LinkedIn Clone"
            description="Professional networking platform supporting authentication and post sharing features using Firebase backend services."
            demo="https://linkedinclone-ac.web.app"
            github="https://github.com/Vienna3007/LinkedinClone"
          />


          <ProjectCard
            title="Course Recommendation System"
            description="Machine learning recommendation system suggesting courses based on user interests using Pandas and Scikit-learn."
            github="https://github.com/Vienna3007/Coursera-Course-Recommendation-System"
          />


          <ProjectCard
            title="Realtime Chat Application"
            description="Realtime messaging application supporting instant communication between users using Firebase realtime database."
            demo="https://chat.mnaveedk.com"
            github="https://github.com/Vienna3007/Realtime-Chat-app"
          />


        </div>

      </div>
    </section>
  );
};



const ProjectCard = ({ title, description, demo, github }) => {
  return (
    <div
      className="
        bg-white
        border
        rounded-2xl
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <div className="flex gap-6 text-sm text-blue-600">

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Demo →
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub →
          </a>
        )}

      </div>
    </div>
  );
};


export default Projects;