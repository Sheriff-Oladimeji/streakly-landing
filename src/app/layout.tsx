import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Streakly – Track, Improve, and Celebrate Your Habits Daily',
  description: 'Streakly helps you track daily streaks, earn XP, unlock badges, and compete on leaderboards. Coming soon to Google Play and the App Store!',
  openGraph: {
    title: 'Streakly – Track, Improve, and Celebrate Your Habits Daily',
    description: 'Track your habits, earn XP, and unlock achievements with Streakly!',
    type: 'website',
    url: 'https://streakly.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Streakly App Preview'
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
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  )
}

