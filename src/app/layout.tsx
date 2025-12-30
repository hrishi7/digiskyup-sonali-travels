import type { Metadata, Viewport } from "next";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Sonali Tour & Travels - Your Travel Partner",
  description: "Explore amazing tour packages and destinations with Sonali Tour & Travels",
  keywords: ["travel", "tours", "packages", "vacation", "holiday", "destinations"],
  authors: [{ name: "Sonali Tour & Travels" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Layout>{children}</Layout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
