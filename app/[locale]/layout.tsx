import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Ассоциация представительств иностранных фармацевтических компаний и производителей в Республике Узбекистан",
  description:
    "Ассоциация Представительств Иностранных Фармацевтических Компаний и Производителей Республики Узбекистан является негосударственной некоммерческой организацией и представляет на рынке Узбекистана профессиональные и деловые интересы международных фармацевтических компаний-производителей оригинальных фармацевтических препаратов и медицинского оборудования",
  icons: {
    icon: "/logo.png",
  },
};

interface Props {
  params: { locale: string };
  children: React.ReactNode;
}
export default function RootLayout({ params, children }: Readonly<Props>) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <NextTopLoader color="#001561" showSpinner={false} />
        <div className="w-full h-full overflow-x-hidden">{children}</div>
      </body>
    </html>
  );
}
