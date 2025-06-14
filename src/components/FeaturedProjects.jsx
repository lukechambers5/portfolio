const projects = [
  {
    title: "Project One",
    description: "Short description of project one.",
    link: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description: "Short description of project two.",
    link: "https://github.com/yourusername/project-two",
  },
  // Add more projects here
];

export default function FeaturedProjects() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md my-8">
      <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(({ title, description, link }, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="mb-4">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
