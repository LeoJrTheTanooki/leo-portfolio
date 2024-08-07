import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "./components/NavbarComponent/page";
import localFont from "next/dist/compiled/@next/font/dist/local";
import FooterComponent from "./components/FooterComponent/page";

const inter = Inter({ subsets: ["latin"] });
// const pixeltype = localFont({ src: './Pixeltype.ttf' })

export const metadata: Metadata = {
  title: "Leo's Portfolio",
  description: "A website portfolio to show who Leo is",
  icons: {
    icon: "/SiteIcon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/SiteIcon.png" sizes="any" />
      </head>
      <body className={`${inter.className} grid justify-center p-10`}>
        <div className="bg-white max-w-7xl w-screen">
          <NavbarComponent />
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
