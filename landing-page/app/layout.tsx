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
        <main className="mx-auto flex max-w-4xl flex-col px-6 py-12">
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
