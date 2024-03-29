
import { SessionProvider } from 'next-auth/react'
import './globals.css'
import { Inter } from 'next/font/google'

import Providerauth from '@/components/Providerauth'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providerauth>
            {children}
        </Providerauth>
      </body>
    </html>
  )
}

