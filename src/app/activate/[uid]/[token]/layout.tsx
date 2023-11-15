import "@/app/styles/globals.css";
import { Footer, Navbar } from "@/components";
import { Setup } from "@/components/utils";
import Provider from "@/redux/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: "Farm Wise",
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
          <div>{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
