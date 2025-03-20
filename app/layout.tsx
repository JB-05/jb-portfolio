import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/shared/ThemeToggle';
import { StarryBackground } from './components/shared/StarryBackground';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  title: 'Joel Biju | Portfolio',
  description: 'A modern portfolio website showcasing my work as a developer and designer.',
  keywords: ['portfolio', 'developer', 'designer', 'web development', 'software engineering'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Personal portfolio showcasing my work, experience, and achievements.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Your Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Add your Open Graph image to the public folder
        width: 1200,
        height: 630,
        alt: 'Your Name - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Portfolio',
    description: 'Personal portfolio showcasing my work, experience, and achievements.',
    images: ['/twitter-image.jpg'], // Add your Twitter image to the public folder
  },
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${inter.className} min-h-screen transition-colors duration-300
        dark:bg-gray-900 dark:text-white
        light:bg-gray-50 light:text-gray-900`}>
        <ThemeProvider>
          <StarryBackground />
          <ThemeToggle />
          <Navigation />
          <main>
            {children}
            <Contact />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
} 