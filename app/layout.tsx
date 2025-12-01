import type React from "react"
import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "Petronas Kuwait | Your Trusted Partner in Business Excellence",
    template: "%s | Petronas Kuwait",
  },
  description: "Petronas Kuwait delivers tailored business solutions with proven expertise, dedicated support, and industry-leading quality assurance. Transform your business with our comprehensive services.",
  keywords: ["Petronas", "Kuwait", "Business Solutions", "Printing Solutions", "Technology Partner", "Enterprise Solutions"],
  authors: [{ name: "Petronas Kuwait" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Petronas Kuwait",
    title: "Petronas Kuwait | Your Trusted Partner in Business Excellence",
    description: "Transform your business with Petronas Kuwait's proven solutions and dedicated support.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen antialiased">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem 
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
