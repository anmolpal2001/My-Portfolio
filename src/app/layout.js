import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Anmol Pal | Fullstack Developer",
  description: "My Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark:bg-dark" >
      <body className={montserrat.className} suppressHydrationWarning={true}>
        <main className="bg-light w-full min-h-screen dark:bg-dark">
          <Navbar />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
