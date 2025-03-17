import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Molecular Mooring - Bio-Seer Interpreter</title>
        <meta
          name="description"
          content="Discover molecular connections between names through the eyes of a Bio-Seer"
        />
      </head>
      <body className={`${inter.className} bg-[#1a1a2e] text-[#e4e4e4] min-h-screen`}>
        <div className="fixed inset-0 bg-[url('/mystical-bg.png')] opacity-10 pointer-events-none" />
        {children}
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
