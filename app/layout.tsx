import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import {Appbar} from '@/components/appbar'

const inter = Poppins({ subsets: ['latin'], weight:"500" })

export const metadata: Metadata = {
  title: 'Innova',
  description:'Mobile'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Appbar/>
        
        {children}

      </body>
    </html>
  )
}
