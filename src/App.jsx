import AboutMe from './components/AboutMe';
import Education from './components/Education';
import FeaturedProjects from './components/FeaturedProjects';
import ContactInfo from './components/ContactInfo';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl font-extrabold text-indigo-400">Luke Chambers' Portfolio</h1>
      </header>

      <main>
        <AboutMe />
        <Education />
        <FeaturedProjects />
        <ContactInfo />
      </main>

      <footer className="max-w-4xl mx-auto mt-12 text-center text-gray-500">
        © {new Date().getFullYear()} Luke Chambers. All rights reserved.
      </footer>
    </div>
  );
}
