import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flooring Website Conversion Tool Demo',
  description:
    'Interactive model flooring website with conversion coach notes for flooring companies.',
  generator: 'v0.dev',
  // The parent landing page is the SEO page — keep this embedded tool out of search.
  robots: 'noindex, nofollow',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-slate-100">
      <body>{children}</body>
    </html>
  )
}
