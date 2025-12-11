import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Darsh Patel | Full Stack Developer & UI/UX Enthusiast",
  description: "Portfolio of Darsh Patel - A passionate Full Stack Developer creating modern, responsive web experiences with expertise in MERN, Django, Flutter, and more.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "MERN", "Django", "Flutter", "Portfolio"],
  authors: [{ name: "Darsh Patel" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "Darsh Patel | Full Stack Developer",
    description: "Creating modern, responsive web experiences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
