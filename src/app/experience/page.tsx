// src/app/about/page.tsx
export default function ExperiencePage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">My Experiences</h1>
        <ul className="space-y-4">
          <li className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">Job Title</h2>
            <p className="text-gray-600">Company Name - Duration</p>
            <p className="text-gray-600 mt-2">Description of the role and achievements.</p>
          </li>
          {/* Add more experiences as needed */}
        </ul>
      </div>
    </section>
  );
}
