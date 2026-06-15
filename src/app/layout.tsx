import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dharma Teja Putta — Software Engineer",
  description:
    "Software Engineer with hands-on experience building scalable backend systems, RESTful APIs, and full-stack applications using Python, FastAPI, Node.js, Java, Spring Boot, PostgreSQL, and React.",
  keywords: [
    "Dharma Teja Putta",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Python Developer",
    "FastAPI",
    "Node.js",
    "Java Spring Boot",
    "React Developer",
    "REST API",
    "Hyderabad",
    "Software Engineering Intern",
  ],
  authors: [{ name: "Dharma Teja Putta", url: "https://linkedin.com/in/dharma-tejaa" }],
  creator: "Dharma Teja Putta",
  openGraph: {
    type: "website",
    title: "Dharma Teja Putta — Software Engineer",
    description:
      "Software Engineer specializing in scalable backend systems, RESTful APIs, and full-stack applications.",
    siteName: "Dharma Teja Putta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharma Teja Putta — Software Engineer",
    description: "Software Engineer · Python · FastAPI · Node.js · Java · React",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
