import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Aluminium Kitchen Services in Delhi | Modular Kitchen & Home Interior Experts",
  description:
    "Aluminium Kitchen Services in Delhi and across India offering durable, rust-proof, fire-resistant aluminium kitchens, modular kitchens, modular and aluminium almirahs, LCD panels, vanities, POP work, UPVC windows, painting, office interiors, full renovation, and complete home interior solutions.",
  keywords:[
    "Aluminium Kitchen Services in Delhi, Aluminium Kitchen Services in India, Modular Kitchen Services in Delhi, Modular Almirah Services in Delhi, Aluminium Almirah Services in Delhi, Modular LCD Panel Services in Delhi, Vanity Services in Delhi, Bathroom Vanity Units in Delhi, POP Work Services in Delhi, UPVC Windows Services in Delhi, Painting Services in Delhi, Office Interior Services in Delhi, Full Renovation Services in Delhi, Home Interior Services in Delhi"],
    verfication:{
      google: "fVvEq_xWs1XJUQkbRqFVrq-E42OrefkyLk0rknFvLCE",
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
