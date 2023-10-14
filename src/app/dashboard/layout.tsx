import '@/app/styles/globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/redux/provider'
import { Navbar, Footer } from '../components'
import { Setup } from '../components/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Farm Wise',
  description: 'Farming made easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
          <Provider>
          <Setup />
          <Navbar />
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      
        <Footer />
          </Provider>
        
        </body>
    </html>
  )
}
