import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Streakup – Track, Improve, and Celebrate Your Habits Daily',
  description: 'Streakup helps you track daily streaks, earn XP, unlock badges, and compete on leaderboards. Coming soon to Google Play and the App Store!',
  openGraph: {
    title: 'Streakup – Track, Improve, and Celebrate Your Habits Daily',
    description: 'Track your habits, earn XP, and unlock achievements with Streakup!',
    type: 'website',
    url: 'https://streakup.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Streakup App Preview'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className={inter.variable}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  )
}
