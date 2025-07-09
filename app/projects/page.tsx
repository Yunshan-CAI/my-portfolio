import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-4 md:space-y-4">
          <h1 className="text-1xl leading-8 font-medium tracking-tight text-gray-600 sm:text-3xl sm:leading-9 md:text-4xl md:leading-10 dark:text-gray-400">
            Projects
          </h1>
        </div>
        <div className="container py-6">
          <div className="space-y-16">
            {projectsData.map((d) => (
              <div key={d.title} className="group">
                <div className="flex flex-col items-start gap-8 md:flex-row">
                  {/* Project Image/Logo */}
                  <div className="w-full flex-shrink-0 md:w-80">
                    {d.imgSrc ? (
                      <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-50 md:h-52 dark:bg-gray-800">
                        <Image
                          src={d.imgSrc}
                          alt={d.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 320px"
                        />
                      </div>
                    ) : (
                      <div className="flex h-48 w-full items-center justify-center rounded-lg bg-gray-100 md:h-52 dark:bg-gray-800">
                        <span className="text-4xl font-bold text-gray-400">
                          {d.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 space-y-4">
                    <h2 className="group-hover:text-primary-500 text-2xl font-bold text-gray-600 transition-colors duration-300 md:text-3xl dark:text-gray-400">
                      {d.title}
                    </h2>

                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                      {d.description}
                    </p>

                    {d.href && (
                      <div className="pt-2">
                        <a
                          href={d.href}
                          className="text-primary-500 hover:text-primary-600 inline-flex items-center font-medium transition-colors duration-200"
                          target={d.href.startsWith('http') ? '_blank' : '_self'}
                          rel={d.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          View project
                          <svg
                            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
