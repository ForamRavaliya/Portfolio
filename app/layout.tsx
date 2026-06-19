import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer Portfolio",
  description:
    "A modern animated developer portfolio featuring projects, skills, internships, resume highlights, and contact details.",
  keywords: [
    "portfolio",
    "frontend developer",
    "full stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL"
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Developer Portfolio",
    description: "Premium animated portfolio for a modern developer.",
    type: "website",
    locale: "en_US"
  },
  metadataBase: new URL("https://your-domain.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
