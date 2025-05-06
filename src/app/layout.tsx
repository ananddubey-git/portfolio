import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReduxProvider } from '@/src/store/provider'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Anand Dubey | Portfolio',
  description: 'Professional Portfolio Built with Next.js, Redux, and Tailwind CSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          <Header />
            {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
