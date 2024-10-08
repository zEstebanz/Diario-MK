import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'dev-test',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <body className={inter.className}>
          <Nav></Nav>
          {children}
          <Footer></Footer>
        </body>
      </head>
    </html>
  )
}
