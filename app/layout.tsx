import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Pokedex",
  description: "Pokedex mamalona no ves o que wey",
  manifest: "/manifest.json",
  icons: {
    apple:"/icon.png"
  },
  themeColor:"#000000"
}

// Providers wrap around our application and give them access to data.
// NextThemesProvider - Give our application access to light / dark mode data.
// Providers are generally on the client side ("use client")
// Switch from light mode to dark mode <-- user interaction / needs the client to exist.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="flex min-h-screen flex-col items-center p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
              <Link href="/"><h2 className="text-2xl text-bold">Pokedexxx</h2></Link>
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
