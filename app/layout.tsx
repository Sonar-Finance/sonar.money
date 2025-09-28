import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const nextFont = Inter({
  subsets: [],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Sonar - Predictions, made human.",
  description:
    "The human-powered prediction market on Worldchain — turning collective foresight into tradable truth",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nextFont.className} antialiased`}>{children}</body>
    </html>
  )
}
