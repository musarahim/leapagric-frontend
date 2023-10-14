import "@/app/styles/globals.css";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/app/components";
import { Metadata } from "next";
import Provider from "@/redux/provider";
import {Setup} from  "@/app/components/utils"

const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: "Farm Wise | Auth",
  description: "Farming made easy",
};

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
          <div className="prose">{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
