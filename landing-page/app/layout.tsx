import type { Metadata } from "next";
import "./globals.css";
import TopNavBar from "@/components/TopNavLayout";

export const metadata: Metadata = {
  title: "Arya Nahri",
  description: "Personal site and blog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body>
        <TopNavBar />
        <main className="mx-auto flex max-w-2xl flex-col px-5 py-8 sm:px-6 sm:py-10">
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
