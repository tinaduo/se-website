import { Lora, Poppins } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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
