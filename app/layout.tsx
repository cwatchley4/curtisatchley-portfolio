import type { Metadata } from "next";
import { Merriweather_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./_contexts/AppContext";

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
        className={`${merriweatherSans.variable} ${firaCode.variable} antialiased transition-colors duration-300 ease-in-out`}
      >
        <Toaster
          toastOptions={{
            style: {
              marginTop: "2rem", // Adjust this value as desired
            },
          }}
        />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
