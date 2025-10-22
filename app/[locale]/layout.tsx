import React from "react";

import type { Metadata } from "next";

import ClientTranslationProvider from "@/components/ClientTranslationProvider";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export const metadata: Metadata = {
  title: "Tef Analytics",
  description: "",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-green-500">
      <ClientTranslationProvider locale={locale}>
        <Navbar />
      </ClientTranslationProvider>
      {children}
      <Footer />
    </main>
  );
}
