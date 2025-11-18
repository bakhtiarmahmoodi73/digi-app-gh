import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Providers from "./providers";
const iranSansBlack = localFont({
  src: "../public/fonts/IRANSansX-Black.woff2",
  variable: "--font-iran-sans-black",
  weight: "900",
});

const iranSansBold = localFont({
  src: "../public/fonts/IRANSansX-Bold.woff2",
  variable: "--font-iran-sans-bold",
  weight: "700",
});
const iranSansMedium = localFont({
  src: "../public/fonts/IRANSansX-Medium.woff2",
  variable: "--font-iran-sans-medium",
  weight: "500",
});
const iranSansRegular = localFont({
  src: "../public/fonts/IRANSansX-Regular.woff2",
  variable: "--font-iran-sans-regular",
  weight: "400",
});
const iranSansnumberBlack = localFont({
  src: "../public/fonts/IRANSansXFaNum-Black.woff2",
  variable: "--font-number-sans-black",
  weight: "900",
});
const iranSansnumberBold = localFont({
  src: "../public/fonts/IRANSansXFaNum-Bold.woff2",
  variable: "--font-number-sans-bold",
  weight: "700",
});
const iranSansnumberMedium = localFont({
  src: "../public/fonts/IRANSansXFaNum-Medium.woff2",
  variable: "--font-number-sans-medium",
  weight: "500",
});
const iranSansRegularNumber = localFont({
  src: "../public/fonts/IRANSansXFaNum-Regular.woff2",
  variable: "--font-number-sans-regular",
  weight: "400",
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
        className={`${iranSansBlack.variable} ${iranSansBold.variable} ${iranSansMedium.variable} ${iranSansRegular.variable} ${iranSansnumberBlack.variable} ${iranSansnumberBold.variable} ${iranSansnumberMedium.variable}  ${iranSansRegularNumber.variable}`}
      >
        <Providers>
          <Header />

          <main>
            <div className="">{children}</div>
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
