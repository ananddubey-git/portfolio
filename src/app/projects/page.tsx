// src/app/about/page.tsx
export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Project Card */}
          <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Project Title</h2>
            <p className="text-gray-600 mb-4">Short description of the project.</p>
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              View Details
            </a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
}
