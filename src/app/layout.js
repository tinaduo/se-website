import { Lora, Poppins } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body
          className={`${lora.variable} ${poppins.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
