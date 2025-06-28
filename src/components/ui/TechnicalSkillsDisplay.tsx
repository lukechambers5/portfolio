import React from 'react';

// Define the technical skills data (can be passed as props if needed for reusability)
const technicalSkills = [
  {
    title: "Frontend",
    description: "Next.js, React, Tailwind CSS, HTML, CSS, JavaScript, TypeScript",
    link: "#frontend",
    icons: [
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ]
  },
  {
    title: "Backend",
    description: "Flask, Python, Supabase Edge Functions (Docker), AWS Lambda, Java, C++",
    link: "#backend",
    icons: [
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS Lambda", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }, // Closest for AWS Lambda
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    ]
  },
  {
    title: "Database",
    description: "PostgreSQL, SQLite, DynamoDB, SQLAlchemy, Supabase, PgAdmin",
    link: "#database",
    icons: [
      { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "DynamoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }, // Closest for DynamoDB
      { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ]
  },
  {
    title: "Tools",
    description: "Git, Docker, Tableau, PyCharm, Visual Studio, Power Automate, Office Scripts",
    link: "#tools",
    icons: [
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Visual Studio", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-original.svg" },
      { name: "PyCharm", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
      { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Google Cloud", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    ]
  },
];

// TechnicalSkillsDisplay Component
const TechnicalSkillsDisplay = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 p-8 font-inter flex flex-col items-center justify-center">

      <div className="w-full max-w-5xl">
        {technicalSkills.map((category, index) => (
          <div key={index} className="mb-8 last:mb-0">
            {/* Category Title */}
            <h2 className="text-2xl font-semibold mb-6 text-gray-400 uppercase tracking-wide">
              {category.title}
            </h2>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
              {category.icons.map((icon, iconIndex) => (
                <div key={iconIndex} className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className="w-16 h-16 object-contain mb-2"
                    onError={(e: any) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/64x64/333333/FFFFFF?text=${icon.name.charAt(0)}`;
                      e.target.alt = "Placeholder";
                    }}

                  />
                  <p className="text-sm text-center text-gray-300">{icon.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkillsDisplay;