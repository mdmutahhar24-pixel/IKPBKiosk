import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Noto_Serif } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toast";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar";

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
  title: "IKPB Kiosk | Admin",
  description: "Admin page for IKPB Kiosk",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="w-full h-full">
      <div className="min-h-full flex flex-col">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1">
            <div className="fixed">
              <SidebarTrigger />
            </div>
            {children}
          </main>
        </SidebarProvider>
      </div>
      <Toaster />
    </div>
  );
}
