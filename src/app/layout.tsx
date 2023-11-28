import Footer from "./_components/Footer";
import Header from "./_components/Header";
import MagicWand from "./_components/MagicWand"
import ThemeSwitch from "./_components/ThemeSwitch";
import ActiveTabContextProvider from "./_context/ActiveTabContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
      <body className={`relative transition-all ${inter.className} bg-slate-100 dark:bg-gradient-to-tr from-black via-[#000929] to-[#2b034a] text-gray-950 dark:text-gray-300 pt-28 sm:pt-36`}>
        <div className="bg-[#ffc4fb] dark:hidden h-[21.25rem] -z-10 w-[21.25rem] sm:w-[58.75rem] fixed top-[-6rem] right-[11rem] rounded-full blur-[10rem]"></div>
        <div className="bg-[#9ebefd] dark:hidden h-[21.25rem] -z-10 w-[21.25rem] sm:w-[58.75rem] fixed top-[-1rem] left-[-35rem] md:left-[-33rem] lg:lef-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] rounded-full blur-[10rem]"></div>
        <ActiveTabContextProvider>
        <Header/>
        {children}
        <Footer/>
        <Toaster position="bottom-center"/>
        <MagicWand/>
        <ThemeSwitch/>
        </ActiveTabContextProvider>
      </body>
    </html>
  );
}
