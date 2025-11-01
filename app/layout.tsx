// app/layout.tsx
import { NavigationMenuDemo } from '@/components/ui/NavigationMenuDemo'
import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import HoverFooter from '@/components/HoverFooter'

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
  title: 'Skyvolt',
  description: 'Using Google Fonts with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="font-body ">
      {/* Header */}
        <NavigationMenuDemo />

        {/* Main content in the middle */}
        <main className="">
          {children}
        </main>

        {/* Footer */}
        <HoverFooter />
      </body>
    </html>
  )
}
