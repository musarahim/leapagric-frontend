import '@/app/styles/globals.css'
import Provider from '@/redux/provider'
import { Inter } from 'next/font/google'
import { Footer, Navbar, RequireAuth } from '../../components'
import { Setup } from '../../components/utils'

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
          <RequireAuth>
          <Setup />
          <Navbar />
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 prose">{children}</div>
      
        <Footer />
        </RequireAuth>
          </Provider>
        </body>
    </html>
  )
}
