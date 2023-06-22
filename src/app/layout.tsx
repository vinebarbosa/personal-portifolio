import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vinícios Barbosa 🚀 - Software Developer',
  description: 'Hi, stranger 👋🏼. I\'m Vinícios, I\'m software developer. I\'m currently working at @LAIS as a Frontend Developer. I\'m passionate about technology and I love to learn new things.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
