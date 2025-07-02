import React from 'react';
import Image from 'next/image';


// Define the technical skills data (can be passed as props if needed for reusability)
const technicalSkills = [
  {
    title: "Frontend",
    description: "JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, HTML, CSS",
    link: "#frontend",
    icons: [
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    title: "Backend",
    description: "Node.js, Flask, Python, Java, C++, Supabase Edge Functions, AWS Lambda",
    link: "#backend",
    icons: [
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "AWS Lambda", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    ],
  },
  {
    title: "Database",
    description: "Supabase, PostgreSQL, SQLite, DynamoDB, SQL",
    link: "#database",
    icons: [
      { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      { name: "DynamoDB", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "SQL", src: "https://placehold.co/64x64.png?text=SQL&bg=333333&color=FFFFFF" },
    ],
  },
  {
    title: "Data & Scripting",
    description: "Pandas, NumPy, BeautifulSoup, Tableau",
    link: "#data",
    icons: [
      { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    ],
  },
  {
    title: "Tools",
    description: "Git, Docker, GitHub, VS Code, PyCharm, Power Automate, Office Scripts, PyInstaller",
    link: "#tools",
    icons: [
      { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "PyCharm", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
    ],
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-8">
              {category.icons.map((icon, iconIndex) => (
                <div key={iconIndex} className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    width={200}
                    height={200}
                    className="w-16 h-16 object-contain mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://placehold.co/64x64/333333/FFFFFF?text=${icon.name.charAt(0)}`;
                      target.alt = "Placeholder";
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