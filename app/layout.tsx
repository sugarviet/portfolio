import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Đặng Hoàng Việt — Fullstack Developer",
  description:
    "Fullstack Developer with 2+ years building production SaaS applications. React.js, Next.js, Node.js, TypeScript. Ho Chi Minh City.",
  keywords: [
    "Đặng Hoàng Việt",
    "Fullstack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Ho Chi Minh City",
  ],
  authors: [{ name: "Đặng Hoàng Việt" }],
  openGraph: {
    title: "Đặng Hoàng Việt — Fullstack Developer",
    description:
      "Building production-grade SaaS apps across the full stack. 2+ years experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text-primary antialiased">{children}</body>
    </html>
  );
}
