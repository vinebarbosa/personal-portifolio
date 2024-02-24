import Link from 'next/link'

import ResumeButton from './ResumeButton'

export function Header() {
  return (
    <header className="container mx-auto py-4 mb-14">
      <nav className="flex justify-between items-center py-2">
        <Link href="/" className="font-medium text-xl">
          Vinícios Barbosa
        </Link>

        <ul className="flex gap-8">
          {/* <li>
            <Link href="#Projetos" className="text-sm">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="text-sm">
              Sobre
            </Link>
          </li> */}
          <li>
            <ResumeButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}
