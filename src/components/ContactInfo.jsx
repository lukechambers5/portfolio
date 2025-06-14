export default function ContactInfo() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md my-8">
      <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
      <ul className="space-y-2 text-lg">
        {/* Replace with your contact info */}
        <li>Email: <a href="mailto:your.email@example.com" className="underline hover:text-indigo-300">your.email@example.com</a></li>
        <li>Phone: (123) 456-7890</li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">linkedin.com/in/yourprofile</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-300">github.com/yourusername</a></li>
      </ul>
    </section>
  );
}
