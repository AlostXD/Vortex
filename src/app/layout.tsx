import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Vortex",
  description: "An hour tracking Website for remote teams",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
