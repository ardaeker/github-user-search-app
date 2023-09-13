import "@/styles/tailwind.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import Provider from "@/app/provider";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "GitHub User Search - Arda Eker",
  description:
    "In this project, I used the GitHub users API to pull and display profile data.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.className} transition-colors duration-300 bg-ghost-white dark:bg-mirage px-6 `}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
