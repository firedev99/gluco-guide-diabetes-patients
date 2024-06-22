import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import Providers from "./providers"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "Gluco Guide - An Integrated Health Monitoring System for Diabetes Patients",
  description:
    "This web app is an integrated health monitoring system for diabetes patients",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
