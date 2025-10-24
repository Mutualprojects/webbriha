// app/layout.tsx
import './globals.css'
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: 'Professional Next.js Website',
  description: 'Using Google Fonts with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="font-body bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
