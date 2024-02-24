'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ResumeButton() {
  const pathname = usePathname()
  const isResume = pathname === '/curriculo'
  const href = isResume ? '/curriculo.pdf' : '/curriculo'
  const text = isResume ? 'Baixar' : 'Currículo'

  return (
    <Link
      href={href}
      download={isResume ? 'Vinícios Barbosa - Resume.pdf' : undefined}
      className="py-2 px-5 rounded-full border-2 text-sm transition-colors border-gray-600  hover:bg-gray-100 dark:bg-gray-600/30 dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-500/30"
    >
      {text}
    </Link>
  )
}
