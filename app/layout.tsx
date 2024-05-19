import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ассоциация представительств иностранных фармацевтических компаний и производителей в Республике Узбекистан",
  description: "Ассоциация представительств иностранных фармацевтических компаний и производителей в Республике Узбекистан",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <NextTopLoader
          color='#001561'
          showSpinner={false}
        />
        <div className="w-full h-full overflow-x-hidden">
          {children}
        </div>


      </body>
    </html>
  );
}
