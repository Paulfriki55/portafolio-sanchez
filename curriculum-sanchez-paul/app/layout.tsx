import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/lib/ThemeContext'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Paul Sanchez - Portfolio',
  description: 'Portfolio profesional de Paul Sanchez, Desarrollador de Software',
  icons: {
    icon: [
      { url: '/images/logo_ps.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo_ps.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/logo_ps.png',
    apple: '/images/logo_ps.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.className} antialiased bg-white dark:bg-black text-gray-900 dark:text-white transition-all duration-500`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

