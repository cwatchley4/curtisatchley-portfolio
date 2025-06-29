import type { Metadata } from "next";
import { Merriweather_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./_components/layout/Footer";

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curtis Atchley | Web Developer in Canton, IL",
  description: "I connect businesses with their customers online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweatherSans.variable} ${firaCode.variable} antialiased`}
      >
        <Toaster
          toastOptions={{
            style: {
              marginTop: "2rem", // Adjust this value as desired
            },
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
