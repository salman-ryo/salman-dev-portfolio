import Header from "./_components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Salman Dev",
  description: "Salman's portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-gray-950 pt-28 sm:pt-36`}>
        <div className="bg-[#ffc4fb] h-[31.25rem] -z-10 w-[31.25rem] sm:w-[68.75rem] absolute top-[-6rem] right-[11rem] rounded-full blur-[10rem]"></div>
        <div className="bg-[#c2d6ff] h-[31.25rem] -z-10 w-[31.25rem] sm:w-[68.75rem] absolute top-[-1rem] left-[-35rem] md:left-[-33rem] lg:lef-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] rounded-full blur-[10rem]"></div>
        <Header/>
        {children}
      </body>
    </html>
  );
}
