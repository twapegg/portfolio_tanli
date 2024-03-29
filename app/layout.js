import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata = {
  title: "Stanley Altonaga - Developer Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={space.className}>{children}</body>
    </html>
  );
}
