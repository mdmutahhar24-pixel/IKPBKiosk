import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Noto_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";
import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";

const notoSerifHeading = Noto_Serif({subsets:['latin'],variable:'--font-heading'});

const montserrat = Montserrat({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IKPB Kiosk",
  description: "Personal Book Checkout :P",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", montserrat.variable, notoSerifHeading.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <Toaster />
    </html>
  );
}
