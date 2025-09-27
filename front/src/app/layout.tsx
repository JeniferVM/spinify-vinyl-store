import type { Metadata } from "next";
import { Heebo, Roboto, Signika_Negative } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/authContext";

const geistheebo = Heebo({
  variable: "--font-hebbo",
  subsets: ["latin"],
});

const geistroboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const geistSignika = Signika_Negative({
  variable: "--font-geist-signika",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spinify",
  description: "Buy your vinil love in Spinify",
  icons: {
    icon: "/assets/ShortLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistheebo.variable} ${geistroboto.variable} ${geistSignika.variable} antialiased`}
      >
        <AuthProvider>
          <>
            <NavBar />
            {children}
            <Footer />
          </>
        </AuthProvider>
      </body>
    </html>
  );
}
