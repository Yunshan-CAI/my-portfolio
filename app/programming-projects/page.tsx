import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Programming Projects' })

export default function ProgrammingProjects() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-4 md:space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Programming Projects
        </h1>
      </div>

      <div className="container py-6">
        <div className="space-y-8">
          <div className="border-b border-gray-200 pb-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              QuickBite Delivery 🍽️
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              A restaurant delivery platform backend built with Spring Boot. Features comprehensive
              backstage management for dishes, categories, and orders, with Redis caching for
              improved performance and transactional operations for data integrity.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Java
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Spring Boot
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                MyBatis-Plus
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Redis
              </span>
            </div>
            <a
              href="https://github.com/Yunshan-CAI/QuickBite_Delivery"
              target="_blank"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              View on GitHub
            </a>
          </div>

          <div className="border-b border-gray-200 pb-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Secret Whisper 🕵️‍♂️🔐
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              A web application that allows users to share and manage their secrets. Features dual
              authentication with username/password and Google OAuth2.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                html
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                CSS
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Node.js
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Express.js
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                PostgreSQL
              </span>
            </div>
            <a
              href="https://github.com/Yunshan-CAI/Secret-Whisper"
              target="_blank"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              View on GitHub
            </a>
          </div>

          <div className="border-b border-gray-200 pb-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Puzzle Game 🎬🧩
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              A puzzle game designed for movie lovers! Test your knowledge of classic cinema while
              solving challenging puzzles featuring iconic movie scenes. Includes save and load
              functionality, scene switching, and famous movie quotes.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Java
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Swing
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Maven
              </span>
            </div>
            <a
              href="https://github.com/Yunshan-CAI/Puzzle-Game"
              target="_blank"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
