import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Software Engineer | Vinícios Barbosa Portfolio',
  description:
    'Olá, meu nome é Vinícios, sou Engenheiro de Software no LAIS. Sou um apaixonado por tecnologia e código aberto. Estou sempre em busca de novos desafios e oportunidades para aprender algo novo. Aqui você encontrará um pouco do meu trabalho e projetos pessoais.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
