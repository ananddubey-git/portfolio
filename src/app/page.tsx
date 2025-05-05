'use client'

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center sm:text-left sm:items-start gap-8">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Hi, I’m <span className="text-blue-600">Anand Dubey</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          A passionate full-stack developer focused on building performant, scalable, and beautiful web apps using Next.js, TypeScript, Redux, and Tailwind CSS.
        </p>
      </div>

      <div className="flex gap-4 mt-6">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
