import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Keiko Bot ✨',
  description:
    'Keiko Bot is an multi-purpose Discord bot that helps you manage your server with ease.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body
        className={`${inter.variable} font-inter tracking-tight antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  )
}
