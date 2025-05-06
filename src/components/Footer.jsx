export default function Footer() {
  return (
    <footer className="w-full px-6 py-4 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Anand.dev. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-400 transition">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
