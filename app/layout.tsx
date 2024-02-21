import type { Metadata } from 'next'
import { ThemeProvider } from '@mui/material/styles';

import Footer from '@/components/footer.component'
import Header from '@/components/header.component'

import theme from '@/theme'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-theme-light text-white'>
        <ThemeProvider theme={theme}>
          <Header />
          <main className='w-full h-full min-h-[78vh]'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}