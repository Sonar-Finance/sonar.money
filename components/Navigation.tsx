import { cn } from "@/lib/utils"

export default function Navigation() {
  return (
    <nav className={cn("w-full py-6", "flex justify-center items-center")}>
      <div className="max-w-7xl w-full px-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Sonar</h1>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
            Sign In
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
