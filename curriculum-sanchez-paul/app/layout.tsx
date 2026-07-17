import './globals.css'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/lib/ThemeContext'
import CustomCursor from '@/components/CustomCursor'
import ParticlesBackground from '@/components/ParticlesBackground'
import ScrollProgress from '@/components/ScrollProgress'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Paul Sánchez - Software Engineer',
  description: 'Portfolio profesional de Paul Sánchez, Ingeniero de Software Full Stack',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500`}>
        <ThemeProvider>
          <ScrollProgress />
          <ParticlesBackground />
          <CustomCursor />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
