import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import BackgroundSparkles from '@/components/background-sparkles';

export const metadata: Metadata = {
  title: 'Nations of Legends | Modern Mountain Fairytale',
  description: 'Nations of Legends Festival 2025 - Erlebt 4 Tage voller Geborgenheit mit psychedelischer Musik, Kunst und Natur.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning className="passive-scroll">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="preload" href="/assets/467500785_122188906466190149_3533787961546298319_n.jpg" as="image" />
      </head>
      <body className="font-sans scrollbar-hide">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="min-h-screen flex flex-col relative content-container">
            <BackgroundSparkles />
            <Header />
            <main className="flex-grow content-container">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}