import { cn } from "@/lib/utils"

export default function MainBody() {
  return (
    <main
      className={cn(
        "flex-1 w-full",
        "flex flex-col justify-center items-center",
        "px-6 py-20"
      )}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold",
              "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            )}
          >
            Sonar
          </h1>

          <p
            className={cn(
              "text-lg md:text-xl text-gray-600 max-w-2xl mx-auto",
              "leading-relaxed"
            )}
          >
            The human-powered prediction market on Worldchain — turning
            collective foresight into tradable truth
          </p>
        </div>

        {/* CTA Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className={cn(
                "px-8 py-4 bg-blue-600 text-white rounded-lg",
                "hover:bg-blue-700 transition-all duration-200",
                "text-lg font-semibold shadow-lg hover:shadow-xl",
                "transform hover:scale-105"
              )}
            >
              Start Trading
            </button>
            <button
              className={cn(
                "px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg",
                "hover:border-gray-400 hover:bg-gray-50 transition-all duration-200",
                "text-lg font-semibold"
              )}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
