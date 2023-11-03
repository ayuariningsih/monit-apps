import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TransferNow - Financial platform for millenial businesses',
  description: 'Financial platform for millenial businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className="relative">
        {children}
      </body>
    </html>
  )
}
