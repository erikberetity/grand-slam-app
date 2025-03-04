// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Providers } from '@/components/Providers'
import { QueryProvider } from '@/providers/QueryProvider'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grand Slam Stats',
  description: 'Track and analyze Grand Slam tennis tournaments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <Providers>
              <Navbar />
              <main className="container mx-auto px-4 py-8">
                {children}
              </main>
            </Providers>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
