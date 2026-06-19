import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Sidebar from "@/components/layout/Sidebar";
import ClientLayout from "./client-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asian Trip 2027",
  description:
    "A 92-day journey through China, Vietnam, and Japan. March 1 - May 31, 2027.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full">
        <ThemeProvider>
          <div className="flex h-full">
            <div className="hidden lg:block">
              <Sidebar />
            </div>
            <main className="flex-1 flex flex-col lg:pl-64">
              <ClientLayout>{children}</ClientLayout>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
