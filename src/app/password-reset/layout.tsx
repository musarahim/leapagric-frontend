import "@/app/styles/globals.css";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/app/components";
import Provider from "@/redux/provider";
import {Setup} from  "@/app/components/utils"

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Setup />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
