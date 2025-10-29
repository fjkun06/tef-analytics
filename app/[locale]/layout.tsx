/**
 * LocaleLayout
 *
 * Root server component for locale-specific page layouts.
 * Provides localization context via ClientTranslationProvider and wraps all pages
 * with Navbar and Footer components. Handles dynamic locale parameter from URL.
 *
 * @param {React.ReactNode} props.children - Page content to render
 * @param {Promise<{ locale: string }>} props.params - Dynamic locale parameter from URL segment
 *
 * @returns {Promise<React.ReactElement>} HTML layout with locale context and navigation
 */
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
}>): Promise<React.ReactElement> {
  const { locale } = await params;

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-slate-300">
      {/* ClientTranslationProvider wraps Navbar to provide localization context */}
      <ClientTranslationProvider locale={locale}>
        <Navbar />
        {children}
        <Footer />
      </ClientTranslationProvider>
    </main>
  );
}
