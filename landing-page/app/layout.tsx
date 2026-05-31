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
    <html lang="en" className="bg-white">
      <body className="">
        <TopNavBar />
        <main className="flex flex-col gap-2 mx-auto max-w-4xl px-6 py-10 bg-white">
          <div className="">{children}</div>
        </main>
      </body>
    </html>
  );
}
