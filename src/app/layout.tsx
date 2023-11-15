import '@/app/styles/globals.css';
import { Chat } from '@/components';
import { Metadata } from "next";
import { Inter } from 'next/font/google';
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
        <Chat />
        {children}
        </body>
    </html>
  )
}
