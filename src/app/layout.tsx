import './globals.css'
import 'mingcute_icon/font/Mingcute.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: `pphui8.github.io`,
    default: `pphui8`,
  },
  description: 'personal website of pphui8',
  keywords: `pphui8,pphui,Jinhui,湫月汐,个人网站`,
  icons: [
    {
      url: `/pphui8.ico`,
      type: 'image/icon',
      sizes: 'any',
    },
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: `pphui8.github.io`,
      template: `pphui8.github.io`,
    },
    description: `pphui8: personal website of pphui8`,
    siteName: `pphui8.github.io`,
    locale: 'en_US',
    type: 'website',
    url: `pphui8.com`,
    images: {
      url: '',
      username: 'pphui8',
    },
  },
  twitter: {
    creator: `pphui8`,
    card: 'summary_large_image',
    title: `pphui8.github.io`,
    description: `pphui8: personal website of pphui8`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
