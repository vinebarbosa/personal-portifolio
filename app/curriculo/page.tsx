const contactLinks = [
  {
    label: 'viniciosbarbosa.dev',
    url: 'https://viniciosbarbosa.dev',
  },
  {
    label: 'viniciosbarbosa.dev@gmail.com',
    url: 'mailto:viniciosbarbosa.dev@gmail.com',
  },
  {
    label: 'linkedin.com/in/vinebarbosabarbosa',
    url: 'https://linkedin.com/in/vinebarbosabarbosa',
  },
]

const experience = [
  {
    title: 'Engenheiro de Software Pleno',
    company: 'LAIS',
    date: 'Out 2022 - Atual Momento',
    topics: [
      `No LAIS (Laboratório de Inovação Tecnológica em Saúde), atuo na equipe de desenvolvimento de sistemas web voltados para a área da saúde, utilizados por hospitais, secretarias de saúde e pela população em geral. Desde que ingressei no LAIS, participei de diversos projetos e, como Engenheiro de Software, minhas principais responsabilidade até o momento foram:`,
      `Desenvolvimento do Regula+Saúde, um sistema que otimiza o acesso à saúde em hospitais e secretarias de saúde dos estados do Espírito Santo e Rio Grande do Norte. Através da organização e agilização do fluxo de pacientes, o sistema reduz significativamente o tempo de espera para consultas e exames, diminuindo filas e proporcionando um atendimento mais rápido e eficiente à população. Participei de todas as etapas desse projeto, desde a concepção até a entrega, utilizando tecnologias como React, Next.js, Bootstrap, PostgreSQL e Docker além de integrá-lo com o sistema do Governo Brasileiro (Gov.BR).`,
      `Participei ativamente na escolha de tecnologias e arquiteturas para os projetos em que estive envolvido. Além disso, desempenhei um papel crucial na orientação e capacitação de novos membros da equipe, estabelecendo processos e melhores práticas de desenvolvimento. Contribuí para a definição e implementação de testes automatizados, assegurando a qualidade do código e a estabilidade dos sistemas, utilizando ferramentas como Jest, React Testing Library e Cypress.`,
      `Trabalhei em conjunto com a equipe de DevOps, desenvolvendo scripts de integração contínua/distribuição contínua (CI/CD), garantindo a entrega automatizada e segura dos sistemas. Além disso,  mantive sistemas legados, realizando manutenções corretivas e evolutivas, garantindo que os sistemas estivessem sempre disponíveis e funcionando corretamente.`,
    ],
  },
]

export default function Curriculo() {
  return (
    <main className="container mx-auto">
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
          <div className="w-100">
            {experience.map((item, index) => (
              <section key={index}>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
                  {item.title} - {item.company}
                </h3>
                <span className="text-gray-500 dark:text-gray-200 font-light">
                  {item.date}
                </span>

                {item.topics.map((topic) => (
                  <p
                    key={topic}
                    className="text-gray-600 dark:text-gray-200 mt-3 text-justify leading-relaxed"
                  >
                    {topic}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
