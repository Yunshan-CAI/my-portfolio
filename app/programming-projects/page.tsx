import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Programming Projects' })

const programmingProjectsData = [
  {
    title: 'Personal Website',
    description: 'This website built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'Tailwind CSS', 'React'],
  },
  {
    title: 'Example Project',
    description: 'A placeholder for future programming projects.',
    technologies: ['Coming Soon'],
  },
]

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
          {programmingProjectsData.map((project, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 dark:border-gray-700">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                {project.title}
              </h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
