import { Chat } from '@/components';
import Provider from '@/redux/provider'
import { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Setup } from '@/components/utils';
import '@/app/styles/globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
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
        <Chat />
        {children}
        </Provider>
        </body>
    </html>
  )
}
