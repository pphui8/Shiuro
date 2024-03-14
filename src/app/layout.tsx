import './globals.css'
import 'mingcute_icon/font/Mingcute.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: `pphui8.com`,
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
      default: `pphui8.com`,
      template: `pphui8.com`,
    },
    description: `Personal website of pphui8`,
    siteName: `pphui8.com`,
    locale: 'en_US',
    type: 'website',
    url: `pphui8.com`,
    images: {
      url: 'https://q1.qlogo.cn/g?b=qq&nk=1216595344&s=640',
      username: 'pphui8',
    },
  },
  twitter: {
    creator: `pphui8`,
    card: 'summary_large_image',
    title: `湫月汐`,
    description: `Personal website of pphui8`,
    images: {
      url: 'https://q1.qlogo.cn/g?b=qq&nk=1216595344&s=640',
      username: 'pphui8',
    }
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
