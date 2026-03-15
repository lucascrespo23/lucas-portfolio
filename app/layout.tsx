import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Crespo — Creative Director & Designer",
  description:
    "Panama-based creative director and designer. Currently at Every and running VeryVisual Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
