import { contactLinks } from '@/data/contact'
import { education } from '@/data/education'
import { experience } from '@/data/experience'
import { skills } from '@/data/skills'
import clsx from 'clsx'

export default function Curriculo() {
  return (
    <main className="container mx-auto pb-14">
      <div className="shadow p-20 px-28 rounded-lg bg-white dark:bg-gray-600/30 dark:text-gray-200">
        <header className="flex justify-between items-center">
          <h1 className="text-4xl font-semibold leading-10 text-gray-800 dark:text-gray-300">
            Vinícios Barbosa
          </h1>
          <div className="flex flex-col gap-0.5">
            {contactLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="font-light text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </header>
        <section className="mt-24 flex gap-20">
          <div className="w-2/12">
            <h2 className="uppercase font-light">Experiência</h2>
          </div>
          <div className="w-10/12">
            {experience.map((item, index) => (
              <section key={index} className={clsx({ 'mt-5': index > 0 })}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
                  {item.title} - {item.company}
                </h3>
                <span className="text-gray-500 dark:text-gray-200 font-light">
                  {item.date}
                </span>

                <p className="text-gray-600 dark:text-gray-200 mt-2 leading-relaxed">
                  {item.topics[0]}
                </p>

                {item.topics.slice(1).map((topic) => (
                  <p
                    key={topic}
                    className="text-gray-600 dark:text-gray-200 mt-2 leading-relaxed"
                  >
                    - {topic}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </section>
        <section className="mt-10 flex gap-20">
          <div className="w-2/12">
            <h2 className="uppercase font-light">Educação</h2>
          </div>
          <div className="w-10/12">
            {education.map((item, index) => (
              <section key={index} className={clsx({ 'mt-4': index > 0 })}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
                  {item.institution}
                </h3>
                <span className="text-gray-500 dark:text-gray-200 font-light">
                  {item.date}
                </span>
                <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-10 flex gap-20">
          <div className="w-2/12">
            <h2 className="uppercase font-light">Habilidades</h2>
          </div>
          <div className="w-10/12">
            <div className="flex flex-col gap-3">
              {skills.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
                    {item.title}
                  </h3>
                  <div className="flex gap-2">
                    <span className="text-gray-600 dark:text-gray-200">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
