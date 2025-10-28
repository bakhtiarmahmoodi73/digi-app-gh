import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Providers from "./providers";

const iranSans = localFont({
  src: "../public/fonts/IRANSansX-RegularD4.ttf",
  variable: "--font-iran-sans",
  weight: "100 900",
});
const iranSansnumber = localFont({
  src: "../public/fonts/IRANSansXFaNum-LightD4.ttf",
  variable: "--font-number-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "my project",
  description: "انجام پروژه عملی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranSans.variable} ${iranSansnumber.variable} overflow-x-hidden w-full     ` }
      >
        <Providers>
         
          <Header />

          
          {/* <main className="">
            <div className="">{children}</div>
          </main> */}

         
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
