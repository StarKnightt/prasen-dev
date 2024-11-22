'use client'

import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

function RootLayout({ children }) {
  const pathname = usePathname()

  return (
    <html lang="en" className="dark">
      <head>
        <title>Prasenjit Nayak</title>
        <meta name="description" content="Developer from Delhi, India" />
      </head>
      <body className={`${inter.className} bg-black text-gray-200`}>
        <div className="max-w-6xl mx-auto px-4">
          <header className="py-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">P</Link>
            <nav className="space-x-8">
              <Link 
                href="/" 
                className={`hover:text-cyan-400 transition-colors ${pathname === '/' ? 'text-cyan-400' : ''}`}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className={`hover:text-cyan-400 transition-colors ${pathname === '/projects' ? 'text-cyan-400' : ''}`}
              >
                Projects
              </Link>
              <Link 
                href="/blog" 
                className={`hover:text-cyan-400 transition-colors ${pathname === '/blog' ? 'text-cyan-400' : ''}`}
              >
                Blog
              </Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout

