import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Sidebar from '@/components/layout/sidebar';
import TopBar from '@/components/layout/top-bar';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InfiniPaysCLM - AI-Powered Contract & Client Management',
  description: 'Comprehensive CLM and CRM platform with secure e-signature and payment integration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1">
              <TopBar />
              <main className="flex-1 overflow-y-auto bg-background">
                {children}
              </main>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}