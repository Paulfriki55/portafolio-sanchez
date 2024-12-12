import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Paul Sanchez - Portfolio',
  description: 'Portfolio profesional de Paul Sanchez, Desarrollador de Software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.className} bg-gradient-to-br from-gray-900 to-blue-900 text-white`}>
        {children}
      </body>
    </html>
  )
}

