import React from "react";

import type { Metadata } from "next";

import ClientTranslationProvider from "@/components/ClientTranslationProvider";
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
    <>
      <ClientTranslationProvider locale={locale}>
        <Navbar />
      </ClientTranslationProvider>
      {children}
    </>
  );
}
