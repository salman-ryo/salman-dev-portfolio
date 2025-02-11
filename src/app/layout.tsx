import Footer from "./_components/Footer";
import Header from "./_components/Header";
import MagicWand from "./_components/MagicWand"
import ThemeSwitch from "./_components/ThemeSwitch";
import ActiveTabContextProvider from "./_context/ActiveTabContext";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata = {
  metadataBaseL:new URL("https://dev-salman.vercel.app"),
  title: "Dev Salman",
  description: "Portfolio site of Ryo (alias Salman), a full-stack developer helping people build scalable SEO-friendly websites leveraging technologies like Next.js Express.js Django and others. Contact Ryo today for your software development needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative ${poppins.className} dark:bg-gradient-to-r from-[#000039] to-[#390059]  text-gray-950 dark:text-gray-300 pt-28 sm:pt-36`}
      >
        <div className="bg-[#d579ff] dark:hidden h-[16rem] -z-10 w-[21.25rem] sm:w-[58.75rem] fixed top-[-6rem] right-[7rem] rounded-full blur-[10rem]"></div>
        <div className="bg-cyan-200 dark:hidden h-[21.25rem] -z-10 w-[21.25rem] sm:w-[58.75rem] fixed top-[-1rem] left-[-35rem] md:left-[-33rem] lg:lef-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] rounded-full blur-[10rem]"></div>
        <ActiveTabContextProvider>
          <Header />
          {children}
          <Footer />

          <Toaster position="bottom-center" />
          {/* <BiSolidMagicWand/> */}
          <MagicWand/>
          <ThemeSwitch />
        </ActiveTabContextProvider>
      </body>
    </html>
  );
}
